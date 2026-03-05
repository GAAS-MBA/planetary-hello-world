import { type Component } from 'solid-js'
import { Stars, Zap } from 'lucide-solid'
import { copy } from '../lib/copy'

import scheduleData from '../lib/events-schedule-public.json'

interface ScheduleEvent {
  id: string
  date: string
  label: string
  description: string
  category: string
}

const schedule = scheduleData as {
  observableStarEvents: ScheduleEvent[]
  gravitationalEvents: ScheduleEvent[]
}

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

export const EventsSchedule: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">{copy.eventsSchedule}</h1>
      <p class="mt-1 text-sm text-stone-500">
        Observable star events and gravitational events (eclipses, black hole mergers). UUIDv4 per event.
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Stars size={16} />
        Observable Star Events (観測できている星のイベント)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Meteor showers, planetary oppositions, conjunctions. Visible with naked eye or small optics.
      </p>
      <ul class="mt-3 space-y-3 text-sm">
        {schedule.observableStarEvents.map((e, i) => EventCard(e, i))}
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Zap size={16} />
        Gravitational Events
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Total/annular solar eclipses, black hole mergers (LIGO-Virgo-KAGRA), gravitational wave detections.
      </p>
      <ul class="mt-3 space-y-3 text-sm">
        {schedule.gravitationalEvents.map((e, i) => EventCard(e, i))}
      </ul>
    </section>
  </div>
)
