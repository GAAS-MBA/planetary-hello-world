import { type Component } from 'solid-js'
import { Calendar } from 'lucide-solid'
import { A } from '@solidjs/router'
import scheduleData from '../lib/events-schedule-public.json'
import eventsData from '../lib/events-public.json'
import { isComingEvent, getStellarLabel, type ScheduleEvent } from '../lib/schedule-utils'

interface CelestialEvent {
  id: string
  type: 'planetary' | 'stellar'
  date: string
  label: string
  description: string
  bodies?: string[]
}

const schedule = scheduleData as {
  observableStarEvents: ScheduleEvent[]
  gravitationalEvents: ScheduleEvent[]
}

const starInSeries = eventsData as { events: CelestialEvent[] }

const now = new Date()
const isComing = (e: ScheduleEvent | CelestialEvent) => isComingEvent(e.date, now)

function pickOne<T>(arr: T[], filter: (x: T) => boolean): T | undefined {
  const coming = arr.find(filter)
  return coming ?? arr[0]
}

export const EventsScheduleCard: Component = () => {
  const oneStar = pickOne(schedule.observableStarEvents, isComing)
  const oneGrav = pickOne(schedule.gravitationalEvents, isComing)
  const onePlanetary = pickOne(
    starInSeries.events.filter((e) => e.type === 'planetary'),
    isComing
  )
  const stellarEvents = starInSeries.events.filter((e) => e.type === 'stellar')
  const oneStellar = pickOne(stellarEvents, isComing)
  const stellarLabel = getStellarLabel(stellarEvents.length)

  const items = [
    { label: 'Observable Star Events', event: oneStar },
    { label: 'Gravitational Events', event: oneGrav },
    { label: 'Planetary alignments', event: onePlanetary },
    { label: stellarLabel, event: oneStellar },
  ] as const

  return (
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Calendar size={16} />
        Events Schedule
        <span class="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-amber-700">
          Coming Soon
        </span>
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        One from each: Observable star events, gravitational events, planetary alignments, stellar / massive star.
      </p>
      <ul class="mt-3 space-y-2">
        {items.map(({ label, event }) =>
          event ? (
            <li class="rounded-lg border border-stone-100 px-3 py-2">
              <p class="text-[10px] font-medium text-stone-500">{label}</p>
              <p class="mt-0.5 font-medium text-stone-700">{event.label}</p>
              <p class="mt-0.5 text-xs text-stone-600 line-clamp-2">{event.description}</p>
              <p class="mt-1 font-mono text-[10px] text-stone-400">{event.date}</p>
            </li>
          ) : null
        )}
      </ul>
      <p class="mt-3">
        <A href="/events/schedule" class="text-xs font-mono text-amber-600 hover:underline">
          → Events Schedule
        </A>
      </p>
    </section>
  )
}
