import { createSignal, createMemo, onMount, type Component } from 'solid-js'
import { Globe, Rocket } from 'lucide-solid'
import { copy } from '../lib/copy'
import { computeDistances, formatKm } from '../lib/solar-distance'

/** Navigation models under development */
const NAVIGATION_MODELS = [
  {
    id: 'hohmann',
    name: 'Hohmann transfer',
    desc: 'Minimum-energy orbit between circular orbits. Two impulsive burns at periapsis and apoapsis.',
    status: 'implemented',
  },
] as const

/** IAU definitions (2006) */
const IAU_DEFINITIONS = {
  star: 'Star (恒星): Celestial body that produces light by nuclear fusion. In our system: Sun.',
  planet:
    'Planet (惑星): Orbits the Sun; has sufficient mass for hydrostatic equilibrium (nearly round); has cleared the neighborhood of its orbit.',
  dwarfPlanet:
    'Dwarf planet (準惑星): Orbits the Sun; nearly round; has NOT cleared its orbital neighborhood; is not a satellite.',
} as const

/**
 * Solar Calibration — Distance from Earth, Hohmann transfer
 */
export const SolarCalibration: Component = () => {
  const [now, setNow] = createSignal(new Date())
  const rows = createMemo(() => computeDistances(now()))

  onMount(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 60000) // update every minute
    return () => clearInterval(id)
  })

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">Solar Calibration</h1>
        <p class="mt-1 text-sm text-stone-500">{copy.calibration.solarDesc}</p>
        <p class="mt-1 text-xs text-stone-400 font-mono">
          {now().toISOString()} · distances, Hohmann transfer in Round-trip & resupply
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Rocket size={16} />
          Navigation models under development
        </h2>
        <p class="mt-1 text-xs text-stone-500">
          Propulsion / transfer models currently available for mission planning.
        </p>
        <ul class="mt-3 space-y-2">
          {NAVIGATION_MODELS.map((m) => (
            <li class="rounded-lg border border-stone-100 p-3">
              <span class="font-mono text-amber-600">{m.name}</span>
              <span class="ml-2 rounded bg-stone-100 px-1.5 py-0.5 text-[10px] text-stone-600">{m.status}</span>
              <p class="mt-1 text-xs text-stone-600">{m.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Globe size={16} />
          Distance from Earth — Star · Planet · Dwarf planet (今日の日付)
        </h2>
        <p class="mt-1 text-xs text-stone-500">
          Real-time geocentric distance. IAU 2006 definitions. astronomy-engine.
        </p>
        <div class="mt-3 space-y-4">
          <div class="rounded-lg border border-stone-100 p-3">
            <p class="text-xs font-medium text-stone-600">Definitions (IAU 2006)</p>
            <ul class="mt-2 space-y-1 text-xs text-stone-600">
              <li>• {IAU_DEFINITIONS.star}</li>
              <li>• {IAU_DEFINITIONS.planet}</li>
              <li>• {IAU_DEFINITIONS.dwarfPlanet}</li>
            </ul>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead>
                <tr class="border-b border-stone-200">
                  <th class="py-2 font-medium text-stone-600">Category</th>
                  <th class="py-2 font-medium text-stone-600">Body</th>
                  <th class="py-2 font-medium text-stone-600">Distance (km)</th>
                  <th class="py-2 font-medium text-stone-600" title="Astronomical unit: mean Earth–Sun distance, 1 AU ≈ 149.6 × 10⁶ km">AU</th>
                </tr>
              </thead>
              <tbody class="text-stone-600">
                {rows().map((r) => {
                  const categoryLabel =
                    r.category === 'star'
                      ? 'Star (恒星)'
                      : r.category === 'planet'
                        ? 'Planet (惑星)'
                        : r.category === 'dwarfPlanet'
                          ? 'Dwarf planet (準惑星)'
                          : 'Satellite (衛星)'
                  return (
                    <tr class="border-b border-stone-100">
                      <td class="py-2 text-xs text-stone-500">{categoryLabel}</td>
                      <td class="py-2 font-medium">{r.name}</td>
                      <td class="py-2 font-mono text-xs">{formatKm(r.distanceKm)}</td>
                      <td class="py-2 font-mono text-xs">{r.distanceAU.toFixed(6)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p class="mt-2 text-xs text-stone-500">
            AU: astronomical unit (天文単位). Mean Earth–Sun distance. 1 AU ≈ 149.6 × 10⁶ km.
          </p>
        </div>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          Round-trip & resupply
        </h2>
        <p class="mt-1 text-xs text-stone-500">
          Hohmann transfer times. Round-trip ≈ 2× one-way (simplified; actual missions require wait for return window).
        </p>
        <div class="mt-3 overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-stone-200">
                <th class="py-2 font-medium text-stone-600">Target</th>
                <th class="py-2 font-medium text-stone-600">Hohmann one-way (days)</th>
                <th class="py-2 font-medium text-stone-600">Hohmann round-trip (days)</th>
              </tr>
            </thead>
            <tbody class="text-stone-600">
              {rows()
                .filter((r) => r.hasHohmann)
                .map((r) => (
                  <tr class="border-b border-stone-100">
                    <td class="py-2 font-medium">{r.name}</td>
                    <td class="py-2 font-mono text-xs">{r.hohmannOneWayDays ?? 0}</td>
                    <td class="py-2 font-mono text-xs">{r.hohmannRoundTripDays ?? 0}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
