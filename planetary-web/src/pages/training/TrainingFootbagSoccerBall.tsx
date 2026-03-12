import { type Component } from 'solid-js'
import { Circle } from 'lucide-solid'

/**
 * Training — Footbag & Soccer Ball
 * 視覚による後追い → 脳内シミュレーションによる共鳴への進化
 */
export const TrainingFootbagSoccerBall: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Circle size={24} />
        Footbag & Soccer Ball
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        「視覚による後追い」から「脳内シミュレーションによる共鳴」への進化
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">1. 身体図式の拡張（ボールが自分の一部になる）</h2>
      <p class="mt-2 text-sm text-stone-600">
        <strong>感覚:</strong> 足裏や皮膚、さらには空気の振動を通じて、ボールの状態を「触れずとも」察知している状態。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        <strong>本質:</strong> 脳がボールを「外部の物体」ではなく、自分の手足と同じ<strong>「身体の一部」</strong>として認識（マッピング）したことで、空間センサーが作動しています。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">2. 重力の予測（未来の座標を捉える）</h2>
      <p class="mt-2 text-sm text-stone-600">
        <strong>感覚:</strong> ボールが「今どこにあるか」ではなく、重力加速度に従って「次にどこへ落ちるか」が直感的にわかる状態。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        <strong>本質:</strong> 視覚情報の処理（タイムラグあり）をスキップし、脳が物理法則をダイレクトに計算して<strong>「未来の空間」</strong>に体を先回りさせています。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">3. 周辺視とリラックス（情報の取捨選択）</h2>
      <p class="mt-2 text-sm text-stone-600">
        <strong>感覚:</strong> ボールを凝視（中心視）すると体が固まり空振りするが、ぼんやり捉える（周辺視）とスムーズに合わせられる。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        <strong>本質:</strong> 視覚情報をあえて「低解像度」にすることで、脳の処理リソースを<strong>「固有感覚（筋肉や関節の動き）」と「空間把握」</strong>に全振りできています。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">4. 軌道のみで足の位置を推測するトレーニング</h2>
      <p class="mt-2 text-sm text-stone-600">
        <strong>方法:</strong> 足に着弾する瞬間を見ずに、ボールの軌道だけを観察して、足をどこに置くかを推測する。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        <strong>本質:</strong> 視覚による「着弾の確認」を遮断し、重力と放物線の計算だけに頼る。脳内シミュレーションが視覚フィードバックなしで作動するかどうかの検証になる。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">5. 脳が漫然と処理するのを防ぐ知恵</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        これは、脳が漫然と処理してしまうのを防ぐ知恵である。一つ見てできたら、次は見ないでできるようにする。同じ刺激で脳がサボるのを防ぐのである。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">結論</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        「目で見ている」うちはボールを追いかける<strong>「作業」</strong>ですが、「重力を感じている」状態はボールと身体が物理法則の中で一体化する<strong>「現象」</strong>です。
      </p>
    </section>
  </div>
)
