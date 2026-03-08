import { createSignal, createEffect, onCleanup, type Component } from 'solid-js'
import { A } from '@solidjs/router'
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
  commitCount?: number
  address?: string
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
      const fmt = (iso: string, tz?: string) => {
        try {
          const d = new Date(iso)
          const parts = new Intl.DateTimeFormat('en-CA', { timeZone: tz || 'UTC', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).formatToParts(d)
          const g = (t: string) => parts.find((x) => x.type === t)?.value ?? ''
          const pad = (v: string) => v.padStart(2, '0')
          return `${g('year')}-${pad(g('month'))}-${pad(g('day'))}T${pad(g('hour'))}:${pad(g('minute'))}:${pad(g('second'))}`
        } catch { return iso }
      }
      const commitInfo = p.commitTimestamp
        ? `Commit: ${p.commitHash} (${fmt(p.commitTimestamp, p.timezone)})`
        : `Commit: ${p.commitHash}`
      marker.bindTooltip(
        p.address
          ? `${p.address}<br>${p.id}<br>Version: vᵢ${p.version} · ${commitInfo}`
          : `${p.id}<br>Version: vᵢ${p.version} · ${commitInfo}`,
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

      <p class="text-sm text-stone-500">
        <A href="/genesis-trigger" class="text-amber-600 hover:text-amber-700 hover:underline">
          Genesis Trigger
        </A>
        {' · Recorded points with UUIDv4, coordinates (ISO 6709), time (ISO 8601)'}
      </p>
    </div>
  )
}
