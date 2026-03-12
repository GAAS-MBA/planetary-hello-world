import { type Component } from 'solid-js'
import { Network } from 'lucide-solid'

/**
 * Training — Manifold & Axiomaticity — Sports
 * 複素空間における粒子計算から quantum/classical dynamics を統合し、
 * axiomaticity によってスポーツの動きまでを連動する
 */
export const TrainingManifoldAxiomaticitySports: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Network size={24} />
        Manifold & Axiomaticity — Sports
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        Manifold・生成基底・複素空間における粒子計算から quantum/classical dynamics を統合し、axiomaticity によってスポーツの動きまでを連動する。
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Manifold & 生成基底</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        多様体（Manifold）と生成基底は、状態空間の幾何構造を定める。スポーツの動きは、この基底によって張られる空間上の軌道として記述できる。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">複素空間における粒子計算</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        複素空間での粒子計算は、量子力学の振幅と位相を扱う。波動関数の重ね合わせが、身体の「複数の可能性」を同時に保持する状態に対応する。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Quantum & Classical Dynamics の統合</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        量子力学（重ね合わせ・観測による収束）と古典力学（軌道・重力・慣性）は、スケールと解像度の違いで切り替わる。身体運動は両方のレジームを横断する。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Axiomaticity による連動</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        Axiomaticity（公理性）は、数学的構造と物理法則、そしてスポーツの「正しい動き」を同一の公理系で束ねる。公理から導かれる定理として、パンチ・キック・ボール操作が一貫して記述される。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">結論</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        Manifold、生成基底、複素空間の粒子計算、quantum/classical dynamics を統合した枠組みにおいて、axiomaticity はスポーツの動きまでを連動させる。理論と実践が同一の公理系に収束する。
      </p>
    </section>
  </div>
)
