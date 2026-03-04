import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { Menu } from 'lucide-solid'
import { copy } from '../lib/copy'

interface HeaderProps {
  onMenuToggle: () => void
  sidebarOpen: boolean
}

export const Header: Component<HeaderProps> = (props) => (
  <header class="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-stone-200 bg-white/95 px-4 backdrop-blur-sm md:px-6">
    <div class="flex items-center gap-3">
      <button
        type="button"
        class="rounded-lg p-2 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 md:hidden"
        onClick={props.onMenuToggle}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
      <A
        href="/"
        class="font-mono text-lg font-semibold tracking-tight text-amber-600 hover:text-amber-700"
      >
        {copy.title}
      </A>
    </div>
  </header>
)
