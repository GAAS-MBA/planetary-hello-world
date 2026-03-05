import { type Component } from 'solid-js'
import { FileText } from 'lucide-solid'
import { A } from '@solidjs/router'

/**
 * Specification — Homo sapiens classification
 * Biological specification for Planetary Hello World
 */
export const TutorialSpecification: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <FileText size={24} />
        Specification
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Homo sapiens as biological species. Classification for Planetary Hello World.
      </p>
      <p class="mt-3 flex flex-wrap gap-3">
        <A href="/tutorials/specification/classification" class="text-xs font-mono text-amber-600 hover:underline">
          → Classification (科目などの分類)
        </A>
        <A href="/architect" class="text-xs font-mono text-amber-600 hover:underline">
          → Architect (Design Specification)
        </A>
      </p>
    </div>

    {/* Elemental composition */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Elemental composition (元素構成)</h2>
      <p class="mt-1 text-xs text-stone-500">Major elements by mass (adult, ~70 kg).</p>
      <div class="mt-3 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Oxygen</span>
          <span class="font-mono text-amber-600">~65%</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Carbon</span>
          <span class="font-mono text-amber-600">~18%</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Hydrogen</span>
          <span class="font-mono text-amber-600">~10%</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Nitrogen</span>
          <span class="font-mono text-amber-600">~3%</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Calcium, Phosphorus, others</span>
          <span class="font-mono text-amber-600">~4%</span>
        </div>
      </div>
    </section>

    {/* Components */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Components (コンポーネント)</h2>
      <p class="mt-1 text-xs text-stone-500">Bones, muscles, organs.</p>
      <div class="mt-3 space-y-3">
        <div>
          <p class="text-xs font-medium text-stone-600">Bones (骨)</p>
          <p class="mt-0.5 font-mono text-sm text-amber-600">~206 (adult)</p>
          <p class="mt-0.5 text-[10px] text-stone-500">~270 at birth, fuse to 206. Axial skeleton, appendicular skeleton.</p>
        </div>
        <div>
          <p class="text-xs font-medium text-stone-600">Muscles (筋肉)</p>
          <p class="mt-0.5 font-mono text-sm text-amber-600">~650 skeletal</p>
          <p class="mt-0.5 text-[10px] text-stone-500">Skeletal, cardiac, smooth. ~40% of body mass.</p>
        </div>
        <div>
          <p class="text-xs font-medium text-stone-600">Organs (臓器構成)</p>
          <p class="mt-0.5 text-sm text-stone-600">
            Heart, lungs, liver, kidneys, brain, stomach, intestines, pancreas, spleen, skin, etc.
          </p>
          <p class="mt-0.5 text-[10px] text-stone-500">78 organs (count varies by definition).</p>
        </div>
      </div>
    </section>

    {/* Sensors and outputs */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Sensors & outputs (センサーと出力)</h2>
      <div class="mt-3 grid gap-3 sm:grid-cols-2">
        <div class="rounded-lg border border-stone-100 p-3">
          <p class="text-xs font-medium text-stone-600">Sensors</p>
          <p class="mt-1 text-sm text-stone-600">
            Vision, hearing, touch, taste, smell. Proprioception, equilibrioception, thermoception, nociception.
          </p>
        </div>
        <div class="rounded-lg border border-stone-100 p-3">
          <p class="text-xs font-medium text-stone-600">Outputs</p>
          <p class="mt-1 text-sm text-stone-600">
            Voice, facial expression, gesture, locomotion. Excretion, respiration, perspiration.
          </p>
        </div>
      </div>
    </section>

    {/* Ranges */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Ranges (範囲)</h2>
      <p class="mt-1 text-xs text-stone-500">Typical ranges for adult Homo sapiens.</p>
      <div class="mt-3 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Age (年齢)</span>
          <span class="font-mono text-amber-600">0–120+ years</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Height (身長)</span>
          <span class="font-mono text-amber-600">~45 cm–~250 cm</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Weight (体重)</span>
          <span class="font-mono text-amber-600">~2.5 kg–~600+ kg</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Skin color (肌のカラー)</span>
          <span class="font-mono text-amber-600">Fitzpatrick I–VI</span>
        </div>
      </div>
      <p class="mt-2 text-[10px] text-stone-500">
        Newborn to adult. Fitzpatrick skin phototype classification.
      </p>
    </section>
  </div>
)
