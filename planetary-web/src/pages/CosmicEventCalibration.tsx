import { createSignal, createMemo, onMount, type Component } from 'solid-js'
import { copy } from '../lib/copy'
import { BigBangCountUpCard } from '../components/BigBangCountUpCard'

const DAYS_PER_YEAR = 365.25
const SECONDS_PER_DAY = 86400

/** Big Bang age prediction models (Gyr) */
const BIG_BANG_MODELS = [
  {
    id: 'planck2018',
    name: 'Planck 2018',
    ageGyr: 13.787,
    logic: 'ΛCDM, CMB. Planck 2018 results VI. Cosmological parameters.',
    source: 'ESA Planck',
  },
  {
    id: 'wmap9',
    name: 'WMAP 9-year',
    ageGyr: 13.77,
    logic: 'CMB. Wilkinson Microwave Anisotropy Probe final release.',
    source: 'NASA WMAP',
  },
  {
    id: 'act2021',
    name: 'ACT / Planck PR4',
    ageGyr: 13.8,
    logic: 'ΛCDM, CMB. Atacama Cosmology Telescope (2021) reconciled with Planck.',
    source: 'ACT, Planck PR4',
  },
] as const

function gyrToDays(gyr: number): number {
  return gyr * 1e9 * DAYS_PER_YEAR
}

function gyrToSeconds(gyr: number): number {
  return gyr * 1e9 * DAYS_PER_YEAR * SECONDS_PER_DAY
}

function formatDays(days: number): string {
  if (days >= 1e12) return `~${(days / 1e12).toFixed(2)} × 10¹² days`
  if (days >= 1e9) return `~${(days / 1e9).toFixed(2)} × 10⁹ days`
  return `~${days.toExponential(2)} days`
}

function formatSeconds(sec: number): string {
  if (sec >= 1e18) return `~${(sec / 1e18).toFixed(2)} × 10¹⁸ s`
  if (sec >= 1e17) return `~${(sec / 1e17).toFixed(2)} × 10¹⁷ s`
  if (sec >= 1e15) return `~${(sec / 1e15).toFixed(2)} × 10¹⁵ s`
  return `~${sec.toExponential(2)} s`
}

export const CosmicEventCalibration: Component = () => {
  const [now, setNow] = createSignal(new Date())

  const predictions = createMemo(() =>
    BIG_BANG_MODELS.map((m) => ({
      ...m,
      daysAgo: gyrToDays(m.ageGyr),
      daysFormatted: formatDays(gyrToDays(m.ageGyr)),
      secondsAgo: gyrToSeconds(m.ageGyr),
      secondsFormatted: formatSeconds(gyrToSeconds(m.ageGyr)),
    }))
  )

  onMount(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 60000)
    tick()
    return () => clearInterval(id)
  })

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.calibration.cosmicEvent}</h1>
        <p class="mt-1 text-sm text-stone-500">{copy.calibration.cosmicEventDesc}</p>
        <p class="mt-1 text-xs text-stone-400 font-mono">
          {now().toISOString()} · 3 prediction models
        </p>
      </div>

      <BigBangCountUpCard>
        <div class="mt-3 space-y-4">
          {predictions().map((p) => (
            <div class="rounded-lg border border-stone-100 p-3">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-mono text-amber-600">{p.name}</span>
                <span class="text-xs text-stone-500">{p.source}</span>
              </div>
              <p class="mt-2 text-sm text-stone-600">{p.logic}</p>
              <div class="mt-2 flex flex-wrap gap-4 font-mono text-sm">
                <span class="text-stone-700">Age: {p.ageGyr} Gyr</span>
                <span class="text-amber-600">{p.daysFormatted} ago</span>
                <span class="text-amber-600">{p.secondsFormatted} ago</span>
              </div>
            </div>
          ))}
        </div>
        <p class="mt-3 text-xs text-stone-500">
          Formula: days = age_Gyr × 10⁹ × 365.25; seconds = days × 86400. All models use CMB-based ΛCDM framework.
        </p>
      </BigBangCountUpCard>
    </div>
  )
}
