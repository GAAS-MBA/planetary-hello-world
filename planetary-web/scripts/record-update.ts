#!/usr/bin/env node
/**
 * Record update metadata: location (ISO 6709), time (ISO 8601), SI units
 * Encrypts sensitive data - plaintext never exposed
 *
 * Env: PHW_UPDATE_SECRET (required for encryption)
 *      PHW_UPDATE_LAT, PHW_UPDATE_LON, PHW_UPDATE_ALT (optional)
 *
 * Usage: npx tsx scripts/record-update.ts
 */
import 'dotenv/config'
import { find } from 'geo-tz'
import { randomUUID } from 'node:crypto'
import { createCipheriv, randomBytes, scryptSync } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const repoRoot = join(rootDir, '..')

interface UpdateMetadataPlain {
  version: string
  commitHash: string
  timestamp: string
  location: { lat: number; lon: number; alt?: number } | null
}

function getVersion(): string {
  const pkg = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'))
  return pkg.version || '1.0.0'
}

function getCommitHash(): string {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: repoRoot }).toString().trim()
  } catch {
    return 'dev'
  }
}

function getCommitTimestamp(): string | null {
  try {
    return execSync('git show -s --format=%cI HEAD', { cwd: repoRoot }).toString().trim() || null
  } catch {
    return null
  }
}

function getLocation(): { lat: number; lon: number; alt?: number } | null {
  const lat = process.env.PHW_UPDATE_LAT
  const lon = process.env.PHW_UPDATE_LON
  if (lat == null || lon == null) return null
  const latN = parseFloat(lat)
  const lonN = parseFloat(lon)
  if (Number.isNaN(latN) || Number.isNaN(lonN)) return null
  const alt = process.env.PHW_UPDATE_ALT
  const result: { lat: number; lon: number; alt?: number } = { lat: latN, lon: lonN }
  if (alt != null) {
    const altM = parseFloat(alt)
    if (!Number.isNaN(altM)) result.alt = altM // SI: meters
  }
  return result
}

function encrypt(plaintext: string, secret: string): string {
  const salt = randomBytes(16)
  const key = scryptSync(secret, salt, 32)
  const iv = randomBytes(16)
  const cipher = createCipheriv('aes-256-gcm', key, iv)
  const encrypted = Buffer.concat([cipher.update(plaintext, 'utf8'), cipher.final()])
  const authTag = cipher.getAuthTag()
  const combined = Buffer.concat([salt, iv, authTag, encrypted])
  return combined.toString('base64')
}

function getTimezone(lat: number, lon: number): string | null {
  try {
    const tz = find(lat, lon)
    return tz && tz.length > 0 ? tz[0] : null
  } catch {
    return null
  }
}

function main(): void {
  const version = getVersion()
  const commitHash = getCommitHash()
  const timestamp = new Date().toISOString()
  const location = getLocation()

  const publicPath = join(rootDir, 'src', 'lib', 'journey-public.json')
  type JourneyEntry = { id: string; lat: number; lon: number; alt?: number; version: string; commitHash: string; timestamp: string; commitTimestamp?: string; timezone?: string }
  let publicJourney: { entries: JourneyEntry[] }
  try {
    publicJourney = JSON.parse(readFileSync(publicPath, 'utf-8'))
  } catch {
    publicJourney = { entries: [] }
  }

  // Backfill timezone for entries with lat/lon but no timezone
  let modified = false
  for (const e of publicJourney.entries) {
    if (e.lat != null && e.lon != null && !e.timezone) {
      const tz = getTimezone(e.lat, e.lon)
      if (tz) {
        e.timezone = tz
        modified = true
      }
    }
  }

  // Public journey: UUIDv4 + coordinates (no secret required)
  if (location) {
    const commitTimestamp = getCommitTimestamp()
    const timezone = getTimezone(location.lat, location.lon)
    publicJourney.entries.push({
      id: randomUUID(),
      lat: location.lat,
      lon: location.lon,
      ...(location.alt != null && { alt: location.alt }),
      version,
      commitHash,
      timestamp,
      ...(commitTimestamp != null && { commitTimestamp }),
      ...(timezone != null && { timezone }),
    })
    modified = true
  }

  if (modified) {
    writeFileSync(publicPath, JSON.stringify(publicJourney, null, 0) + '\n')
    if (location) {
      console.log(`Journey public: +1 (${location.lat.toFixed(4)}, ${location.lon.toFixed(4)})`)
    }
  }

  const secret = process.env.PHW_UPDATE_SECRET
  if (!secret || secret.length < 16) {
    console.warn(
      'PHW_UPDATE_SECRET not set or too short (min 16 chars). Skipping encrypted metadata.'
    )
    const output = {
      version,
      commitHash,
      encrypted: null as string | null,
    }
    writeFileSync(
      join(rootDir, 'src', 'lib', 'update-metadata.json'),
      JSON.stringify(output, null, 0) + '\n'
    )
    console.log(`Recorded version ${version}-${commitHash} (no encryption)`)
    return
  }

  const metadata: UpdateMetadataPlain = {
    version,
    commitHash,
    timestamp,
    location,
  }

  const toEncrypt = JSON.stringify({
    timestamp: metadata.timestamp,
    location: metadata.location,
  })

  const encrypted = encrypt(toEncrypt, secret)

  const output = {
    version: metadata.version,
    commitHash: metadata.commitHash,
    encrypted,
  }

  writeFileSync(
    join(rootDir, 'src', 'lib', 'update-metadata.json'),
    JSON.stringify(output, null, 0) + '\n'
  )

  // Append to journey.json for Journey Map visualization
  const journeyPath = join(rootDir, 'src', 'lib', 'journey.json')
  let journey: { entries: Array<{ version: string; commitHash: string; encrypted: string }> }
  try {
    journey = JSON.parse(readFileSync(journeyPath, 'utf-8'))
  } catch {
    journey = { entries: [] }
  }
  // Backfill: if journey empty but update-metadata has encrypted, migrate it
  if (journey.entries.length === 0) {
    const metaPath = join(rootDir, 'src', 'lib', 'update-metadata.json')
    try {
      const meta = JSON.parse(readFileSync(metaPath, 'utf-8'))
      if (meta.encrypted) {
        journey.entries.push({
          version: meta.version,
          commitHash: meta.commitHash,
          encrypted: meta.encrypted,
        })
      }
    } catch {
      /* ignore */
    }
  }
  if (journey.entries.every((e) => e.commitHash !== metadata.commitHash || e.version !== metadata.version)) {
      journey.entries.push({
      version: metadata.version,
      commitHash: metadata.commitHash,
      encrypted,
    })
  }
  writeFileSync(journeyPath, JSON.stringify(journey, null, 0) + '\n')

  console.log(
    `Recorded v${metadata.version}-${metadata.commitHash} | ` +
      `time: ${metadata.timestamp} | ` +
      `location: ${metadata.location ? 'yes' : 'no'} | encrypted | journey+1`
  )
}

main()
