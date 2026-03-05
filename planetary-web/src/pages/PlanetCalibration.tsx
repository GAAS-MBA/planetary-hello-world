import { type Component } from 'solid-js'
import { Gauge } from 'lucide-solid'
import { copy } from '../lib/copy'

/**
 * Planet Calibration — Gravitational Calibration (Earth 1G)
 */
export const PlanetCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Planet Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.planetDesc}</p>
    </div>

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
