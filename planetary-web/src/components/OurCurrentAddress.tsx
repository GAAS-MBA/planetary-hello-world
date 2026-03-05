import { type Component } from 'solid-js'
import { Stars, MapPin } from 'lucide-solid'
import { A } from '@solidjs/router'
import { COSMIC_HIERARCHY, MASSIVE_OBJECTS } from '../lib/cosmic-address'

type Props = {
  showLink?: boolean
}

export const OurCurrentAddress: Component<Props> = (props) => (
  <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
    <h2 class="font-mono text-sm font-medium text-stone-700">Our current address</h2>
    <p class="mt-1 text-xs text-stone-500">
      Cosmic address & massive object tracking. Largest to smallest (大きな順).
    </p>

    <div class="mt-3 space-y-4">
      <div>
        <h3 class="flex items-center gap-2 text-xs font-medium text-stone-600">
          <MapPin size={12} />
          Cosmic address (宇宙の住所)
        </h3>
        <div class="mt-2 space-y-1">
          {COSMIC_HIERARCHY.map((h) => (
            <div class="flex items-start gap-2 rounded border border-stone-100 px-2 py-1">
              <span class="font-mono text-[10px] text-amber-600">{h.level}</span>
              <span class="text-xs text-stone-700">{h.name}</span>
              <span class="text-[10px] text-stone-500">({h.nameJa})</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 class="flex items-center gap-2 text-xs font-medium text-stone-600">
          <Stars size={12} />
          Massive object tracking (質量の大きな天体)
        </h3>
        <div class="mt-2 space-y-1">
          {MASSIVE_OBJECTS.map((m) => (
            <div class="flex flex-wrap items-center gap-2 rounded border border-stone-100 px-2 py-1">
              <span class="font-mono text-xs text-amber-600">{m.name}</span>
              <span class="rounded bg-amber-50 px-1 text-[10px] text-amber-700">L{m.level}</span>
              <span class="text-[10px] text-stone-500">→ {m.hierarchyName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {props.showLink && (
      <p class="mt-3">
        <A href="/calibration/cosmo" class="text-xs font-mono text-amber-600 hover:underline">
          → Cosmo Calibration
        </A>
      </p>
    )}
  </section>
)
