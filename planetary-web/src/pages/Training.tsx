import { createSignal, createMemo, type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { Dumbbell, Search } from 'lucide-solid'
import { TRAINING_ITEMS } from '../lib/training-config'

export const Training: Component = () => {
  const [query, setQuery] = createSignal('')

  const filtered = createMemo(() => {
    const q = query().toLowerCase().trim()
    if (!q) return TRAINING_ITEMS
    return TRAINING_ITEMS.filter((t) => {
      const searchable = [t.title, t.description, ...t.keywords].join(' ').toLowerCase()
      return searchable.includes(q)
    })
  })

  return (
    <div class="space-y-6">
      <div>
        <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
          <Dumbbell size={24} />
          Training
        </h1>
        <p class="mt-1 text-sm text-stone-500">
          Protocols for human peak output. Search and browse.
        </p>
      </div>

      <div class="relative">
        <Search size={18} class="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
        <input
          type="search"
          placeholder="Search training..."
          value={query()}
          onInput={(e) => setQuery(e.currentTarget.value)}
          class="w-full rounded-lg border border-stone-200 bg-white py-2.5 pl-10 pr-4 font-mono text-sm text-stone-700 placeholder-stone-400 focus:border-amber-300 focus:outline-none focus:ring-1 focus:ring-amber-200"
          aria-label="Search training protocols"
        />
      </div>

      <div class="grid gap-4 sm:grid-cols-2">
        {filtered().map((item) => (
          <A
            href={`/training/${item.slug}`}
            class="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-amber-200 hover:bg-amber-50/30"
          >
            <Dumbbell size={20} class="mt-0.5 shrink-0 text-amber-600" />
            <div>
              <p class="font-mono text-sm font-medium text-stone-700">{item.title}</p>
              <p class="mt-0.5 text-xs text-stone-500">{item.description}</p>
            </div>
          </A>
        ))}
      </div>

      {filtered().length === 0 && (
        <p class="text-center text-sm text-stone-500">No training protocols match your search.</p>
      )}
    </div>
  )
}
