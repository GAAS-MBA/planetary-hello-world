import { type Component } from 'solid-js'
import { Atom, Zap, Mountain, Layers } from 'lucide-solid'
import { A } from '@solidjs/router'

const links = [
  { href: '/library/elements', icon: Atom, label: 'Elements', desc: 'Periodic Table.' },
  { href: '/library/dynamics', icon: Zap, label: 'Dynamics', desc: 'Standard Model, force classification.' },
  { href: '/library/species-landscape', icon: Mountain, label: 'Species Landscape', desc: 'Input.' },
  { href: '/library/species-taxonomy', icon: Layers, label: 'Species Taxonomy', desc: 'count · ISO 17298, ISO 13208. What species exist on Earth.' },
] as const

export const Library: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Library</h1>
      <p class="mt-1 text-sm text-stone-500">
        Elements, Dynamics, Species Taxonomy. Reference for Planetary Hello World.
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
