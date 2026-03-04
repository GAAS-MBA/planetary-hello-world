import { type Component } from 'solid-js'
import { SingularityStates } from '../components/SingularityStates'
import { EventHorizon } from '../components/EventHorizon'
import { copy } from '../lib/copy'

export const Home: Component = () => (
  <div class="mx-auto max-w-4xl space-y-8">
    {/* Hero */}
    <section class="text-center">
      <p class="max-w-2xl mx-auto text-sm leading-relaxed text-stone-600">
        Ontopologics grounded in Groundism. An experimental device for aiming to prove the AdS/CFT Maldacena correspondence conjecture by ZKP—P=NP at the boundary of axiomatic systems.
      </p>
    </section>

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
