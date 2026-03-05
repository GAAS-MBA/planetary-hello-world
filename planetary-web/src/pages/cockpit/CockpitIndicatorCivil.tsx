import { type Component } from 'solid-js'
import { Users } from 'lucide-solid'
import { A } from '@solidjs/router'
import indicatorData from '../../lib/indicator-planet-data.json'

interface CivIndicator {
  id: string
  label: string
  value: string
  unit: string
  ref: string
  note: string
}

const civData = indicatorData.civil as CivIndicator[]

export const CockpitIndicatorCivil: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Indicator — Civil</h1>
      <p class="mt-1 text-sm text-stone-500">
        Population, languages, currencies, countries, municipalities. ISO 639, ISO 4217. Base-currency aggregates.
      </p>
      <p class="mt-2">
        <A href="/cockpit" class="text-xs font-mono text-amber-600 hover:underline">
          ← Cockpit
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Users size={16} />
        Civil Indicators
      </h2>
      <div class="mt-3 space-y-2">
        {civData.map((e) => (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{e.label}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{e.note}</p>
            </div>
            <div class="text-right">
              <p class="font-mono text-sm text-amber-600">{e.value}</p>
              <p class="text-[10px] text-stone-400">{e.ref}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)
