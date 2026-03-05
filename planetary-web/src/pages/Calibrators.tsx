import { type Component } from 'solid-js'
import { Gauge, Zap, Globe } from 'lucide-solid'
import { copy } from '../lib/copy'

import calibratorsData from '../lib/calibrators-public.json'

interface Calibrator {
  id: string
  name: string
  type: string
  lat: number
  lon: number
  alt?: number
  country: string
  description: string
}

const data = calibratorsData as { calibrators: Calibrator[] }

const typeLabels: Record<string, string> = {
  reference: 'Reference',
  gravitational: 'Gravitational',
  electromagnetic: 'Electromagnetic',
}

const typeIcons: Record<string, typeof Gauge> = {
  reference: Globe,
  gravitational: Zap,
  electromagnetic: Gauge,
}

export const Calibrators: Component = () => {
  const byType = () => {
    const ref = data.calibrators.filter((c) => c.type === 'reference')
    const grav = data.calibrators.filter((c) => c.type === 'gravitational')
    const em = data.calibrators.filter((c) => c.type === 'electromagnetic')
    return { reference: ref, gravitational: grav, electromagnetic: em }
  }

  const CalibratorCard = (c: Calibrator) => {
    const Icon = typeIcons[c.type] ?? Gauge
    return (
      <li class="rounded-lg border border-stone-100 p-3">
        <div class="flex flex-wrap items-center gap-2">
          <Icon size={16} class="shrink-0 text-amber-600" />
          <span class="font-medium text-stone-700">{c.name}</span>
          <span class="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">
            {typeLabels[c.type] ?? c.type}
          </span>
        </div>
        <p class="mt-1 text-sm text-stone-600">{c.description}</p>
        <div class="mt-2 font-mono text-xs text-stone-500">
          <span class="text-amber-600">{c.id}</span>
          <br />
          lat: {c.lat.toFixed(6)}, lon: {c.lon.toFixed(6)}
          {c.alt != null && ` · alt: ${c.alt} m`}
          <br />
          {c.country}
        </div>
      </li>
    )
  }

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.calibrators}</h1>
        <p class="mt-1 text-sm text-stone-500">
          Coordinates of cosmic event observation facilities on Earth. Gravitational wave detectors (LIGO, Virgo, KAGRA), electromagnetic observatories (ALMA, VLT, EHT array), and reference (Greenwich). UUIDv4 per facility. ISO 6709.
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Globe size={16} />
          Reference (基準)
        </h2>
        <ul class="mt-3 space-y-3 text-sm">
          {byType().reference.map(CalibratorCard)}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Zap size={16} />
          Gravitational Wave Detectors (重力波観測装置)
        </h2>
        <p class="mt-1 text-xs text-stone-500">LIGO, Virgo, KAGRA. LVK collaboration.</p>
        <ul class="mt-3 space-y-3 text-sm">
          {byType().gravitational.map(CalibratorCard)}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Gauge size={16} />
          Electromagnetic Observatories (電磁波観測装置)
        </h2>
        <p class="mt-1 text-xs text-stone-500">Optical, mm, submm. EHT array, ALMA, VLT, etc.</p>
        <ul class="mt-3 space-y-3 text-sm">
          {byType().electromagnetic.map(CalibratorCard)}
        </ul>
      </section>
    </div>
  )
}
