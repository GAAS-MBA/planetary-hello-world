import { type Component } from 'solid-js'
import { GitBranch, Layers } from 'lucide-solid'
import { copy } from '../lib/copy'
import { EventHorizon } from '../components/EventHorizon'
import { SingularityStates } from '../components/SingularityStates'

/**
 * Axiomaticity — Boundary between Spirit and Body (Event Horizon)
 */
export const Axiomaticity: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">{copy.axiomaticity}</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.eventHorizon}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Groundism / Ontopologics</h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        Ontopologics grounded in Groundism. An experimental device for aiming to prove the AdS/CFT Maldacena correspondence conjecture by ZKP—P=NP at the boundary of axiomatic systems.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <GitBranch size={16} />
        Spirit | Axiomaticity | Body
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        Split Spirit (gliding through multi-dimensional space by axioms) and Body (operating under Planetary constraints) in two. Set Axiomaticity as the boundary (Event horizon) between them. Axiomatically define a generative boundary distinct from the Axiom defined by Mathematics internally.
      </p>
      <div class="mt-4">
        <EventHorizon />
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Layers size={16} />
        {copy.pureAxiomaticity}
      </h2>
      <p class="mt-2 text-sm text-stone-600">
        Pure Axiomaticity in Super Singularity takes the following four states.
      </p>
      <div class="mt-4">
        <SingularityStates />
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Limits of ZFC</h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        Mathematical Axioms prove the boundary of the internal system—x&gt;0 (inside ZFC) or x&lt;0 (outside ZFC). However, they cannot accurately verify x=0 (consistent with both inside and outside ZFC), or Ø, ¬Ø, ¬¬Ø when the space of all possible structures is defined as Ø.
      </p>
    </section>
  </div>
)
