import { createSignal, onMount, type Component } from 'solid-js'
import { Mountain } from 'lucide-solid'
import { A } from '@solidjs/router'

const LANDSCAPE_STORAGE_KEY = 'phw-species-landscape'

export const LibrarySpeciesLandscape: Component = () => {
  const [text, setText] = createSignal('')

  onMount(() => {
    try {
      setText(localStorage.getItem(LANDSCAPE_STORAGE_KEY) ?? '')
    } catch {
      /* ignore */
    }
  })

  const save = (v: string) => {
    setText(v)
    try {
      localStorage.setItem(LANDSCAPE_STORAGE_KEY, v)
    } catch {
      /* ignore */
    }
  }

  return (
    <div class="space-y-6">
      <div>
        <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
          <Mountain size={24} />
          Species Landscape
        </h1>
        <p class="mt-1 text-sm text-stone-500">
          Input. Species landscape description.
        </p>
        <p class="mt-2">
          <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
            ← Library
          </A>
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="font-mono text-sm font-medium text-stone-700">Species Landscape</h2>
        <textarea
          value={text()}
          onInput={(ev) => save(ev.currentTarget.value)}
          placeholder="Enter species landscape description..."
          rows={8}
          class="mt-3 w-full rounded-lg border border-stone-200 px-3 py-2 text-sm text-stone-700 placeholder:text-stone-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
      </section>
    </div>
  )
}
