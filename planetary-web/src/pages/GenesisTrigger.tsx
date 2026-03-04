import { type Component } from 'solid-js'
import { Zap } from 'lucide-solid'
import { copy } from '../lib/copy'

import journeyData from '../lib/journey-public.json'

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
 * Format commit time in local time at the given timezone.
 * ISO 8601: YYYY-MM-DDTHH:mm:ss (standard includes seconds)
 */
function formatCommitTimeLocal(iso: string, timezone?: string): string {
  try {
    const d = new Date(iso)
    const tz = timezone || 'UTC'
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
            UUIDv4 (ISO/IEC 9834-8), coordinates (ISO 6709, SI), version (SemVer), time (ISO 8601)
          </p>
          <ul class="mt-3 space-y-3 text-sm text-stone-600">
            {points().map((p, i) => (
              <li class="rounded-lg border border-stone-100 p-3">
                {p.address && (
                  <p class="text-sm font-medium text-stone-700">{p.address}</p>
                )}
                <div class="flex flex-wrap items-center gap-2 mt-1">
                  <span class="font-mono text-amber-600">#{i}</span>
                  <span class="font-mono text-xs text-stone-500 break-all">{p.id}</span>
                </div>
                <div class="mt-2 flex flex-wrap gap-3">
                  <span class="font-mono">
                    lat: {p.lat.toFixed(6)}, lon: {p.lon.toFixed(6)}
                  </span>
                  {p.alt != null && (
                    <span class="font-mono text-stone-500">alt: {p.alt} m</span>
                  )}
                </div>
                <div class="mt-1 text-xs text-stone-500 font-mono">
                  Version: v{p.version} · Commit: {p.commitHash}
                  {p.commitTimestamp && (
                    <span class="text-stone-400"> · {formatCommitTimeLocal(p.commitTimestamp, p.timezone)}</span>
                  )}
                </div>
              </li>
            ))}
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
