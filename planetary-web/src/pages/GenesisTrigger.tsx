import { type Component } from 'solid-js'
import { Zap } from 'lucide-solid'
import { copy } from '../lib/copy'

import journeyData from '../lib/journey-public.json'

/** Greenwich Royal Observatory — UTC+0 prime meridian */
const GREENWICH = { lat: 51.4769, lon: 0.0, label: 'Greenwich Observatory' }

interface JourneyEntry {
  id: string
  lat: number
  lon: number
  alt?: number
  version: string
  commitHash: string
  timestamp: string
  commitTimestamp?: string
  timezone?: string
  commitCount?: number
  address?: string
}

/**
 * Format time in ISO 8601: YYYY-MM-DDTHH:mm:ss
 * tz: IANA timezone or 'UTC'
 */
function formatTime(iso: string, tz: string = 'UTC'): string {
  try {
    const d = new Date(iso)
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: tz,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).formatToParts(d)
    const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
    const pad = (v: string) => v.padStart(2, '0')
    const y = get('year')
    const m = pad(get('month'))
    const day = pad(get('day'))
    const h = pad(get('hour'))
    const min = pad(get('minute'))
    const s = pad(get('second'))
    return `${y}-${m}-${day}T${h}:${min}:${s}`
  } catch {
    return iso
  }
}

/** Get UTC+0 and local time strings for a given ISO timestamp */
function getDualTime(iso: string, timezone?: string): { utc: string; local: string } {
  const utc = formatTime(iso, 'UTC')
  const local = formatTime(iso, timezone || 'UTC')
  return { utc, local }
}

/** Get UTC offset string for timezone at given time, e.g. "UTC+9" or "UTC-5" */
function getUtcOffset(iso: string, timezone: string): string {
  if (timezone === 'UTC') return 'UTC+0'
  try {
    const d = new Date(iso)
    const parts = new Intl.DateTimeFormat('en', { timeZone: timezone, timeZoneName: 'shortOffset' }).formatToParts(d)
    const tz = parts.find((p) => p.type === 'timeZoneName')?.value ?? ''
    return tz ? tz.replace('GMT', 'UTC') : 'UTC'
  } catch {
    return 'UTC'
  }
}

const journey = journeyData as { entries: JourneyEntry[] }

export const GenesisTrigger: Component = () => {
  const points = () => journey.entries

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.genesisTrigger}</h1>
      </div>

      {points().length > 0 ? (
        <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
            <Zap size={16} />
            {copy.genesisTrigger}
          </h2>
          <p class="mt-1 text-xs text-stone-500">
            UUIDv4 (ISO/IEC 9834-8), coordinates (ISO 6709, SI), version (SemVer), time (ISO 8601). Times shown in UTC+0 (Greenwich) and commit location.
          </p>
          <ul class="mt-3 space-y-3 text-sm text-stone-600">
            {points().map((p, i) => {
              const timeIso = p.commitTimestamp || p.timestamp
              const dual = getDualTime(timeIso, p.timezone)
              return (
                <li class="rounded-lg border border-stone-100 p-3">
                  {p.address && (
                    <p class="text-sm font-medium text-stone-700">{p.address}</p>
                  )}
                  <div class="flex flex-wrap items-center gap-2 mt-1">
                    <span class="font-mono text-amber-600">#{i}</span>
                    <span class="font-mono text-xs text-stone-500 break-all">{p.id}</span>
                  </div>
                  <div class="mt-2 grid gap-2 text-xs font-mono">
                    <div class="text-stone-600">
                      <span class="font-medium text-stone-700">{GREENWICH.label} (UTC+0)</span>
                      <br />
                      lat: {GREENWICH.lat.toFixed(4)}, lon: {GREENWICH.lon.toFixed(4)}
                      <br />
                      <span class="text-stone-500">time: {dual.utc}Z</span>
                    </div>
                    <div class="text-stone-600">
                      <span class="font-medium text-stone-700">
                        Commit location ({p.timezone ? getUtcOffset(timeIso, p.timezone) : 'UTC'})
                      </span>
                      <br />
                      lat: {p.lat.toFixed(6)}, lon: {p.lon.toFixed(6)}
                      {p.alt != null && <span class="text-stone-500"> · alt: {p.alt} m</span>}
                      <br />
                      <span class="text-stone-500">time: {dual.local}</span>
                    </div>
                  </div>
                  <div class="mt-1 text-xs text-stone-500 font-mono">
                    Version: vᵢ{p.version} · Commit: {p.commitHash}
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
      ) : (
        <p class="text-sm text-stone-500">
          No records yet. Build with PHW_UPDATE_LAT and PHW_UPDATE_LON to accumulate entries.
        </p>
      )}
    </div>
  )
}
