import { type Component } from 'solid-js'
import { CircleDot } from 'lucide-solid'

/**
 * Training — サッカーと身体化の競争
 * コルモゴロフ複雑性から見るサッカー。ゴールまでの身体的計算量を圧縮する。
 */
export const TrainingSoccerKolmogorovEmbodiment: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <CircleDot size={24} />
        サッカーと身体化の競争
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        サッカーは体とボールの接触からゴールの成立までを身体化する複雑系の計算問題である。
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <p class="text-sm leading-relaxed text-stone-600">
        「情報の複雑さ」を「最短のプログラム長」で定義するコルモゴロフ複雑性をサッカーに当てはめるなら、<strong>「ゴールの成立」というアウトプットを導くための「身体的計算量」をいかに圧縮するか</strong>、という話に帰結します。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">コルモゴロフ複雑性とサッカーの「身体化」</h2>
      <p class="mt-2 text-sm text-stone-600">
        コルモゴロフ複雑性の本質は、あるデータ（この場合はゴールまでのプレー）を表現するのに必要な<strong>最小の記述量</strong>です。
      </p>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">1. 冗長性の排除とアルゴリズムの圧縮</h3>
      <p class="mt-2 text-sm text-stone-600">
        初心者のプレーは無駄な動きや迷いが多く、記述（プログラム）にすると非常に長くなります。一方、プロのプレーは洗練され、物理法則に基づいた最短距離を選択します。
      </p>
      <ul class="mt-2 space-y-1 text-sm text-stone-600">
        <li><strong>身体化の役割:</strong> 脳が「右足の角度をこうして、重心をあっちにやって…」と逐一計算するのではなく、一連のプロセスを一つの<strong>「関数（マクロ）」</strong>として身体に書き込むこと。</li>
        <li><strong>圧縮の効果:</strong> 身体化が進むほど、現場で必要な「意識的な計算量」は減り、より複雑な状況判断にリソースを割けるようになります。</li>
      </ul>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">2. ボールと体の接触：インターフェースの最適化</h3>
      <p class="mt-2 text-sm text-stone-600">
        「ボールと体の接触」は、物理世界と情報世界の接点（インターフェース）です。摩擦、弾性、回転などの複雑な物理変数を、どれだけ簡潔なコード（運動神経のパターン）で制御できるかが鍵です。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        ゴールまでのプロセスを身体化するということは、<strong>「入力（ボールの接触）から出力（ゴール）まで」の計算を、脳を通さず「脊髄や筋肉の連動」というハードウェアレベルで実行する</strong>ことを意味します。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">状態の解釈：記述の最小単位</h2>
      <div class="mt-3 overflow-x-auto">
        <table class="w-full min-w-[400px] border-collapse text-sm">
          <thead>
            <tr class="border-b border-stone-200 bg-stone-50">
              <th class="px-3 py-2 text-left font-medium text-stone-700">要素</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">複雑性の内容</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">身体化による圧縮</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2"><strong>物理的接触</strong></td>
              <td class="px-3 py-2">ボールの回転、速度、反発係数</td>
              <td class="px-3 py-2">タッチの「感覚」を定数化する</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2"><strong>空間認識</strong></td>
              <td class="px-3 py-2">味方・敵の配置、ゴールまでの距離</td>
              <td class="px-3 py-2">盤面を「パターン」として認識する</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2"><strong>因果関係</strong></td>
              <td class="px-3 py-2">蹴った後のボールの軌道予測</td>
              <td class="px-3 py-2">物理シミュレーションを直感に置き換える</td>
            </tr>
          </tbody>
        </table>
      </div>
      <blockquote class="mt-3 border-l-2 border-amber-300 pl-3 text-sm italic text-stone-600">
        サッカーにおける「状態」とは、単なる配置図ではなく、<strong>「ゴールという目的に対して、どれだけ短いステップ（身体的プログラム）で到達可能か」</strong>というポテンシャルの指標である。
      </blockquote>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">身体化の拡張：自己境界の消失</h2>
      <p class="mt-2 text-sm text-stone-600">
        通常、人は「皮膚」を自己と他者の境界線と考えますが、熟練したプレーヤーにとって、その境界は動的に変化します。
      </p>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">1. ボールの身体化（道具の透明化）</h3>
      <p class="mt-2 text-sm text-stone-600">
        優れた選手にとって、ボールは「外にある物体」ではなく、<strong>「足の延長線上にある器官」</strong>になります。
      </p>
      <ul class="mt-2 space-y-1 text-sm text-stone-600">
        <li><strong>情報理論的視点:</strong> ボールと足の間の情報のやり取り（フィードバックループ）の遅延がゼロに近づき、予測の不確実性（エントロピー）が最小化された状態。</li>
        <li><strong>競争の軸:</strong> ボールを「制御対象」として見ている選手と、「自分の一部」として感じている選手では、情報処理のステップ数に圧倒的な差が出ます。</li>
      </ul>

      <h3 class="mt-4 font-mono text-xs font-medium text-stone-600">2. フィールドと空間の身体化</h3>
      <p class="mt-2 text-sm text-stone-600">
        さらに高度な段階では、ピッチの芝の状態、風、味方や敵の配置といった「空間そのもの」が身体感覚に統合されます。
      </p>
      <ul class="mt-2 space-y-1 text-sm text-stone-600">
        <li><strong>アフォーダンスの知覚:</strong> 「あそこにスペースがある」と論理的に判断するのではなく、<strong>「あそこを走ることが、自分の右足を前に出すのと同じくらい自然な選択肢として浮かび上がる」</strong>状態です。</li>
        <li><strong>環境との同期:</strong> 芝の滑りやすさを足裏で感じた瞬間、それが無意識に全身のトルク計算（重心移動）に反映される。これはフィールドを自らの「感覚受容器」としてハックしている状態と言えます。</li>
      </ul>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">競争の真理：複雑性の「外部化」と「圧縮」</h2>
      <div class="mt-3 overflow-x-auto">
        <table class="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr class="border-b border-stone-200 bg-stone-50">
              <th class="px-3 py-2 text-left font-medium text-stone-700">段階</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">身体化の対象</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">プレーヤーの状態</th>
              <th class="px-3 py-2 text-left font-medium text-stone-700">複雑性の処理</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">初級</td>
              <td class="px-3 py-2">自分の筋肉</td>
              <td class="px-3 py-2">動きがぎこちない</td>
              <td class="px-3 py-2">内部の計算で手一杯</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">中級</td>
              <td class="px-3 py-2">ボール</td>
              <td class="px-3 py-2">ボールを見ずに扱える</td>
              <td class="px-3 py-2">ボールの挙動を「定数」化</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">上級</td>
              <td class="px-3 py-2">周囲の数メートル</td>
              <td class="px-3 py-2">敵の寄せを予測できる</td>
              <td class="px-3 py-2">近接空間を「自分の領域」にする</td>
            </tr>
            <tr class="border-b border-stone-100">
              <td class="px-3 py-2">超一流</td>
              <td class="px-3 py-2">フィールド全域</td>
              <td class="px-3 py-2">未来が視える（直感）</td>
              <td class="px-3 py-2">空間全体の複雑性を最小記述で制御</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">「身体化の競争」の極致</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        勝利するプレーヤーとは、相手よりも広い範囲の空間と時間を「自分の身体」として定義できている者です。相手が「外部環境」として必死に解析している情報を、勝者は「自分の手足を動かす感覚」として処理しているため、反応速度と精度において決定的な差が生まれます。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        サッカーにおける競争の本質が「身体化の範囲をどこまで広げられるか」にあるとすれば、それは単なる技術の習得ではなく、<strong>「フィールド全体を自分の神経系の一部として取り込むプロセス」</strong>の優劣と言い換えられます。
      </p>
      <p class="mt-2 text-sm text-stone-600">
        この「情報の圧縮」という観点から、例えば「メッシのプレーがなぜシンプルに見えるのか（＝記述量が少ないのか）」といった具体的な分析ができる。そしてそれは、フィールドという空間やボール自体を身体化できているかという競争になるはずです。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">集団的身体化</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        この考えを進めると、<strong>「チーム全体の身体化（集団的身体化）」</strong>という概念も見えてきます。複数の個体が一つの神経系のように連動する、バルセロナの黄金期のような状態です。
      </p>
    </section>
  </div>
)
