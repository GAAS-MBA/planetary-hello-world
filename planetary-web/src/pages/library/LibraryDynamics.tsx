import { type Component } from 'solid-js'
import { Zap } from 'lucide-solid'
import { A } from '@solidjs/router'

export const LibraryDynamics: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Zap size={24} />
        Dynamics
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Standard Model, force classification.
      </p>
      <p class="mt-2">
        <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
          ← Library
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Standard Model</h2>
      <p class="mt-2 text-sm text-stone-600">
        Fermions, bosons, gauge. Quarks, leptons, gauge bosons (photon, W, Z, gluon). Higgs.
      </p>
      <div class="mt-3 space-y-2">
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Fermions</p>
          <p class="mt-0.5 text-xs text-stone-500">Quarks (u,d,c,s,t,b), Leptons (e,μ,τ,νe,νμ,ντ)</p>
        </div>
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Bosons</p>
          <p class="mt-0.5 text-xs text-stone-500">Gauge: γ, W±, Z, g. Higgs. Force carriers.</p>
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Force classification</h2>
      <div class="mt-3 space-y-2">
        {[
          { name: 'Gravity', strength: 'weak', range: '∞', carrier: '—', note: 'Not in SM. Curvature of spacetime.' },
          { name: 'Electromagnetic', strength: 'strong', range: '∞', carrier: 'γ', note: 'Photon. Charged particles.' },
          { name: 'Strong', strength: 'strongest', range: '~fm', carrier: 'g', note: 'Gluon. Confinement. Nuclei.' },
          { name: 'Weak', strength: 'weak', range: '~fm', carrier: 'W±, Z', note: 'Beta decay. Radioactivity.' },
        ].map((f) => (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{f.name}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{f.note}</p>
            </div>
            <div class="text-right">
              <p class="font-mono text-xs text-amber-600">{f.carrier}</p>
              <p class="text-[10px] text-stone-400">{f.strength} · {f.range}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)
