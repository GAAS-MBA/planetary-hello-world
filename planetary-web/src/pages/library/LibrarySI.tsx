import { type Component } from 'solid-js'
import { Ruler } from 'lucide-solid'
import { A } from '@solidjs/router'

const BASE_UNITS = [
  { quantity: 'length', unit: 'metre', symbol: 'm', def: 'Distance travelled by light in vacuum in 1/299792458 s' },
  { quantity: 'mass', unit: 'kilogram', symbol: 'kg', def: 'Defined by the Planck constant h = 6.62607015×10⁻³⁴ J⋅s' },
  { quantity: 'time', unit: 'second', symbol: 's', def: 'Duration of 9192631770 periods of Cs-133 radiation' },
  { quantity: 'electric current', unit: 'ampere', symbol: 'A', def: 'Defined by elementary charge e = 1.602176634×10⁻¹⁹ C' },
  { quantity: 'thermodynamic temperature', unit: 'kelvin', symbol: 'K', def: 'Defined by Boltzmann constant k = 1.380649×10⁻²³ J/K' },
  { quantity: 'amount of substance', unit: 'mole', symbol: 'mol', def: 'Exactly 6.02214076×10²³ elementary entities' },
  { quantity: 'luminous intensity', unit: 'candela', symbol: 'cd', def: 'Defined by luminous efficacy of 540 THz radiation' },
] as const

const DERIVED = [
  { quantity: 'force', unit: 'newton', symbol: 'N', base: 'kg⋅m/s²' },
  { quantity: 'pressure', unit: 'pascal', symbol: 'Pa', base: 'N/m² = kg/(m⋅s²)' },
  { quantity: 'energy', unit: 'joule', symbol: 'J', base: 'N⋅m = kg⋅m²/s²' },
  { quantity: 'power', unit: 'watt', symbol: 'W', base: 'J/s = kg⋅m²/s³' },
  { quantity: 'frequency', unit: 'hertz', symbol: 'Hz', base: 's⁻¹' },
  { quantity: 'electric charge', unit: 'coulomb', symbol: 'C', base: 'A⋅s' },
  { quantity: 'electric potential', unit: 'volt', symbol: 'V', base: 'J/C = kg⋅m²/(A⋅s³)' },
] as const

export const LibrarySI: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Ruler size={24} />
        SI Units (国際単位系)
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Système international d'unités. Seven base units. Universal for measurement.
      </p>
      <p class="mt-2">
        <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
          ← Library
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Base units</h2>
      <p class="mt-1 text-xs text-stone-500">ISO 80000. CGPM. Defined by physical constants (2019 revision).</p>
      <div class="mt-3 space-y-2">
        {BASE_UNITS.map((u) => (
          <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <div>
              <p class="text-xs font-medium text-stone-700">{u.quantity}</p>
              <p class="mt-0.5 text-[10px] text-stone-500">{u.def}</p>
            </div>
            <div class="text-right">
              <p class="font-mono text-sm text-amber-600">{u.symbol}</p>
              <p class="text-[10px] text-stone-400">{u.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Derived units (examples)</h2>
      <div class="mt-3 space-y-2">
        {DERIVED.map((u) => (
          <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
            <span class="text-xs font-medium text-stone-700">{u.quantity}</span>
            <div class="text-right">
              <span class="font-mono text-sm text-amber-600">{u.symbol}</span>
              <span class="ml-2 text-[10px] text-stone-400">= {u.base}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
)
