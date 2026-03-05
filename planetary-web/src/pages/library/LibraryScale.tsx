import { type Component } from 'solid-js'
import { Globe } from 'lucide-solid'
import { A } from '@solidjs/router'

const SCALES = [
  { label: 'Planck length', value: '~1.6×10⁻³⁵ m', note: 'Quantum gravity. Minimum meaningful length.' },
  { label: 'Electron radius', value: '~2.8×10⁻¹⁵ m', note: 'Classical electron. fm scale.' },
  { label: 'Atom', value: '~10⁻¹⁰ m', note: 'Bohr radius. Ångström.' },
  { label: 'DNA width', value: '~2 nm', note: 'Double helix.' },
  { label: 'Human cell', value: '~10–100 μm', note: 'Eukaryotic cell.' },
  { label: 'Human', value: '~1.7 m', note: 'Homo sapiens height.' },
  { label: 'Earth', value: '~12.7×10⁶ m', note: 'Equatorial diameter.' },
  { label: 'Solar system', value: '~10¹³ m', note: 'Neptune orbit. ~30 AU.' },
  { label: 'Light-year', value: '~9.5×10¹⁵ m', note: '1 ly.' },
  { label: 'Milky Way', value: '~10²¹ m', note: '~100 kly diameter.' },
  { label: 'Observable universe', value: '~10²⁶ m', note: '~93 Gly. Cosmic horizon.' },
] as const

export const LibraryScale: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Globe size={24} />
        Scale
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Planck scale to cosmic scale (極大). Length hierarchy.
      </p>
      <p class="mt-2">
        <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
          ← Library
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Length scale (長さスケール)</h2>
      <p class="mt-1 text-xs text-stone-500">Planck → atom → human → Earth → universe.</p>
      <div class="mt-3 space-y-2">
        {SCALES.map((s) => (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{s.label}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{s.note}</p>
            </div>
            <span class="font-mono text-xs text-amber-600">{s.value}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
)
