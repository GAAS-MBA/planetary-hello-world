import { type Component } from 'solid-js'
import { Brain } from 'lucide-solid'

/**
 * Training — 脳の飽き、撤退と放浪
 */
export const TrainingBrainBoredomWandering: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
        <Brain size={24} />
        脳はすぐ飽きる
      </h1>
      <p class="mt-1 text-sm text-stone-500">
        飽きたら反復をやめ、撤退し、放浪する——身体の運動から仕事・ゲームまで、脳のペースに合わせた観。
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">量の目安</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        脳はすぐ飽きる。ランニングはせいぜい1km、5分で十分である。5分だと思ったら3分で飽きることもある。懸垂は５回でも飽きることがある。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">飽きたあとの反復</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        飽きた場合、それ以上の反復は「負け」癖をつけることとなる。脳は想像以上に飽きるのが早い。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">撤退と放浪</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        飽きてしまったときはもうその戦いからは撤退すること、そして新たな「飽きない」ものが見つかるまでは放浪の旅に出るのである。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">あくびが出そうならやめ時</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        仕事でもパチンコでも、あくびが出そうになったらもうやめ時である。
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">引いて、余波で稼ぐ組織へ</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        飽きた戦いからはさっと引いて、余波で稼ぐ組織に権限を委譲し配当を受領する。
      </p>
    </section>

    <section class="rounded-xl border border-amber-200 bg-amber-50/50 p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-amber-800">新たなゲームと、あまりにも早い引き際</h2>
      <p class="mt-2 text-sm leading-relaxed text-stone-700">
        脳が飽きたら新たなゲームを作りに行くしかないのである。そしてその引き際はあまりにも早い。
      </p>
    </section>
  </div>
)
