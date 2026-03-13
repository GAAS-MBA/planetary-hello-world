import { type Component } from 'solid-js'
import { Scan } from 'lucide-solid'

/**
 * Training — 対象、空間の身体化
 * 対象（物体）と空間を身体化する
 */
export const TrainingObjectSpaceEmbodiment: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Scan size={24} />
        対象、空間の身体化
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        対象（物体）と空間を身体化する。身体図式の拡張、感覚のマッピング、脳内シミュレーション。
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">対象の身体化</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        <strong>対象</strong>とは、ボールや道具など、身体の外にある物体。身体化とは、脳がそれを「外部の物体」ではなく、自分の手足と同じ<strong>「身体の一部」</strong>として認識（マッピング）すること。足裏や皮膚、空気の振動を通じて、触れずとも対象の状態を察知できる状態になる。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">空間の身体化</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        <strong>空間</strong>の身体化とは、重力や慣性、放物線といった物理法則を身体が「知っている」状態。視覚による後追いではなく、脳が物理法則をダイレクトに計算して<strong>「未来の空間」</strong>に体を先回りさせる。空間センサーが作動し、対象の軌道を予測できる。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">身体図式の拡張</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        身体図式（body schema）は、脳が持つ「自分自身の身体のモデル」。対象と空間の身体化は、このモデルを拡張する。ボールが自分の一部になり、重力が自分の感覚になる。視覚情報を「低解像度」にすることで、脳の処理リソースを固有感覚と空間把握に全振りできる。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">結論</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        対象の身体化と空間の身体化は、スポーツ・経営・あらゆる技能の基盤。見ずに蹴る、見ずに経営する、といった「ノールック」の状態は、対象と空間が完全に身体化された証拠である。
      </p>
    </section>
  </div>
)
