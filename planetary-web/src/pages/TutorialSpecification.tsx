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
        <A href="/library/dynamics" class="text-xs font-mono text-amber-600 hover:underline">
          → Dynamics
        </A>
        <A href="/architect" class="text-xs font-mono text-amber-600 hover:underline">
          → Architect (Design Specification)
        </A>
      </p>
    </div>

    {/* Executable range & Main Dynamics understood */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Executable range (実行可能なDynamicsの範囲)</h2>
      <p class="mt-1 text-xs text-stone-500">Scale and energy range where dynamics are observable/operable.</p>
      <div class="mt-3 space-y-2">
        <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-xs text-stone-700">Length</span>
          <span class="font-mono text-xs text-amber-600">~10⁻¹⁹ m – ~10²⁶ m</span>
        </div>
        <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-xs text-stone-700">Energy</span>
          <span class="font-mono text-xs text-amber-600">~10⁻³³ eV – ~10²⁸ eV</span>
        </div>
        <div class="flex flex-wrap items-start justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-xs text-stone-700">Time</span>
          <span class="font-mono text-xs text-amber-600">Planck time – cosmic age</span>
        </div>
      </div>
      <p class="mt-2 text-[10px] text-stone-500">
        From quantum to cosmological scales. LHC ~TeV. CMB ~meV.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Main Dynamics understood (主なDynamicsを理解)</h2>
      <div class="mt-3 flex flex-wrap gap-2">
        {['Standard Model', 'Gravity (GR)', 'Electromagnetic', 'Strong', 'Weak', 'Higgs', 'QCD', 'QED'].map((d) => (
          <span class="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            <span class="text-amber-500">✓</span>
            {d}
          </span>
        ))}
      </div>
      <p class="mt-2 text-[10px] text-stone-500">
        Core dynamics comprehended. GR = General Relativity. QCD = Quantum Chromodynamics. QED = Quantum Electrodynamics.
      </p>
    </section>

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

    {/* Operating mechanism — Hardware */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Operating mechanism — Hardware (動作機構・ハードウェア)</h2>
      <p class="mt-1 text-xs text-stone-500">Heart, circulatory system, respiratory system specs.</p>
      <div class="mt-3 space-y-3">
        <div>
          <p class="text-xs font-medium text-stone-600">Heart (心臓系)</p>
          <p class="mt-0.5 font-mono text-sm text-amber-600">~60–100 bpm. ~5 L/min cardiac output.</p>
          <p class="mt-0.5 text-[10px] text-stone-500">4 chambers. Systole/diastole. ~70–80 mL stroke volume.</p>
        </div>
        <div>
          <p class="text-xs font-medium text-stone-600">Circulatory (循環器系)</p>
          <p class="mt-0.5 text-sm text-stone-600">
            Arteries, veins, capillaries. ~5 L blood. ~120/80 mmHg systolic/diastolic.
          </p>
          <p class="mt-0.5 text-[10px] text-stone-500">Pulmonary circulation, systemic circulation.</p>
        </div>
        <div>
          <p class="text-xs font-medium text-stone-600">Respiratory (呼吸器系)</p>
          <p class="mt-0.5 text-sm text-stone-600">~12–20 breaths/min. ~500 mL tidal volume. ~6 L lung capacity.</p>
        </div>
      </div>
    </section>

    {/* Operating mechanism — OS */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Operating mechanism — OS (動作機構・OS)</h2>
      <p class="mt-1 text-xs text-stone-500">Edge I/O, language control.</p>
      <div class="mt-3 space-y-3">
        <div>
          <p class="text-xs font-medium text-stone-600">Edge input/output (エッジインプットアウトプット)</p>
          <p class="mt-0.5 text-sm text-stone-600">
            Sensory afferents → CNS. Motor efferents → muscles. Reflex arcs. Cranial nerves, spinal nerves.
          </p>
          <p class="mt-0.5 text-[10px] text-stone-500">Peripheral nervous system. Real-time feedback.</p>
        </div>
        <div>
          <p class="text-xs font-medium text-stone-600">Language control (言語制御)</p>
          <p class="mt-0.5 text-sm text-stone-600">
            Broca, Wernicke. Broca's area (production), Wernicke's area (comprehension). Syntax, semantics.
          </p>
          <p class="mt-0.5 text-[10px] text-stone-500">~7000 languages (ISO 639). Natural language processing.</p>
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

    {/* Operating temperature */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Operating temperature (対応温度)</h2>
      <p class="mt-1 text-xs text-stone-500">Ambient temperature range for survival. Core body ~37 °C.</p>
      <div class="mt-3 space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Ambient (環境)</span>
          <span class="font-mono text-amber-600">~−40 °C – ~50 °C</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-stone-100 px-3 py-2">
          <span class="text-sm text-stone-700">Core body (深部体温)</span>
          <span class="font-mono text-amber-600">~36.5–37.5 °C</span>
        </div>
      </div>
    </section>

    {/* Supply */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Supply (補給)</h2>
      <p class="mt-1 text-xs text-stone-500">Intake. Food, water, oxygen.</p>
      <div class="mt-3 space-y-2">
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Oxygen</p>
          <p class="mt-0.5 text-sm text-stone-600">~0.5 L/min at rest. ~3 L/min heavy exercise.</p>
        </div>
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Water</p>
          <p class="mt-0.5 text-sm text-stone-600">~2–3 L/day. Thermoregulation, metabolism.</p>
        </div>
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Food</p>
          <p class="mt-0.5 text-sm text-stone-600">~2000 kcal/day (adult). Carbohydrates, fats, proteins.</p>
        </div>
      </div>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Distance per supply (一回の補給で動ける距離)</h3>
      <p class="mt-1 text-xs text-stone-500">~2000 kcal ≈ walking ~25–40 km. Cycling ~80–120 km. Running ~15–25 km.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Walking (5 km/h)</span>
          <span class="font-mono text-amber-600">~5–8 h ≈ 25–40 km</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Running (10 km/h)</span>
          <span class="font-mono text-amber-600">~1.5–2.5 h ≈ 15–25 km</span>
        </div>
      </div>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Velocity — max output (走るスピード・速さ 最大出力)</h3>
      <p class="mt-1 text-xs text-stone-500">SI: m/s. km/h in parentheses.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Forward (前方)</span>
          <span class="font-mono text-amber-600">~12.4 m/s (~45 km/h elite) · ~8–10 m/s (~29–36 km/h typical)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Backward (後方)</span>
          <span class="font-mono text-amber-600">~4–6 m/s (~14–22 km/h)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Lateral (側方)</span>
          <span class="font-mono text-amber-600">~6–8 m/s (~22–29 km/h crossover) · ~2–4 m/s (~7–14 km/h shuffle)</span>
        </div>
      </div>
      <p class="mt-1 text-[10px] text-stone-500">
        Forward: Usain Bolt peak ~12.4 m/s. Backward/lateral: lower due to biomechanics.
      </p>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Max output duration (最大出力持続時間)</h3>
      <p class="mt-1 text-xs text-stone-500">How long peak velocity can be sustained. Anaerobic → aerobic transition.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Full sprint (100 m)</span>
          <span class="font-mono text-amber-600">~10–12 s</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Near-max (200–400 m)</span>
          <span class="font-mono text-amber-600">~20–60 s</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">High sustained (800 m)</span>
          <span class="font-mono text-amber-600">~2–3 min</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Sustained run (marathon pace)</span>
          <span class="font-mono text-amber-600">~2–4 h</span>
        </div>
      </div>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Jump height (ジャンプの高さ)</h3>
      <p class="mt-1 text-xs text-stone-500">Vertical. SI: m.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Standing vertical (standing)</span>
          <span class="font-mono text-amber-600">~0.5–0.6 m (elite) · ~0.3–0.4 m (typical)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Running vertical (approach)</span>
          <span class="font-mono text-amber-600">~0.8–1.0 m (elite)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Broad jump (standing)</span>
          <span class="font-mono text-amber-600">~2.5–3.5 m (typical)</span>
        </div>
      </div>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Fuel depletion (自然放電・基礎代謝による燃料切れ)</h3>
      <p class="mt-1 text-xs text-stone-500">Basal metabolism ~1600 kcal/day. Time until depletion without supply.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Glycogen (糖質)</span>
          <span class="font-mono text-amber-600">~12–24 h</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Water</span>
          <span class="font-mono text-amber-600">~3–5 days</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Oxygen</span>
          <span class="font-mono text-amber-600">~3–5 min</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Fat reserves (full)</span>
          <span class="font-mono text-amber-600">~30–60 days</span>
        </div>
      </div>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Max durability without supply (補給なし最大耐用日数)</h3>
      <p class="mt-1 text-xs text-stone-500">Survival limit when not replenishing. Environment-dependent.</p>
      <div class="mt-2 space-y-1">
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Water only (水のみ欠乏)</span>
          <span class="font-mono text-amber-600">~3–5 days</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Food only (食事のみ欠乏)</span>
          <span class="font-mono text-amber-600">~30–60 days (fat reserves)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Water + food (水・食事ともに欠乏)</span>
          <span class="font-mono text-amber-600">~3–5 days (water limits)</span>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-2 rounded border border-stone-100 px-2 py-1.5 text-xs">
          <span class="text-stone-600">Complete fast (完全絶食・断水)</span>
          <span class="font-mono text-amber-600">~3–5 days</span>
        </div>
      </div>
      <p class="mt-1 text-[10px] text-stone-500">
        Rule of 3: ~3 min without O₂, ~3 days without water, ~3 weeks without food.
      </p>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">Essential nutrients (補給すべき基礎栄養)</h3>
      <div class="mt-2 flex flex-wrap gap-2">
        {[
          'Carbohydrates (糖質)',
          'Proteins (タンパク質)',
          'Fats (脂質)',
          'Water (水)',
          'Vitamins A, B, C, D, E, K',
          'Minerals: Ca, Fe, Mg, Zn, Na, K, P, I',
          'Essential amino acids (9)',
          'Essential fatty acids (ω-3, ω-6)',
          'Fiber (食物繊維)',
        ].map((n) => (
          <span class="rounded border border-amber-100 bg-amber-50/50 px-2 py-0.5 text-[10px] font-medium text-amber-800">
            {n}
          </span>
        ))}
      </div>
    </section>

    {/* Exhaust */}
    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Exhaust (排気)</h2>
      <p class="mt-1 text-xs text-stone-500">Output. Respiration, excretion, perspiration.</p>
      <div class="mt-3 space-y-2">
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">CO₂, H₂O (respiration)</p>
          <p class="mt-0.5 text-sm text-stone-600">~0.4 L/min CO₂ at rest. Water vapor in exhaled air.</p>
        </div>
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Perspiration</p>
          <p class="mt-0.5 text-sm text-stone-600">~0.5–2 L/day. Thermoregulation.</p>
        </div>
        <div class="rounded-lg border border-stone-100 px-3 py-2">
          <p class="text-xs font-medium text-stone-600">Excretion</p>
          <p class="mt-0.5 text-sm text-stone-600">Urine, feces. Metabolic waste.</p>
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
