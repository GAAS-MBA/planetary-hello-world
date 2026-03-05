import { type Component } from 'solid-js'
import { Atom } from 'lucide-solid'
import { A } from '@solidjs/router'
import tableData from '../../lib/periodic-table.json'

interface Element {
  Z: number
  sym: string
  name: string
  col: number
  row: number
}

const elements = tableData.elements as Element[]

const byPos = (col: number, row: number) => elements.find((e) => e.col === col && e.row === row)

export const LibraryElements: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Atom size={24} />
        Elements — Periodic Table
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        IUPAC Periodic Table of the Elements. 118 elements.
      </p>
      <p class="mt-2">
        <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
          ← Library
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Periodic Table</h2>
      <div class="mt-3 overflow-x-auto">
        <div class="inline-grid min-w-max gap-0.5" style={{ 'grid-template-columns': 'repeat(18, minmax(2.5rem, 1fr))' }}>
          {[1, 2, 3, 4, 5, 6, 7].map((row) =>
            Array.from({ length: 18 }, (_, i) => i + 1).map((col) => {
              const e = byPos(col, row)
              return (
                <div
                  class="flex min-h-[2.5rem] min-w-[2.5rem] flex-col items-center justify-center rounded border border-stone-100 px-1 py-0.5 text-center"
                  title={e ? `${e.name} (${e.sym})` : ''}
                >
                  {e ? (
                    <>
                      <span class="text-[8px] text-stone-400">{e.Z}</span>
                      <span class="font-mono text-xs font-medium text-amber-600">{e.sym}</span>
                    </>
                  ) : (
                    <span class="text-stone-200">—</span>
                  )}
                </div>
              )
            })
          )}
        </div>
      </div>
      <p class="mt-2 text-[10px] text-stone-500">
        Lanthanides (57–71) and Actinides (89–103) shown in main table. 118 elements total.
      </p>
    </section>
  </div>
)
