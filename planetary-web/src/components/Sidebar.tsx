import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { X, BookOpen, FileCode, Network, Lock, Globe, Orbit, Clock, Home, FileText, Map } from 'lucide-solid'
import { copy } from '../lib/copy'
import { VERSION_DISPLAY, hasEncryptedUpdateMetadata } from '../lib/version'

const AXIOM_URL = 'https://axiom.tanaakk.com/axiom'
const AXIOMATIC_SYSTEM_URL = 'https://axiom.tanaakk.com/axiomatic-system'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export const Sidebar: Component<SidebarProps> = (props) => {

  return (
    <>
      {/* Overlay for mobile */}
      <div
        class={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity md:hidden ${
          props.open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={props.onClose}
        aria-hidden="true"
      />

      <aside
        class={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-stone-200 bg-white shadow-xl transition-transform md:static md:translate-x-0 md:shadow-none ${
          props.open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div class="flex h-14 items-center justify-between border-b border-stone-200 px-4 md:justify-end">
          <span class="font-mono text-sm text-stone-500 md:hidden">{copy.archivesOfAxiom}</span>
          <button
            type="button"
            class="rounded-lg p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900 md:hidden"
            onClick={props.onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav class="flex-1 overflow-y-auto p-4">
          {/* MatterVerse Calibration */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.matterVerse}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/architect"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <FileText size={18} class="shrink-0" />
                  <span>{copy.architect}</span>
                </A>
              </li>
              <li>
                <A
                  href="/"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                  end
                >
                  <Home size={18} class="shrink-0" />
                  <span>{copy.title}</span>
                </A>
              </li>
              <li>
                <A
                  href="/space"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Globe size={18} class="shrink-0" />
                  <span>{copy.calibration.space}</span>
                </A>
              </li>
              <li>
                <A
                  href="/time-orbit"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Orbit size={18} class="shrink-0" />
                  <span>{copy.calibration.timeOrbit}</span>
                </A>
              </li>
              <li>
                <A
                  href="/civil"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Clock size={18} class="shrink-0" />
                  <span>{copy.calibration.civil}</span>
                </A>
              </li>
              <li>
                <A
                  href="/journey"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Map size={18} class="shrink-0" />
                  <span>{copy.journeyMap}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Archives of Axiom */}
          <div>
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.archivesOfAxiom}
            </p>
            <ul class="space-y-1">
              <li>
                <a
                  href={AXIOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                >
                  <BookOpen size={18} class="shrink-0" />
                  <span>{copy.axiom}</span>
                </a>
              </li>
              <li>
                <A
                  href="/axiomaticity"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <FileCode size={18} class="shrink-0" />
                  <span>{copy.axiomaticity}</span>
                </A>
              </li>
              <li>
                <a
                  href={AXIOMATIC_SYSTEM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                >
                  <Network size={18} class="shrink-0" />
                  <span>{copy.axiomaticSystem}</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Version display - Architect: v1.0.x-commit hash + encrypted location/time */}
        <div class="border-t border-stone-200 p-4">
          <p class="font-mono text-xs text-stone-500">
            {VERSION_DISPLAY}
          </p>
          {hasEncryptedUpdateMetadata() && (
            <p class="mt-1 flex items-center gap-1 text-[10px] text-stone-500">
              <Lock size={10} />
              ISO/SI metadata stored
            </p>
          )}
          <p class="mt-1 text-xs text-stone-500">
            © Planetary Hello World
          </p>
        </div>
      </aside>
    </>
  )
}
