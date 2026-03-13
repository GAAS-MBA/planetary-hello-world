/**
 * Training protocols — each has its own page
 */
export interface TrainingItem {
  slug: string
  title: string
  description: string
  /** Keywords for search (lowercase) */
  keywords: string[]
}

export const TRAINING_ITEMS: TrainingItem[] = [
  {
    slug: '30-minute-punch-protocol',
    title: '30-Minute Punch Protocol',
    description: '90s output + 60s interval × 12 sets. 1000–1500 punches. Human peak benchmark in 30 minutes.',
    keywords: ['punch', 'boxing', 'dumbbell', '30 minute', 'protocol', 'interval', 'workout', 'arm', 'muscle'],
  },
  {
    slug: 'footbag-soccer-ball',
    title: 'Footbag & Soccer Ball',
    description: '視覚の後追いから脳内シミュレーションによる共鳴へ。身体図式の拡張・重力の予測・周辺視とリラックス。',
    keywords: ['footbag', 'soccer', 'ball', 'body schema', 'gravity', 'peripheral vision', '身体図式', '重力', '周辺視', '軌道', '着弾', '脳がサボる', '漫然'],
  },
  {
    slug: 'manifold-axiomaticity-sports',
    title: 'Manifold & Axiomaticity — Sports',
    description: 'Manifold・生成基底・複素空間の粒子計算から quantum/classical dynamics を統合し、axiomaticity でスポーツの動きまで連動。',
    keywords: ['manifold', '生成基底', '複素空間', 'quantum', 'classical', 'dynamics', 'axiomaticity', 'sports', '粒子計算'],
  },
  {
    slug: 'no-look-management',
    title: '経営のノールック・トレーニング',
    description: 'サッカーのボールコントロールと事業経営を同じ「動的システムの制御」として捉える。経営の身体化。',
    keywords: ['経営の身体化', '経営', '事業', '出社', '予測', 'ROIC', 'Operating Leverage', 'ノールック', '動的システム', '重力', '軌道'],
  },
  {
    slug: 'object-space-embodiment',
    title: '対象、空間の身体化',
    description: '対象（物体）と空間を身体化する。身体図式の拡張、感覚のマッピング、脳内シミュレーション。',
    keywords: ['対象', '空間', '身体化', '身体図式', '感覚', 'マッピング', 'embodiment'],
  },
  {
    slug: 'soccer-kolmogorov-embodiment',
    title: 'サッカーと身体化の競争',
    description: 'コルモゴロフ複雑性から見るサッカー。ゴールまでの身体的計算量を圧縮する。身体化の範囲をどこまで広げられるか。',
    keywords: ['サッカー', 'コルモゴロフ', '複雑性', '身体化', 'メッシ', '集団的身体化', 'アフォーダンス'],
  },
]

export const getTrainingBySlug = (slug: string): TrainingItem | undefined =>
  TRAINING_ITEMS.find((t) => t.slug === slug)
