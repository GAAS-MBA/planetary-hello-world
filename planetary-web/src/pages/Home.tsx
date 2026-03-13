import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { SingularityStates } from '../components/SingularityStates'
import { EventHorizon } from '../components/EventHorizon'
import { BigBangCountUpCard } from '../components/BigBangCountUpCard'
import { OurCurrentAddress } from '../components/OurCurrentAddress'
import { UniverseScaleCard } from '../components/UniverseScaleCard'
import { DistanceFromEarthCard } from '../components/DistanceFromEarthCard'
import { EventsScheduleCard } from '../components/EventsScheduleCard'
import { copy } from '../lib/copy'

const Section = (props: { title: string; href?: string; children: import('solid-js').JSX.Element }) => (
  <section>
    <h2 class="mb-4 font-mono text-sm font-medium uppercase tracking-wider text-stone-600">
      {props.href ? (
        <A href={props.href} class="hover:text-amber-600">
          {props.title}
        </A>
      ) : (
        props.title
      )}
    </h2>
    {props.children}
  </section>
)

export const Home: Component = () => (
  <div class="mx-auto max-w-4xl space-y-8">
    {/* Comma ⊃ Recovery ⊃ Genesis ⊃ Space ⊃ Time */}
    <p class="font-mono text-sm font-medium tracking-wider text-amber-600">
      Comma ⊃ Recovery ⊃ Genesis ⊃ Space ⊃ Time
    </p>

    {/* Planetary Calibration */}
    <Section title="Planetary Calibration" href="/calibrators">
      <div class="space-y-4">
        <UniverseScaleCard showLink />
        <BigBangCountUpCard showLink />
        <OurCurrentAddress showLink />
        <DistanceFromEarthCard showLink />
      </div>
    </Section>

    {/* Planetary Cockpit */}
    <Section title="Planetary Cockpit" href="/cockpit">
      <EventsScheduleCard />
    </Section>

    {/* Planetary UI */}
    <Section title="Planetary UI">
      <p class="rounded-xl border border-dashed border-stone-200 bg-stone-50/50 px-4 py-6 text-center text-sm text-stone-500">
        Coming soon.
      </p>
    </Section>

    {/* Planetary Framework */}
    <Section title="Planetary Framework">
      <p class="rounded-xl border border-dashed border-stone-200 bg-stone-50/50 px-4 py-6 text-center text-sm text-stone-500">
        Coming soon.
      </p>
    </Section>

    {/* Event Horizon: Spirit | Axiomaticity | Body */}
    <Section title={copy.eventHorizon}>
      <EventHorizon />
    </Section>

    {/* Pure Axiomaticity - 4 states */}
    <Section title={copy.pureAxiomaticity}>
      <SingularityStates />
    </Section>
  </div>
)
