import { type Component } from 'solid-js'
import { BookOpen } from 'lucide-solid'
import { A } from '@solidjs/router'

export const CockpitControllingModel: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Controlling Model</h1>
      <p class="mt-1 text-sm text-stone-500">
        Methodology for indicator calculation. Reference standards.
      </p>
      <p class="mt-2">
        <A href="/cockpit" class="text-xs font-mono text-amber-600 hover:underline">
          ← Cockpit
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <BookOpen size={16} />
        Environmental
      </h2>
      <ul class="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600">
        <li>Temperature: Kelvin (SI base). Global mean from reanalysis. ISO 80000-5.</li>
        <li>Pressure: Pascal (hPa). Sea-level reference. ISO 2533, ISO 8756.</li>
        <li>Species count (種族数): Eukaryote estimate. ISO 17298, ISO 13208.</li>
        <li>Life count (生き物の総数): Total organisms including Bacteria, Archaea. Order of magnitude.</li>
        <li>Gravity: m/s². WGS84 ellipsoid. SI.</li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <BookOpen size={16} />
        Civil
      </h2>
      <ul class="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600">
        <li>Population: UN estimates. ISO 3166 country codes.</li>
        <li>Languages: ISO 639. Living languages.</li>
        <li>Currencies: ISO 4217. Active codes.</li>
        <li>Countries: UN member states.</li>
        <li>Municipalities: Local government counts (approx.).</li>
        <li>Assets: Global financial assets. BIS, McKinsey. Base: USD.</li>
        <li>Payments: Annual transaction volume. McKinsey global payments report.</li>
        <li>Amount: World GDP (nominal). IMF, World Bank.</li>
      </ul>
    </section>
  </div>
)
