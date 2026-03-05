import { type Component } from 'solid-js'
import { Globe, Gauge } from 'lucide-solid'
import { copy } from '../lib/copy'

/**
 * Space Calibration — Milky Way, Gravitational Calibration
 */
export const SpaceCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Space Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.spaceDesc}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Globe size={16} />
        Laniakea Supercluster
      </h2>
      <div class="mt-3 space-y-2 text-sm text-stone-600">
        <p>The Solar System lies within the Laniakea Supercluster (Hawaiian: immense heaven). Milky Way is in the Orion Arm, ~26,000 light-years from galactic center.</p>
        <ul class="list-inside list-disc space-y-1 text-stone-500">
          <li>Laniakea: ~100,000–150,000 galaxies, major axis ~404 Mly</li>
          <li>Galactic longitude: ~0° (toward center)</li>
          <li>Galactic latitude: ~0° (galactic plane)</li>
          <li>Orbital period: ~225–250 Myr</li>
        </ul>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Days Since Big Bang</h2>
      <p class="mt-2 text-sm text-stone-600">
        Universe age ~13.79 Gyr (Planck 2018) → <span class="font-mono text-amber-600">~5.04 × 10¹² days</span> since Big Bang.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Gauge size={16} />
        Gravitational Calibration
      </h2>
      <div class="mt-3 space-y-3 text-sm">
        <p class="text-stone-600">
          Boundary conditions at Earth 1G. Landing on this planet under the same premise as ZFC axiomatic system.
        </p>
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-stone-200">
              <th class="py-2 font-medium text-stone-600">Parameter</th>
              <th class="py-2 font-medium text-stone-600">Value (SI)</th>
              <th class="py-2 font-medium text-stone-600">Meaning</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            <tr class="border-b border-stone-100">
              <td class="py-2">g (gravity)</td>
              <td class="py-2 font-mono">9.80665 m/s²</td>
              <td class="py-2 text-stone-500">Skeletal support</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="py-2">Atmospheric pressure</td>
              <td class="py-2 font-mono">1013 hPa</td>
              <td class="py-2 text-stone-500">Sea level</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="py-2">Oxygen</td>
              <td class="py-2 font-mono">~21%</td>
              <td class="py-2 text-stone-500">Aerobic threshold</td>
            </tr>
            <tr>
              <td class="py-2">Friction μ</td>
              <td class="py-2 font-mono">0.5–0.8</td>
              <td class="py-2 text-stone-500">Foot contact</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
)
