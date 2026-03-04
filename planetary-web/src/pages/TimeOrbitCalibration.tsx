import { type Component } from 'solid-js'
import { Orbit } from 'lucide-solid'
import { copy } from '../lib/copy'

/**
 * Time/Orbit Calibration — Earth's orbital position
 */
export const TimeOrbitCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">{copy.calibration.timeOrbit}</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.timeOrbitDesc}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Orbit size={16} />
        Earth Orbit
      </h2>
      <div class="mt-3 space-y-3 text-sm text-stone-600">
        <p>Orbital period around the Sun. Position on orbit determines season and insolation.</p>
        <ul class="space-y-1 text-stone-600">
          <li class="flex justify-between">
            <span>Orbital period</span>
            <span class="font-mono">365.256 d (1 year)</span>
          </li>
          <li class="flex justify-between">
            <span>Semi-major axis</span>
            <span class="font-mono">1 AU ≈ 1.496×10¹¹ m</span>
          </li>
          <li class="flex justify-between">
            <span>Orbital speed</span>
            <span class="font-mono">~29.78 km/s</span>
          </li>
          <li class="flex justify-between">
            <span>Axial tilt</span>
            <span class="font-mono">23.44°</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Orbital Phase</h2>
      <p class="mt-2 text-sm text-stone-500">
        Today's orbital position is coupled with Civil Standard Calibration.
      </p>
    </section>
  </div>
)
