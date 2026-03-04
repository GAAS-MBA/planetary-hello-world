import { type Component } from 'solid-js'
import { Network } from 'lucide-solid'
import { copy } from '../lib/copy'

const AXIOMATIC_SYSTEM_URL = 'https://axiom.tanaakk.com/axiomatic-system'

/**
 * Axiomatic System — Archives of Axiom
 */
export const AxiomaticSystem: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">{copy.axiomaticSystem}</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.archivesOfAxiom}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <Network size={16} />
        {copy.axiomaticSystem}
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        An experimental device for a new Axiomatic System. A grand device to prove P=NP at the boundary by constructing the boundary theory—which the AdS/CFT Maldacena correspondence cannot prove internally—with Duality as a minimal set.
      </p>
      <a
        href={AXIOMATIC_SYSTEM_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline"
      >
        Archives of Axiom →
      </a>
    </section>
  </div>
)
