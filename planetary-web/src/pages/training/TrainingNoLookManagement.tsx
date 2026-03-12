import { type Component } from 'solid-js'
import { Building2 } from 'lucide-solid'

/**
 * Training — 経営のノールック・トレーニング
 * サッカーのボールコントロールと事業経営を同じ「動的システムの制御」として捉える
 */
export const TrainingNoLookManagement: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Building2 size={24} />
        経営のノールック・トレーニング
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        サッカーのボールコントロールと事業経営を同じ「動的システムの制御」として捉える。
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p class="text-sm leading-relaxed text-stone-600">
        現場（ボール）に密着して視覚で微調整する段階から、構造（重力）を理解して遠隔でコントロールする段階への移行は、驚くほど共通点があります。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">事業経営における「重力」と「軌道」の対比</h2>
      <div class="mt-3 overflow-x-auto">
        <table class="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr class="border-b border-stone-200 bg-stone-50">
              <th class="px-3 py-2 text-left font-medium text-stone-700">サッカーのトレーニング</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">事業経営のフェーズ</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">本質的なメカニズム</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">現場にいてボールを凝視する</td>
              <td class="px-3 py-2"><strong>創業期:</strong> 社長が営業・技術・経理のすべてを自ら回す。</td>
              <td class="px-3 py-2">視覚フィードバック（直接介入）による力技の制御。</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">出社頻度を少しずつ減らす</td>
              <td class="px-3 py-2"><strong>成長期:</strong> 権限委譲を進め、現場から一歩引いた位置に身を置く。</td>
              <td class="px-3 py-2">「自分がいなくても回るか」のレジスタンストレーニング。</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">軌道だけで着弾点を予測する</td>
              <td class="px-3 py-2"><strong>成熟期:</strong> 指標（KPI）や市場の動向から、数ヶ月先の着弾点を予測する。</td>
              <td class="px-3 py-2"><strong>物理法則（市場原理・組織文化）</strong>という「重力」を信じる。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">なぜ「出社を減らす」ことがトレーニングになるのか</h2>
      <p class="mt-2 text-sm text-stone-600">
        サッカーで「着弾点を見ない」練習をするのと同様に、経営者がオフィスに行かない（介入を減らす）ことは、以下の<strong>「経営センサー」</strong>を鍛えることになります。
      </p>
      <ul class="mt-3 space-y-3 text-sm text-stone-600">
        <li>
          <strong>フィードフォワード制御の確立:</strong>
          現場の細部（視覚）が見えない分、「この施策を打てば、3ヶ月後に資金繰りはこうなり、社員のモチベーションはこう動くはずだ」という<strong>放物線の計算</strong>に頼らざるを得なくなります。
        </li>
        <li>
          <strong>ノイズの排除:</strong>
          現場にいると、目の前の些細なトラブル（視覚的なノイズ）に反応してしまい、事業の大きな「重心」を見失いがちです。離れることで、事業が持つ本来の慣性や重力が見えるようになります。
        </li>
        <li>
          <strong>組織という「重力」の信頼:</strong>
          社長が触れていない間も、組織という慣性が正しく働いているかを確認する。もし予測と違う場所に着弾したなら、それは「重力（仕組み）」の設定自体に問題があると判断し、微調整を行います。
        </li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">脳が漫然と処理するのを防ぐ知恵</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        これは、脳が漫然と処理してしまうのを防ぐ知恵である。一つ見てできたら、次は見ないでできるようにする。同じ刺激で脳がサボるのを防ぐのである。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">「見ない」ことで生まれる確信</h2>
      <blockquote class="mt-2 border-l-2 border-amber-300 pl-3 text-sm italic text-stone-700">
        「オフィスにいなくても、事業がどこへ向かっているか肌感覚でわかる」
      </blockquote>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        この状態は、サッカーで言うところの「ノールックでセンタリングに合わせる」状態と同じです。社長が現場を離れ、予測通りに物事が動いた時、それは社長の脳内に<strong>「事業のシミュレーションモデル」</strong>が完全に構築された証拠です。
      </p>
    </section>
  </div>
)
