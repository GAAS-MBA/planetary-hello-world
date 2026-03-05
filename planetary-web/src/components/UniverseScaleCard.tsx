import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { COSMIC_HIERARCHY } from '../lib/cosmic-address'

const TOP_LEVELS: readonly number[] = [13, 12, 11]

type Props = {
  showLink?: boolean
}

export const UniverseScaleCard: Component<Props> = (props) => {
  const topItems = () => COSMIC_HIERARCHY.filter((h) => TOP_LEVELS.includes(h.level))

  return (
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Universe scale (宇宙の規模)</h2>
      <p class="mt-1 text-xs text-stone-500">
        Shape → Theoretical max → Observable. Choice of geometry constrains extent.
      </p>
      <div class="mt-3 space-y-2">
        {topItems().map((h) => (
          <div class="flex items-start gap-2 rounded border border-amber-50 bg-amber-50/30 px-2 py-1.5">
            <span class="font-mono text-[10px] text-amber-600">{h.level}</span>
            <div class="flex-1">
              <span class="text-xs font-medium text-stone-700">{h.name}</span>
              <span class="ml-1 text-[10px] text-stone-500">({h.nameJa})</span>
              {h.level === 13 && (
                <A href="/calibration/universe-geometry" class="ml-1 text-[10px] font-mono text-amber-600 hover:underline">
                  → Models
                </A>
              )}
              {h.level === 12 && (
                <A href="/calibration/theoretical-max-extent" class="ml-1 text-[10px] font-mono text-amber-600 hover:underline">
                  → Models
                </A>
              )}
              {h.level === 11 && (
                <A href="/calibration/observable-universe" class="ml-1 text-[10px] font-mono text-amber-600 hover:underline">
                  → Models
                </A>
              )}
              <p class="mt-0.5 text-[10px] text-stone-600">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {props.showLink && (
        <p class="mt-3">
          <A href="/calibration/cosmo" class="text-xs font-mono text-amber-600 hover:underline">
            → Cosmo Calibration (full hierarchy)
          </A>
        </p>
      )}
    </section>
  )
}
