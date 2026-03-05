import { type Component } from 'solid-js'
import { Mountain } from 'lucide-solid'
import { A } from '@solidjs/router'

/** Tree of life — main branches on Earth (地球上の生物の主な分岐) */
const TREE_OF_LIFE = [
  {
    name: 'Life (生物)',
    nameJa: '生物',
    children: [
      {
        name: 'Bacteria (真正細菌)',
        nameJa: '真正細菌',
        children: [],
      },
      {
        name: 'Archaea (古細菌)',
        nameJa: '古細菌',
        children: [],
      },
      {
        name: 'Eukaryota (真核生物)',
        nameJa: '真核生物',
        children: [
          {
            name: 'Animals (動物)',
            nameJa: '動物',
            children: [
              { name: 'Insects (昆虫)', nameJa: '昆虫', children: [] },
              { name: 'Mammals (哺乳類)', nameJa: '哺乳類', children: [{ name: 'Humans (ヒト)', nameJa: 'ヒト', children: [] }] },
              { name: 'Birds (鳥類)', nameJa: '鳥類', children: [] },
              { name: 'Reptiles (爬虫類)', nameJa: '爬虫類', children: [] },
              { name: 'Amphibians (両生類)', nameJa: '両生類', children: [] },
              { name: 'Fish (魚類)', nameJa: '魚類', children: [] },
              { name: 'Other invertebrates (その他無脊椎動物)', nameJa: 'その他無脊椎動物', children: [] },
            ],
          },
          {
            name: 'Plants (植物)',
            nameJa: '植物',
            children: [
              { name: 'Green algae (緑藻)', nameJa: '緑藻', children: [] },
              { name: 'Land plants (陸上植物)', nameJa: '陸上植物', children: [] },
            ],
          },
          {
            name: 'Fungi (菌類)',
            nameJa: '菌類',
            children: [],
          },
          {
            name: 'Algae (藻類)',
            nameJa: '藻類',
            children: [
              { name: 'Red algae (紅藻)', nameJa: '紅藻', children: [] },
              { name: 'Brown algae (褐藻)', nameJa: '褐藻', children: [] },
              { name: 'Diatoms (珪藻)', nameJa: '珪藻', children: [] },
            ],
          },
          {
            name: 'Protists (原生生物)',
            nameJa: '原生生物',
            children: [],
          },
        ],
      },
    ],
  },
] as const

const TreeNode = (props: {
  node: { name: string; nameJa: string; children: readonly unknown[] }
  depth: number
  isLast: boolean
  prefix: string
}) => {
  const hasChildren = props.node.children.length > 0
  const branch = props.depth === 0 ? '' : props.isLast ? '└─ ' : '├─ '
  const nextPrefix = props.depth === 0 ? '' : props.isLast ? '   ' : '│  '

  return (
    <div class="flex flex-col">
      <div class="flex items-baseline gap-1" style={{ 'padding-left': `${props.depth * 1.5}rem` }}>
        <span class="shrink-0 font-mono text-xs text-stone-400">{props.prefix}{branch}</span>
        <span class="text-sm font-medium text-stone-700">{props.node.name}</span>
      </div>
      {hasChildren &&
        (props.node.children as typeof TREE_OF_LIFE).map((child, i) => (
          <TreeNode
            node={child}
            depth={props.depth + 1}
            isLast={i === props.node.children.length - 1}
            prefix={props.prefix + nextPrefix}
          />
        ))}
    </div>
  )
}

export const LibrarySpeciesLandscape: Component = () => (
    <div class="space-y-6">
      <div>
        <h1 class="flex items-center gap-2 font-mono text-xl font-bold text-amber-600">
          <Mountain size={24} />
          Species Landscape
        </h1>
        <p class="mt-1 text-sm text-stone-500">
          Tree of life. Main evolutionary branches on Earth (地球上の生物の主な分岐).
        </p>
        <p class="mt-2">
          <A href="/library" class="text-xs font-mono text-amber-600 hover:underline">
            ← Library
          </A>
        </p>
      </div>

      <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
        <h2 class="font-mono text-sm font-medium text-stone-700">Tree of life (生物の系統樹)</h2>
        <p class="mt-1 text-xs text-stone-500">
          Simplified. Domain → Kingdom → major groups. Insects, animals, plants, humans, algae.
        </p>
        <div class="mt-4 overflow-x-auto">
          {TREE_OF_LIFE.map((node, i) => (
            <TreeNode
              node={node}
              depth={0}
              isLast={i === TREE_OF_LIFE.length - 1}
              prefix=""
            />
          ))}
        </div>
        <p class="mt-3 text-[10px] text-stone-500">
          Linnaean taxonomy. ISO 17298, ISO 13208. Algae polyphyletic.
        </p>
        <p class="mt-2">
          <A href="/library/species-taxonomy" class="text-xs font-mono text-amber-600 hover:underline">
            → Species Taxonomy
          </A>
          {' · '}
          <A href="/tutorials/specification/classification" class="text-xs font-mono text-amber-600 hover:underline">
            → Classification (Homo sapiens)
          </A>
        </p>
      </section>
    </div>
)
