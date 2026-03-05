import { type Component } from 'solid-js'
import { Stars } from 'lucide-solid'
import { copy } from '../lib/copy'

import eventsData from '../lib/events-public.json'

interface CelestialEvent {
  id: string
  type: 'planetary' | 'stellar'
  date: string
  label: string
  description: string
  bodies?: string[]
}

const events = eventsData as { events: CelestialEvent[] }

export const EventsStarInSeries: Component = () => {
  const planetary = () => events.events.filter((e) => e.type === 'planetary')
  const stellar = () => events.events.filter((e) => e.type === 'stellar')

  const EventCard = (e: CelestialEvent, i: number) => (
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

  return (
    <div class="space-y-6">
      <div>
        <h1 class="font-mono text-xl font-bold text-amber-600">{copy.eventsStarInSeries}</h1>
        <p class="mt-1 text-sm text-stone-500">
          Archive of past stellar and planetary alignment events. UUIDv4 (ISO/IEC 9834-8) per event.
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Planetary alignments (惑星直列)
        </h2>
        <ul class="mt-3 space-y-3 text-sm">
          {planetary().map((e, i) => EventCard(e, i))}
        </ul>
      </section>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
          <Stars size={16} />
          Stellar alignments (恒星直列)
        </h2>
        <ul class="mt-3 space-y-3 text-sm">
          {stellar().map((e, i) => EventCard(e, i))}
        </ul>
      </section>
    </div>
  )
}
