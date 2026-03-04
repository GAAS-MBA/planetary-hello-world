import { type Component } from 'solid-js'
import { SingularityStates } from '../components/SingularityStates'
import { EventHorizon } from '../components/EventHorizon'
import { copy } from '../lib/copy'

export const Home: Component = () => (
  <div class="mx-auto max-w-4xl space-y-8">
    {/* Hero */}
    <section class="text-center">
      <p class="max-w-2xl mx-auto text-sm leading-relaxed text-stone-600">
        Ontopologics grounded in Groundism. An experimental device for the AdS/CFT Maldacena correspondence—proving P=NP at the boundary of axiomatic systems.
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

      {/* Links */}
      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <p class="text-xs text-stone-600">
          Built from{' '}
          <a
            href="https://axiom.tanaakk.com/axiom"
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-600 hover:text-amber-700 hover:underline"
          >
            Axiom
          </a>
          {' · '}
          <a
            href="https://axiom.tanaakk.com/theorem"
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-600 hover:text-amber-700 hover:underline"
          >
            Theorem
          </a>
          {' · '}
          <a
            href="https://axiom.tanaakk.com/axiomatic-system"
            target="_blank"
            rel="noopener noreferrer"
            class="text-amber-600 hover:text-amber-700 hover:underline"
          >
            Axiomatic System
          </a>
        </p>
      </section>
    </div>
)
