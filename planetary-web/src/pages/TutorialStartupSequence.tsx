import { type Component } from 'solid-js'
import { PlayCircle } from 'lucide-solid'

/**
 * Startup Sequence — Boot sequence for planetary life
 * Recommended order from planetary-movement-mba
 */
export const TutorialStartupSequence: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <PlayCircle size={24} />
        Startup Sequence
      </h1>
      <p class="mt-1 text-sm text-stone-500">Recommended order for planetary life calibration</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">1. Initial Calibration</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Wake-up adjustment. Gravity alignment (3-point contact: occiput, sacrum, heels), joint play, golden moment.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">2. Body–Hardware–Software Ontology</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Relationship between body, software (movement patterns), and OS.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">3. Gravity Leverage Logic</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Physics of gravity utilization. Potential energy → kinetic energy.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">4. Muscle–Bone Balancing</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Skeletal support optimization. Tensegrit structure, load distribution.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">5. Performance Energy Limits</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        2-hour limit, polyphasic cycle. Energy constraints for sustained output.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">6. Materialization Protocol</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Output and materialization procedure.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">7. Environment Sync Earth</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Alignment with Earth 1G. Grounding, axial scaling, kinetic link, feedback.
      </p>
    </section>
  </div>
)
