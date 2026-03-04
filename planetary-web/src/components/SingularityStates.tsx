import { type Component } from 'solid-js'
import { copy } from '../lib/copy'

/**
 * Pure Axiomaticity - 4 states of Super Singularity
 * x=1, x=0, x=1∩x=0, ¬(x=1∩x=0)
 */
export const SingularityStates: Component = () => {
  const states = [
    { key: 'exists', label: copy.states.exists, expr: 'x=1', color: 'text-emerald-600' },
    { key: 'notExists', label: copy.states.notExists, expr: 'x=0', color: 'text-rose-600' },
    { key: 'both', label: copy.states.both, expr: 'x=1 ∩ x=0', color: 'text-violet-600' },
    { key: 'neither', label: copy.states.neither, expr: '¬(x=1 ∩ x=0)', color: 'text-amber-600' },
  ]

  return (
    <div class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h3 class="mb-3 font-mono text-sm font-medium text-amber-600">
        {copy.pureAxiomaticity}
      </h3>
      <ul class="space-y-2">
        {states.map((s) => (
          <li class="flex items-start gap-2 text-sm">
            <span class={`font-mono ${s.color}`}>{s.expr}</span>
            <span class="text-stone-400">—</span>
            <span class="text-stone-700">{s.label}</span>
          </li>
        ))}
      </ul>
      <p class="mt-3 text-xs text-stone-500">
        ZFC: {copy.zfcInside} | {copy.zfcOutside} · Ø, ¬Ø, ¬¬Ø beyond verification
      </p>
    </div>
  )
}
