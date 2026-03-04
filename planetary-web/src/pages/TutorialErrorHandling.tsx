import { type Component } from 'solid-js'
import { AlertTriangle } from 'lucide-solid'

/**
 * Error Handling — Breaking Update Protocol
 * When movement patterns lose compatibility with body state
 */
export const TutorialErrorHandling: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <AlertTriangle size={24} />
        Error Handling
      </h1>
      <p class="mt-1 text-sm text-stone-500">Breaking Update Protocol</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">What Is a Breaking Update?</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Body hardware or internal state changes so that yesterday&apos;s movement patterns (software) lose compatibility. Triggers: injury, illness, stress, aging, environment change, posture adaptation.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Bug Symptoms</h2>
      <ul class="mt-2 space-y-1 text-sm text-stone-600">
        <li>• Drops, trips, calculation errors</li>
        <li>• Distance/timing mismatch</li>
        <li>• Wrong force application → back, shoulder, knee pain</li>
        <li>• &quot;I could do it yesterday&quot; but not today</li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Correct Response: Reduce Output</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Do not push harder. Reduce output so the brain can recalibrate. Lower load, decompose movements, relax (restore skeletal support), wait for adaptation.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">5-Process Limit & Axiom Check</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Humans can run only about 5 processes at once. Check with Axiom whether your body or brain is running background processes that waste resources unnecessarily.
      </p>
    </section>

  </div>
)
