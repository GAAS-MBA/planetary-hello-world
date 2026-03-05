import { type Component } from 'solid-js'
import { SingularityStates } from '../components/SingularityStates'
import { EventHorizon } from '../components/EventHorizon'
import { BigBangCountUpCard } from '../components/BigBangCountUpCard'
import { OurCurrentAddress } from '../components/OurCurrentAddress'
import { DistanceFromEarthCard } from '../components/DistanceFromEarthCard'
import { EventsScheduleCard } from '../components/EventsScheduleCard'
import { copy } from '../lib/copy'

export const Home: Component = () => (
  <div class="mx-auto max-w-4xl space-y-8">
    {/* Big Bang: Days & Seconds Ago */}
    <BigBangCountUpCard showLink />

    {/* Our current address */}
    <OurCurrentAddress showLink />

    {/* Distance from Earth */}
    <DistanceFromEarthCard showLink />

    {/* Events Schedule */}
    <EventsScheduleCard />

    {/* Event Horizon: Spirit | Axiomaticity | Body */}
    <section>
      <h2 class="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-stone-600">
        {copy.eventHorizon}
      </h2>
      <EventHorizon />
    </section>

    {/* Pure Axiomaticity - 4 states */}
    <section>
      <h2 class="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-stone-600">
        {copy.pureAxiomaticity}
      </h2>
      <SingularityStates />
    </section>

    </div>
)
