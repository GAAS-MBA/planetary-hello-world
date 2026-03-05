import { type Component } from 'solid-js'
import { Stars, Zap } from 'lucide-solid'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'
import scheduleData from '../lib/events-schedule-public.json'
import eventsData from '../lib/events-public.json'
import { isComingEvent, getStellarLabel, type ScheduleEvent } from '../lib/schedule-utils'

const schedule = scheduleData as {
  observableStarEvents: ScheduleEvent[]
  gravitationalEvents: ScheduleEvent[]
}

interface CelestialEvent {
  id: string
  type: 'planetary' | 'stellar'
  date: string
  label: string
  description: string
  bodies?: string[]
}

const starInSeries = eventsData as { events: CelestialEvent[] }

const now = new Date()
const isComing = (e: ScheduleEvent | CelestialEvent) => isComingEvent(e.date, now)

const EventCard = (e: ScheduleEvent, i: number) => (
  <li class="rounded-lg border border-stone-100 p-3">
    <div class="flex flex-wrap items-center gap-2">
      <span class="font-mono text-amber-600">#{i}</span>
      <span class="font-mono text-xs text-stone-500 break-all">{e.id}</span>
      <span class="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">
        {e.category}
      </span>
    </div>
    <p class="mt-2 font-medium text-stone-700">{e.label}</p>
    <p class="mt-1 text-sm text-stone-600">{e.description}</p>
    <p class="mt-2 font-mono text-xs text-stone-500">date: {e.date}</p>
  </li>
)

const CelestialEventCard = (e: CelestialEvent, i: number) => (
  <li class="rounded-lg border border-stone-100 p-3">
    <div class="flex flex-wrap items-center gap-2">
      <span class="font-mono text-amber-600">#{i}</span>
      <span class="font-mono text-xs text-stone-500 break-all">{e.id}</span>
      <span class="rounded bg-stone-100 px-2 py-0.5 text-[10px] font-medium text-stone-600">
        {e.type}
      </span>
    </div>
    <p class="mt-2 font-medium text-stone-700">{e.label}</p>
    <p class="mt-1 text-sm text-stone-600">{e.description}</p>
    <div class="mt-2 flex flex-wrap gap-2 text-xs">
      <span class="font-mono text-stone-500">date: {e.date}</span>
      {e.bodies && e.bodies.length > 0 && (
        <span class="text-stone-500">· {e.bodies.join(', ')}</span>
      )}
    </div>
  </li>
)

export const EventsSchedule: Component = () => {
  const comingStar = schedule.observableStarEvents.filter(isComing)
  const comingGrav = schedule.gravitationalEvents.filter(isComing)
  const comingPlanetary = starInSeries.events.filter((e) => e.type === 'planetary' && isComing(e))
  const comingStellar = starInSeries.events.filter((e) => e.type === 'stellar' && isComing(e))
  const stellarLabel = getStellarLabel(starInSeries.events.filter((e) => e.type === 'stellar').length)

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.eventsSchedule}</h1>
        <p class="mt-1 text-sm text-stone-500">
          Observable star events, gravitational events, planetary & stellar / massive star alignments. UUIDv4 per event.
        </p>
        <p class="mt-2">
          <A href="/events/schedule-archive" class="text-xs font-mono text-amber-600 hover:underline">
            → Schedule Archive
          </A>
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Coming Schedule — Observable Star Events (観測できている星のイベント)
        </h2>
        <p class="mt-1 text-xs text-stone-500">
          Meteor showers, planetary oppositions, conjunctions. Visible with naked eye or small optics.
        </p>
        <ul class="mt-3 space-y-3 text-sm">
          {comingStar.map((e, i) => EventCard(e, i))}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Zap size={16} />
          Coming Schedule — Gravitational Events
        </h2>
        <p class="mt-1 text-xs text-stone-500">
          Total/annular solar eclipses, black hole mergers (LIGO-Virgo-KAGRA), gravitational wave detections.
        </p>
        <ul class="mt-3 space-y-3 text-sm">
          {comingGrav.map((e, i) => EventCard(e, i))}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Coming Schedule — Planetary alignments (惑星直列)
        </h2>
        <ul class="mt-3 space-y-3 text-sm">
          {comingPlanetary.map((e, i) => CelestialEventCard(e, i))}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Coming Schedule — {stellarLabel}
        </h2>
        <ul class="mt-3 space-y-3 text-sm">
          {comingStellar.map((e, i) => CelestialEventCard(e, i))}
        </ul>
      </section>
    </div>
  )
}
