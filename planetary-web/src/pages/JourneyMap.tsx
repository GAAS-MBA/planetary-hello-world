import { createSignal, createEffect, onCleanup, type Component } from 'solid-js'
import { MapPin } from 'lucide-solid'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
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

export const JourneyMap: Component = () => {
  const [showMap, setShowMap] = createSignal(false)
  const points = () => journey.entries
  let mapInstance: L.Map | null = null
  let markersLayer: L.LayerGroup | null = null

  const updateMap = () => {
    const pts = points()
    if (pts.length === 0 || !mapInstance) return

    const avgLat = pts.reduce((a, p) => a + p.lat, 0) / pts.length
    const avgLon = pts.reduce((a, p) => a + p.lon, 0) / pts.length

    mapInstance.setView([avgLat, avgLon], pts.length === 1 ? 10 : 6)

    if (markersLayer) {
      mapInstance.removeLayer(markersLayer)
    }
    markersLayer = L.layerGroup().addTo(mapInstance)

    pts.forEach((p) => {
      const marker = L.circleMarker([p.lat, p.lon], {
        radius: 8,
        fillColor: '#d97706',
        color: '#b45309',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      })
      const commitInfo = p.commitTimestamp
        ? `Commit: ${p.commitHash} (${formatCommitTimeLocal(p.commitTimestamp, p.timezone)})`
        : `Commit: ${p.commitHash}`
      marker.bindTooltip(
        p.address
          ? `${p.address}<br>${p.id}<br>Version: v${p.version} · ${commitInfo}`
          : `${p.id}<br>Version: v${p.version} · ${commitInfo}`,
        { permanent: false }
      )
      marker.addTo(markersLayer!)
    })

    if (pts.length > 1) {
      const latlngs = pts.map((p) => [p.lat, p.lon] as L.LatLngTuple)
      L.polyline(latlngs, { color: '#d97706', weight: 2, opacity: 0.7 }).addTo(markersLayer!)
    }
  }

  createEffect(() => {
    if (!showMap()) return
    const container = document.getElementById('journey-map-container')
    if (!container || mapInstance) return

    mapInstance = L.map(container).setView([35.6762, 139.6503], 4)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapInstance)
    updateMap()
  })

  onCleanup(() => {
    mapInstance?.remove()
    mapInstance = null
  })

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.journeyMap}</h1>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <div class="flex items-center justify-between p-4">
          <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
            <MapPin size={16} />
            Map
          </h2>
          <button
            type="button"
            class="rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-700 disabled:opacity-50"
            onClick={() => setShowMap(true)}
            disabled={showMap()}
          >
            {showMap() ? 'Map loaded' : 'Visualize Map'}
          </button>
        </div>
        {showMap() && (
          <div id="journey-map-container" class="h-96 w-full" style="min-height: 384px;" />
        )}
      </section>

      {points().length > 0 ? (
        <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <h2 class="font-mono text-sm font-medium text-stone-700">Genesis Trigger</h2>
          <p class="mt-1 text-xs text-stone-500">UUIDv4 identifier, coordinates (ISO 6709, SI), time (ISO 8601)</p>
          <p class="mt-1 text-xs text-stone-500">
            Times follow ISO 8601. The first record's local time on Mar 5 2026 can be determined: {points()[0]?.timestamp && points()[0]?.timezone
              ? formatCommitTimeLocal(points()[0].timestamp, points()[0].timezone)
              : '—'}
          </p>
          <ul class="mt-3 space-y-3 text-sm text-stone-600">
            {points().map((p, i) => (
              <li class="rounded-lg border border-stone-100 p-3">
                {p.address && (
                  <p class="text-sm font-medium text-stone-700">{p.address}</p>
                )}
                <div class="flex flex-wrap items-center gap-2 mt-1">
                  <span class="font-mono text-amber-600">#{i + 1}</span>
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
                <div class="mt-1 text-xs text-stone-500">
                  {p.timestamp}
                </div>
                <div class="mt-0.5 text-xs text-stone-500 font-mono">
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
