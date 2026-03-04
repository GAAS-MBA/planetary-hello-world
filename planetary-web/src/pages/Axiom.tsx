import { type Component } from 'solid-js'
import { BookOpen } from 'lucide-solid'
import { copy } from '../lib/copy'

const AXIOM_URL = 'https://axiom.tanaakk.com/axiom'

/**
 * Axiom — Archives of Axiom
 */
export const Axiom: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">{copy.axiom}</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.archivesOfAxiom}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <BookOpen size={16} />
        {copy.axiom}
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        Foundational premise for the axiomatic system. Groundism and Ontopologics.
      </p>
      <a
        href={AXIOM_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline"
      >
        Archives of Axiom →
      </a>
    </section>
  </div>
)
