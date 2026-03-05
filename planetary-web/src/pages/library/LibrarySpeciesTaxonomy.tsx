import { type Component } from 'solid-js'
import { Layers } from 'lucide-solid'
import { A } from '@solidjs/router'
import indicatorData from '../../lib/indicator-planet-data.json'

const envData = indicatorData.environmental as { id: string; label: string; value: string; ref: string; note: string }[]
const speciesCount = envData.find((e) => e.id === 'env-species')
const lifeCount = envData.find((e) => e.id === 'env-life')

export const LibrarySpeciesTaxonomy: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Layers size={24} />
        Species Taxonomy
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        count · ISO 17298, ISO 13208. What species exist on Earth (地球上にどのような種族がいるのか).
      </p>
      <p class="mt-2">
        <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
          ← Library
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Count</h2>
      <p class="mt-1 text-xs text-stone-500">ISO 17298, ISO 13208. Biodiversity vocabulary.</p>
      <div class="mt-3 space-y-2">
        {speciesCount && (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{speciesCount.label}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{speciesCount.note}</p>
            </div>
            <div class="text-right">
              <p class="font-mono text-sm text-amber-600">{speciesCount.value}</p>
              <p class="text-[10px] text-stone-400">{speciesCount.ref}</p>
            </div>
          </div>
        )}
        {lifeCount && (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{lifeCount.label}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{lifeCount.note}</p>
            </div>
            <div class="text-right">
              <p class="font-mono text-sm text-amber-600">{lifeCount.value}</p>
              <p class="text-[10px] text-stone-400">{lifeCount.ref}</p>
            </div>
          </div>
        )}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Species on Earth</h2>
      <p class="mt-2 text-sm text-stone-600">
        Eukaryotes (~8.7×10⁶ species). Bacteria, Archaea: orders of magnitude more. Linnaean taxonomy (Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species). ISO 17298 (biodiversity in strategy), ISO 13208 (vocabulary).
      </p>
      <p class="mt-2">
        <A href="/tutorials/specification/classification" class="text-xs font-mono text-amber-600 hover:underline">
          → Classification (Homo sapiens taxonomy)
        </A>
      </p>
    </section>
  </div>
)
