import { type Component } from 'solid-js'
import { copy } from '../lib/copy'

/**
 * Spirit | Axiomaticity (Event Horizon) | Body
 * AdS/CFT boundary · P=NP at the boundary
 */
export const EventHorizon: Component = () => (
    <div class="flex flex-col items-center gap-4 rounded-xl border border-stone-200 bg-white p-6 shadow-sm md:flex-row md:justify-center">
      <div class="rounded-lg bg-stone-100 px-4 py-3 text-center">
        <p class="text-xs uppercase tracking-wider text-stone-500">{copy.spirit}</p>
        <p class="mt-1 text-sm text-stone-700">Multi-dimensional glide</p>
      </div>
      <div class="flex items-center gap-2">
        <div class="h-px w-8 bg-gradient-to-r from-transparent to-amber-400" />
        <div class="rounded-full border-2 border-amber-400 px-4 py-2">
          <p class="font-mono text-xs font-medium text-amber-600">{copy.axiomaticity}</p>
          <p class="text-[10px] text-stone-500">{copy.eventHorizon}</p>
        </div>
        <div class="h-px w-8 bg-gradient-to-l from-transparent to-amber-400" />
      </div>
      <div class="rounded-lg bg-stone-100 px-4 py-3 text-center">
        <p class="text-xs uppercase tracking-wider text-stone-500">{copy.body}</p>
        <p class="mt-1 text-sm text-stone-700">Planetary constraints</p>
      </div>
    </div>
)
