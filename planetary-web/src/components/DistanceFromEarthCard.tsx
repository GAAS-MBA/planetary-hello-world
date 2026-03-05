import { createSignal, createMemo, onMount, type Component } from 'solid-js'
import { Globe } from 'lucide-solid'
import { A } from '@solidjs/router'
import { computeDistances, formatKm } from '../lib/solar-distance'

type Props = {
  showLink?: boolean
}

export const DistanceFromEarthCard: Component<Props> = (props) => {
  const [now, setNow] = createSignal(new Date())
  const rows = createMemo(() => computeDistances(now()))

  onMount(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  })

  const categoryLabel = (c: string) =>
    c === 'star' ? 'Star (恒星)' : c === 'planet' ? 'Planet (惑星)' : c === 'dwarfPlanet' ? 'Dwarf planet (準惑星)' : 'Satellite (衛星)'

  return (
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Globe size={16} />
        Distance from Earth — Star · Planet · Dwarf planet (今日の日付)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Real-time geocentric distance. IAU 2006. AU: astronomical unit, 1 AU ≈ 149.6 × 10⁶ km.
      </p>
      <div class="mt-3 overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-stone-200">
              <th class="py-2 font-medium text-stone-600">Category</th>
              <th class="py-2 font-medium text-stone-600">Body</th>
              <th class="py-2 font-medium text-stone-600">Distance (km)</th>
              <th class="py-2 font-medium text-stone-600">AU</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            {rows().map((r) => (
              <tr class="border-b border-stone-100">
                <td class="py-2 text-xs text-stone-500">{categoryLabel(r.category)}</td>
                <td class="py-2 font-medium">{r.name}</td>
                <td class="py-2 font-mono text-xs">{formatKm(r.distanceKm)}</td>
                <td class="py-2 font-mono text-xs">{r.distanceAU.toFixed(6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {props.showLink && (
        <p class="mt-3">
          <A href="/calibration/solar" class="text-xs font-mono text-amber-600 hover:underline">
            → Solar Calibration
          </A>
        </p>
      )}
    </section>
  )
}
