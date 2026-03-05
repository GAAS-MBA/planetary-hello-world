import { type Component } from 'solid-js'
import { Layers } from 'lucide-solid'
import { A } from '@solidjs/router'

/**
 * Classification (科目などの分類) — Taxonomy
 * Biological classification for Homo sapiens
 */
const TAXONOMY = [
  { level: 'Domain', value: 'Eukarya', ja: 'ドメイン' },
  { level: 'Kingdom', value: 'Animalia', ja: '界' },
  { level: 'Phylum', value: 'Chordata', ja: '門' },
  { level: 'Class', value: 'Mammalia', ja: '綱' },
  { level: 'Order', value: 'Primates', ja: '目' },
  { level: 'Family', value: 'Hominidae', ja: '科' },
  { level: 'Genus', value: 'Homo', ja: '属' },
  { level: 'Species', value: 'H. sapiens', ja: '種' },
] as const

export const TutorialSpecificationClassification: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Layers size={24} />
        Classification (科目などの分類)
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Taxonomy. Linnaean hierarchy for Homo sapiens.
      </p>
      <p class="mt-2">
        <A href="/tutorials/specification" class="text-xs font-mono text-amber-600 hover:underline">
          ← Specification
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Taxonomic hierarchy</h2>
      <p class="mt-1 text-xs text-stone-500">Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species</p>
      <div class="mt-3 space-y-2">
        {TAXONOMY.map((t) => (
          <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <span class="text-xs text-stone-500">{t.level} ({t.ja})</span>
            <span class="font-mono text-sm text-amber-600">{t.value}</span>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Notes</h2>
      <p class="mt-2 text-sm text-stone-600">
        Linnaean classification. Domain (Eukarya, Bacteria, Archaea) added above Kingdom. Homo sapiens: binomial nomenclature.
      </p>
    </section>
  </div>
)
