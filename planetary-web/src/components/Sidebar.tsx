import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { X, BookOpen, FileCode, Network, Lock, Globe, Orbit, Clock, Home, FileText, Map, Zap, PlayCircle, Dumbbell, AlertTriangle, Stars, Sun, Circle, Calendar, Gauge } from 'lucide-solid'
import { copy } from '../lib/copy'
import { ROUTES } from '../lib/site-config'

const HOME_TITLE = ROUTES.find((r) => r.path === '/')?.title ?? 'Planetary Hello World'
import { VERSION_DISPLAY, hasEncryptedUpdateMetadata } from '../lib/version'


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
        <div class="flex h-14 min-h-14 items-center justify-between border-b border-stone-200 px-4">
          <div>
            <p class="font-mono text-sm font-medium text-amber-600">{HOME_TITLE}</p>
          </div>
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
          {/* About PHW */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.aboutPhw}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                  end
                >
                  <Home size={18} class="shrink-0" />
                  <span>{copy.top}</span>
                </A>
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
            </ul>
          </div>

          {/* Cockpit */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              Cockpit
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/cockpit"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Gauge size={18} class="shrink-0" />
                  <span>{copy.cockpit}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Calibrators */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.calibrators}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/calibrators"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Gauge size={18} class="shrink-0" />
                  <span>{copy.calibrators}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Library */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              Library
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/library"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <BookOpen size={18} class="shrink-0" />
                  <span>{copy.library}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Calibration */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              Calibration
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/calibration/space"
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
                  href="/calibration/galaxy"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Stars size={18} class="shrink-0" />
                  <span>{copy.calibration.galaxy}</span>
                </A>
              </li>
              <li>
                <A
                  href="/calibration/solar"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Sun size={18} class="shrink-0" />
                  <span>{copy.calibration.solar}</span>
                </A>
              </li>
              <li>
                <A
                  href="/calibration/planet"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Circle size={18} class="shrink-0" />
                  <span>{copy.calibration.planet}</span>
                </A>
              </li>
              <li>
                <A
                  href="/calibration/civil"
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
                  href="/calibration/orbit"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Orbit size={18} class="shrink-0" />
                  <span>{copy.calibration.orbit}</span>
                </A>
              </li>
              <li>
                <A
                  href="/calibration/cosmic-event"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Zap size={18} class="shrink-0" />
                  <span>{copy.calibration.cosmicEvent}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.events}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/events/schedule"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Calendar size={18} class="shrink-0" />
                  <span>{copy.eventsSchedule}</span>
                </A>
              </li>
              <li>
                <A
                  href="/events/schedule-archive"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Calendar size={18} class="shrink-0" />
                  <span>{copy.scheduleArchive}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* MatterVerse */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.matterVerse}
            </p>
            <ul class="space-y-1">
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
              <li>
                <A
                  href="/genesis-trigger"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Zap size={18} class="shrink-0" />
                  <span>{copy.genesisTrigger}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Tutorials */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.tutorials}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/tutorials/specification/classification"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <FileText size={18} class="shrink-0" />
                  <span>Classification (科目などの分類)</span>
                </A>
              </li>
              <li>
                <A
                  href="/tutorials/specification"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <FileText size={18} class="shrink-0" />
                  <span>{copy.tutorialSpecification}</span>
                </A>
              </li>
              <li>
                <A
                  href="/tutorials/startup-sequence"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <PlayCircle size={18} class="shrink-0" />
                  <span>{copy.tutorialStartupSequence}</span>
                </A>
              </li>
              <li>
                <A
                  href="/tutorials/recommended-training"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Dumbbell size={18} class="shrink-0" />
                  <span>{copy.tutorialRecommendedTraining}</span>
                </A>
              </li>
              <li>
                <A
                  href="/tutorials/error-handling"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <AlertTriangle size={18} class="shrink-0" />
                  <span>{copy.tutorialErrorHandling}</span>
                </A>
              </li>
            </ul>
          </div>

          {/* Archives of Axiom */}
          <div class="mb-4">
            <p class="mb-2 px-2 text-[10px] font-medium uppercase tracking-wider text-stone-400">
              {copy.archivesOfAxiom}
            </p>
            <ul class="space-y-1">
              <li>
                <A
                  href="/axiom"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <BookOpen size={18} class="shrink-0" />
                  <span>{copy.axiom}</span>
                </A>
              </li>
              <li>
                <A
                  href="/axiomatic-system"
                  onClick={props.onClose}
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-stone-700 transition hover:bg-stone-100 hover:text-amber-600"
                  activeClass="bg-stone-100 text-amber-600"
                >
                  <Network size={18} class="shrink-0" />
                  <span>{copy.axiomaticSystem}</span>
                </A>
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
          <p class="mt-0.5 text-[10px] text-stone-400">
            —{copy.subtitle}
          </p>
        </div>
      </aside>
    </>
  )
}
