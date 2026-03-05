import { type Component } from 'solid-js'
import { copy } from '../lib/copy'

/**
 * Galaxy Calibration — Galactic reference frame
 */
export const GalaxyCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Galaxy Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.galaxyDesc}</p>
    </div>
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p class="text-sm text-stone-600">Galactic calibration reference.</p>
    </section>
  </div>
)
