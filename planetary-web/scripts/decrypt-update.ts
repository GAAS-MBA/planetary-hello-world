#!/usr/bin/env node
/**
 * Decrypt stored update metadata (authorized use only)
 * 格納された位置・時刻を復号（秘密鍵保持者のみ）
 *
 * Usage: PHW_UPDATE_SECRET=xxx npx tsx scripts/decrypt-update.ts
 */
import 'dotenv/config'
import { createDecipheriv, scryptSync } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

function decrypt(encryptedB64: string, secret: string): string {
  const combined = Buffer.from(encryptedB64, 'base64')
  const salt = combined.subarray(0, 16)
  const iv = combined.subarray(16, 32)
  const authTag = combined.subarray(32, 48)
  const encrypted = combined.subarray(48)
  const key = scryptSync(secret, salt, 32)
  const decipher = createDecipheriv('aes-256-gcm', key, iv)
  decipher.setAuthTag(authTag)
  return decipher.update(encrypted) + decipher.final('utf8')
}

function main(): void {
  const secret = process.env.PHW_UPDATE_SECRET
  if (!secret || secret.length < 16) {
    console.error('PHW_UPDATE_SECRET required (min 16 chars)')
    process.exit(1)
  }

  const meta = JSON.parse(
    readFileSync(join(rootDir, 'src', 'lib', 'update-metadata.json'), 'utf-8')
  )
  if (!meta.encrypted) {
    console.log('No encrypted metadata stored')
    process.exit(0)
  }

  const plain = decrypt(meta.encrypted, secret)
  const data = JSON.parse(plain)
  console.log('Version:', meta.version, meta.commitHash)
  console.log('Timestamp (ISO 8601):', data.timestamp)
  console.log('Location (ISO 6709, SI):', data.location ?? 'none')
}

main()
