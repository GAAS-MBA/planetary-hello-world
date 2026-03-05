import { type Component } from 'solid-js'
import { Stars, Zap } from 'lucide-solid'
import { A } from '@solidjs/router'
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
const isArchive = (e: ScheduleEvent | CelestialEvent) => !isComingEvent(e.date, now)

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

export const ScheduleArchive: Component = () => {
  const archivedStar = schedule.observableStarEvents.filter(isArchive)
  const archivedGrav = schedule.gravitationalEvents.filter(isArchive)
  const archivedPlanetary = starInSeries.events.filter((e) => e.type === 'planetary' && isArchive(e))
  const archivedStellar = starInSeries.events.filter((e) => e.type === 'stellar' && isArchive(e))
  const stellarLabel = getStellarLabel(starInSeries.events.filter((e) => e.type === 'stellar').length)

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">Schedule Archive</h1>
        <p class="mt-1 text-sm text-stone-500">
          Past events. Observable star events, gravitational events, planetary & stellar / massive star alignments.
        </p>
        <p class="mt-2">
          <A href="/events/schedule" class="text-xs font-mono text-amber-600 hover:underline">
            ← Coming Schedule
          </A>
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Observable Star Events (Archive)
        </h2>
        {archivedStar.length > 0 ? (
          <ul class="mt-3 space-y-3 text-sm">
            {archivedStar.map((e, i) => EventCard(e, i))}
          </ul>
        ) : (
          <p class="mt-3 text-sm text-stone-500">No archived star events.</p>
        )}
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Zap size={16} />
          Gravitational Events (Archive)
        </h2>
        {archivedGrav.length > 0 ? (
          <ul class="mt-3 space-y-3 text-sm">
            {archivedGrav.map((e, i) => EventCard(e, i))}
          </ul>
        ) : (
          <p class="mt-3 text-sm text-stone-500">No archived gravitational events.</p>
        )}
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Planetary alignments (惑星直列) — Archive
        </h2>
        {archivedPlanetary.length > 0 ? (
          <ul class="mt-3 space-y-3 text-sm">
            {archivedPlanetary.map((e, i) => CelestialEventCard(e, i))}
          </ul>
        ) : (
          <p class="mt-3 text-sm text-stone-500">No archived planetary alignments.</p>
        )}
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          {stellarLabel} — Archive
        </h2>
        {archivedStellar.length > 0 ? (
          <ul class="mt-3 space-y-3 text-sm">
            {archivedStellar.map((e, i) => CelestialEventCard(e, i))}
          </ul>
        ) : (
          <p class="mt-3 text-sm text-stone-500">No archived {stellarLabel.toLowerCase()}.</p>
        )}
      </section>
    </div>
  )
}
