import { type Component } from 'solid-js'
import { FileText } from 'lucide-solid'

/**
 * Architect — Design Specification
 * Planetary Hello World premise and constraints
 */
export const Architect: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Architect</h1>
      <p class="mt-1 text-sm text-stone-500">Design Specification</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <FileText size={16} />
        Language
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        For accurate geometric structure, language must be singular. Japanese has been discontinued; English only.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <FileText size={16} />
        Premise
      </h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        This Planetary Hello World is a Big Bang generator to be built from the latest Axiom and Theorem.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Version Recording</h2>
      <ul class="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600">
        <li>Planetary Hello World records v</li>
        <li>Initial v is 1.0.0</li>
        <li>Version displayed as v1.0.x-commit hash in sidebar</li>
        <li>When x or x+1 changes, both receive UUIDv4</li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Spirit / Body / Axiomaticity</h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        Split Spirit (gliding through multi-dimensional space by axioms) and Body (operating under Planetary constraints) in two, setting Axiomaticity as the boundary (Event horizon) between them. Axiomatically define a generative boundary distinct from the Axiom defined by Mathematics internally.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Axiomatic System</h2>
      <p class="mt-3 text-sm leading-relaxed text-stone-600">
        An experimental device for a new Axiomatic System. A grand device to prove P=NP at the boundary by constructing the boundary theory—which the AdS/CFT Maldacena correspondence cannot prove internally—with Duality as a minimal set.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Tech Stack</h2>
      <ul class="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600">
        <li>SolidJS (latest)</li>
        <li>Lucide</li>
        <li>TypeScript</li>
        <li>TailwindCSS</li>
        <li>UUIDv4</li>
        <li>Build framework</li>
        <li>Responsive header and sidebar layout</li>
      </ul>
    </section>
  </div>
)
