import { type Component } from 'solid-js'
import { Calendar } from 'lucide-solid'
import { A } from '@solidjs/router'
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

const allEvents = [...schedule.observableStarEvents, ...schedule.gravitationalEvents]
const comingCount = allEvents.length

export const EventsScheduleCard: Component = () => (
  <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
    <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
      <Calendar size={16} />
      Events Schedule
    </h2>
    <p class="mt-1 text-xs text-stone-500">
      Observable star events, gravitational events (eclipses, black hole mergers).
    </p>
    <p class="mt-2 text-sm text-stone-600">
      {comingCount} events in schedule. Coming Schedule & Schedule Archive.
    </p>
    <p class="mt-3">
      <A href="/events/schedule" class="text-xs font-mono text-amber-600 hover:underline">
        → Events Schedule
      </A>
    </p>
  </section>
)
