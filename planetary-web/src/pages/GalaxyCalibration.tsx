import { type Component } from 'solid-js'
import { Stars, MapPin } from 'lucide-solid'
import { copy } from '../lib/copy'
import { COSMIC_HIERARCHY, MASSIVE_OBJECTS } from '../lib/cosmic-address'

/**
 * Galaxy Calibration — Cosmic address, Laniakea, massive object tracking
 */
export const GalaxyCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Galaxy Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.galaxyDesc}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <MapPin size={16} />
        Cosmic address — hierarchy & systems (宇宙の住所)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Largest to smallest (大きな順). Nested structure for locating our position in the universe.
      </p>
      <div class="mt-3 space-y-2">
        {COSMIC_HIERARCHY.map((h) => (
          <div class="flex items-start gap-3 rounded-lg border border-stone-100 p-2">
            <span class="font-mono text-xs text-amber-600">{h.level}</span>
            <div>
              <span class="font-medium text-stone-700">{h.name}</span>
              <span class="ml-2 text-xs text-stone-500">({h.nameJa})</span>
              <p class="mt-0.5 text-xs text-stone-600">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Stars size={16} />
        Massive object tracking (質量の大きな天体)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Central/primary objects of cosmic address levels (上記階層の中心天体). Gravitational anchors for position and velocity field.
      </p>
      <div class="mt-3 space-y-2">
        {MASSIVE_OBJECTS.map((m) => (
          <div class="rounded-lg border border-stone-100 p-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono text-amber-600">{m.name}</span>
              <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] text-amber-700">Level {m.level}</span>
              <span class="text-xs text-stone-500">→ {m.hierarchyName}</span>
            </div>
            <p class="mt-1 text-xs text-stone-600">{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)
