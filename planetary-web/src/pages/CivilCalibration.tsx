import { createSignal, onMount, type Component } from 'solid-js'
import { Clock } from 'lucide-solid'
import { copy } from '../lib/copy'

/**
 * Civil Standard Calibration — ISO 8601
 */
export const CivilCalibration: Component = () => {
  const [now, setNow] = createSignal<Date | null>(null)

  onMount(() => {
    const tick = () => setNow(new Date())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  })

  const iso8601 = () => {
    const d = now()
    if (!d) return '—'
    return d.toISOString()
  }

  const localParts = () => {
    const d = now()
    if (!d) return null
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
    }
  }

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.calibration.civil}</h1>
        <p class="mt-1 text-sm text-stone-500">{copy.calibration.civilDesc}</p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Clock size={16} />
          ISO 8601
        </h2>
        <div class="mt-4 space-y-4">
          <div>
            <p class="text-xs text-stone-500">UTC</p>
            <p class="font-mono text-lg text-amber-600">{iso8601()}</p>
          </div>
          {localParts() && (
            <div class="grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Year</span>
                <p class="font-mono font-medium">{localParts()?.year}</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Month</span>
                <p class="font-mono font-medium">{localParts()?.month}</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Day</span>
                <p class="font-mono font-medium">{localParts()?.day}</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Hour</span>
                <p class="font-mono font-medium">{String(localParts()?.hour ?? 0).padStart(2, '0')}</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Minute</span>
                <p class="font-mono font-medium">{String(localParts()?.minute ?? 0).padStart(2, '0')}</p>
              </div>
              <div class="rounded-lg bg-stone-50 p-2">
                <span class="text-stone-500">Second</span>
                <p class="font-mono font-medium">{String(localParts()?.second ?? 0).padStart(2, '0')}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <p class="text-sm text-stone-500">
          Time per ISO standard adopted by Earth civilization. Premise for an Entity starting the day.
        </p>
      </section>
    </div>
  )
}
