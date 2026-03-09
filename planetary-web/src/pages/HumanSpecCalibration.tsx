import { type Component } from 'solid-js'
import { Users } from 'lucide-solid'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'

/**
 * Human Spec Calibration — Computing resource base for Homo sapiens.
 * 計算資源のベース: 細胞数、原子数、クオーク数、アンチクオークのペア
 */

const COMPUTING_RESOURCE_BASE = [
  {
    id: 'cells',
    name: 'Cells (細胞数)',
    value: '~3.7×10¹³',
    valueAlt: '~37 trillion',
    desc: 'Adult human. Sender et al. (2016) revision. Base unit for biological computation.',
    unit: 'cells',
  },
  {
    id: 'atoms',
    name: 'Atoms (原子数)',
    value: '~7×10²⁷',
    valueAlt: '~7 octillion',
    desc: '内部系の構成原子数。Adult ~70 kg. H, C, O, N dominant. Computing spec dependency.',
    unit: 'atoms',
  },
  {
    id: 'nucleons',
    name: 'Protons + Neutrons (陽子–中性子数)',
    value: '~7×10²⁸',
    valueAlt: '~10²⁹ nucleons',
    desc: '原子核内部。~10 nucleons per atom on average. Baryon number. Computing spec dependency.',
    unit: 'nucleons',
  },
  {
    id: 'quarks',
    name: 'Quarks (クオーク数)',
    value: '~2–3×10²⁹',
    valueAlt: '~10²⁹ valence',
    desc: '3 valence quarks per nucleon. ~10²⁹ nucleons → ~3×10²⁹ quarks. Computing spec dependency. Up, down dominant.',
    unit: 'quarks',
  },
  {
    id: 'antiquark-pairs',
    name: 'Antiquark pairs (アンチクオークのペア)',
    value: '~10²⁶–10²⁹',
    valueAlt: 'virtual / sea',
    desc: '通常物質では実在の反クオークは極少。仮想対（海クオーク、QCD真空ゆらぎ）: クオーク数と同オーダー。Sea quarks in nucleons.',
    unit: 'pairs',
  },
] as const

export const HumanSpecCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Users size={24} />
        Human Spec (人間のSpec)
      </h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.humanSpecDesc}</p>
      <p class="mt-2">
        <A href="/tutorials/specification" class="text-xs font-mono text-amber-600 hover:underline">
          → Specification (Homo sapiens)
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-amber-100 bg-amber-50/30 p-4">
      <h2 class="font-mono text-sm font-medium text-stone-700">Premise (前提)</h2>
      <p class="mt-2 text-sm text-stone-600">
        知的生命体は識別子である粒子数をコントロールできると想定する。コンピューティングスペックは内部系の構成原子数、原子核内部の陽子–中性子数、クオーク数に依存すると想定される。
      </p>
      <p class="mt-2 text-xs text-stone-500">
        Intelligent life is assumed to control particle count as identifier. Computing spec depends on: constituent atom count (内部系の構成原子数), proton–neutron count in nuclei (陽子–中性子数), quark count (クオーク数).
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">
        Computing resource base (計算資源のベース)
      </h2>
      <p class="mt-1 text-xs text-stone-500">
        Scale hierarchy: cells → atoms → nucleons → quarks. Spec depends on 原子数, 陽子–中性子数, クオーク数.
      </p>
      <div class="mt-3 space-y-2">
        {COMPUTING_RESOURCE_BASE.map((r) => (
          <div class="rounded-lg border border-stone-100 px-3 py-2">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs font-medium text-stone-700">{r.name}</span>
              <span class="font-mono text-sm text-amber-600">{r.value}</span>
            </div>
            <p class="mt-1 text-[10px] text-stone-500">{r.valueAlt}</p>
            <p class="mt-1 text-xs text-stone-600">{r.desc}</p>
          </div>
        ))}
      </div>
      <p class="mt-3 text-[10px] text-stone-500">
        SI. Standard Model. QCD = Quantum Chromodynamics. Valence vs sea quarks.
      </p>
    </section>
  </div>
)
