import { createSignal, createMemo, onMount, type Component } from 'solid-js'
import { Zap } from 'lucide-solid'
import { A } from '@solidjs/router'

const DAYS_PER_YEAR = 365.25
const SECONDS_PER_DAY = 86400
const SECONDS_PER_YEAR = DAYS_PER_YEAR * SECONDS_PER_DAY

function getBigBangAgo(ageGyr: number, now: Date) {
  const baseSeconds = ageGyr * 1e9 * SECONDS_PER_YEAR
  const startOfDayUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
  const secondsToday = (now.getTime() - startOfDayUTC.getTime()) / 1000
  const totalSeconds = baseSeconds + secondsToday

  const years = Math.floor(totalSeconds / SECONDS_PER_YEAR)
  let remainder = totalSeconds % SECONDS_PER_YEAR
  const days = Math.floor(remainder / SECONDS_PER_DAY)
  remainder = remainder % SECONDS_PER_DAY
  const hours = Math.floor(remainder / 3600)
  remainder = remainder % 3600
  const minutes = Math.floor(remainder / 60)
  const seconds = Math.floor(remainder % 60)

  return { years, days, hours, minutes, seconds }
}

const BIG_BANG_MODELS = [
  { id: 'planck2018', name: 'Planck 2018', ageGyr: 13.787 },
  { id: 'wmap9', name: 'WMAP 9-year', ageGyr: 13.77 },
  { id: 'act2021', name: 'ACT / Planck PR4', ageGyr: 13.8 },
] as const

type Props = {
  showLink?: boolean
  children?: import('solid-js').JSX.Element
}

export const BigBangCountUpCard: Component<Props> = (props) => {
  const [now, setNow] = createSignal(new Date())

  const countUps = createMemo(() =>
    BIG_BANG_MODELS.map((m) => ({
      ...m,
      ago: getBigBangAgo(m.ageGyr, now()),
    }))
  )

  onMount(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    tick()
    return () => clearInterval(id)
  })

  return (
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Zap size={16} />
        Big Bang: Days & Seconds Ago (今日から何日前・何秒前)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Major logic: ΛCDM, CMB (cosmic microwave background). Age in Gyr → days and seconds since Big Bang.
      </p>
      <div class="mt-3 space-y-3">
        {countUps().map((c) => (
          <div class="rounded-lg border border-amber-100 bg-amber-50/50 p-3">
            <p class="text-xs font-medium text-stone-600">Count-up ({c.name}, UTC)</p>
            <p class="mt-1 font-mono text-lg text-amber-600 tabular-nums">
              {(c.ago.years / 1e9).toFixed(2)} billion years, {c.ago.days} days, {c.ago.hours} h {c.ago.minutes} m {c.ago.seconds} s ago
            </p>
          </div>
        ))}
        <p class="text-xs text-stone-500">UTC {now().toISOString().slice(11, 19)} · updates every second</p>
      </div>
      {props.children}
      {props.showLink && (
        <p class="mt-3">
          <A href="/calibration/cosmic-event" class="text-xs font-mono text-amber-600 hover:underline">
            → Cosmic Event
          </A>
        </p>
      )}
    </section>
  )
}
