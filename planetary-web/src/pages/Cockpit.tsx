import { type Component } from 'solid-js'
import { Thermometer, Users, BookOpen, History } from 'lucide-solid'
import { A } from '@solidjs/router'

const links = [
  { href: '/cockpit/indicator-environmental', icon: Thermometer, label: 'Indicator — Environmental', desc: 'Mean temperature, pressure, biodiversity. ISO, SI.' },
  { href: '/cockpit/indicator-civil', icon: Users, label: 'Indicator — Civil', desc: 'Population, languages, currencies, countries.' },
  { href: '/cockpit/controlling-model', icon: BookOpen, label: 'Controlling Model', desc: 'Methodology for indicator calculation.' },
  { href: '/cockpit/version', icon: History, label: 'Version', desc: 'Genesis Trigger update history.' },
] as const

/**
 * Cockpit — Indicator Planet (index)
 */
export const Cockpit: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Cockpit</h1>
      <p class="mt-1 text-sm text-stone-500">
        Indicator Planet. Environmental & Civil indicators for an Entity arriving from space. ISO, SI, universal units.
      </p>
      <p class="mt-2">
        <A href="/genesis-trigger" class="text-xs font-mono text-amber-600 hover:underline">
          → Genesis Trigger
        </A>
      </p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2">
      {links.map(({ href, icon: Icon, label, desc }) => (
        <A
          href={href}
          class="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-amber-200 hover:bg-amber-50/30"
        >
          <Icon size={20} class="mt-0.5 shrink-0 text-amber-600" />
          <div>
            <p class="font-mono text-sm font-medium text-stone-700">{label}</p>
            <p class="mt-0.5 text-xs text-stone-500">{desc}</p>
          </div>
        </A>
      ))}
    </div>
  </div>
)
