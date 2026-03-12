import { type Component } from 'solid-js'
import { Dumbbell } from 'lucide-solid'

/**
 * Training — 30-Minute Punch Protocol
 * Most economical leverage: human peak output in 30 minutes
 */
export const TrainingPunchProtocol: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Dumbbell size={24} />
        30-Minute Punch Protocol
      </h1>
      <p class="mt-1 text-sm text-stone-500">Human peak benchmark in 30 minutes</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Protocol Overview</h2>
      <ul class="mt-3 space-y-2 text-sm text-stone-600">
        <li><strong>Load:</strong> Light dumbbells (1kg, 2kg) or cans/bottles</li>
        <li><strong>Structure:</strong> 90s output + 60s interval × 12 sets</li>
        <li><strong>Total punches:</strong> 1000–1500</li>
        <li><strong>Duration:</strong> ~30 minutes</li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Why More Efficient Than Gym</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Mitt/sandbag work hits wrist/fist/tendon limits before muscle load. Gym trips take 3+ hours. At home, 12 sets in 30 minutes. Arm stimulus yields growth hormone, endorphins, testosterone.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Human Peak Benchmark</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        World champions: ~500–1000 punches over 12 rounds. Maximum needed for muscle development is under 1000. This protocol compresses that into 30 minutes.
      </p>
    </section>
  </div>
)
