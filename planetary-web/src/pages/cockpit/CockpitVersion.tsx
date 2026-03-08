import { type Component } from 'solid-js'
import { History } from 'lucide-solid'
import { A } from '@solidjs/router'
import journeyData from '../../lib/journey-public.json'
import summariesData from '../../lib/genesis-version-summaries.json'

interface JourneyEntry {
  id: string
  version: string
  timestamp: string
}

const journey = journeyData as { entries: JourneyEntry[] }
const summaries = summariesData as Record<string, string>

function toUtcIso(iso: string): string {
  try {
    const d = new Date(iso)
    return d.toISOString().slice(0, 19) + 'Z'
  } catch {
    return iso
  }
}

const versionEntries = journey.entries.map((e) => ({
  id: e.id,
  utc: toUtcIso(e.timestamp),
  ver: e.version,
  summary: summaries[e.version] ?? `vᵢ${e.version}`,
}))

export const CockpitVersion: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Version</h1>
      <p class="mt-1 text-sm text-stone-500">
        Genesis Trigger update history. UUID, UTC+0, ver, summary.
      </p>
      <p class="mt-2">
        <A href="/cockpit" class="text-xs font-mono text-amber-600 hover:underline">
          ← Cockpit
        </A>
        {' · '}
        <A href="/genesis-trigger" class="text-xs font-mono text-amber-600 hover:underline">
          Genesis Trigger
        </A>
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="flex items-center gap-2 font-mono text-sm font-medium text-stone-700">
        <History size={16} />
        Version History
      </h2>
      <div class="mt-3 overflow-x-auto">
        <table class="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr class="border-b border-stone-200">
              <th class="py-2 font-medium text-stone-600">UUID</th>
              <th class="py-2 font-medium text-stone-600">UTC+0</th>
              <th class="py-2 font-medium text-stone-600">ver</th>
              <th class="py-2 font-medium text-stone-600">summary</th>
            </tr>
          </thead>
          <tbody class="text-stone-600">
            {[...versionEntries].reverse().map((v) => (
              <tr class="border-b border-stone-100">
                <td class="py-2 font-mono text-[10px] text-stone-500 break-all">{v.id}</td>
                <td class="py-2 font-mono text-xs">{v.utc}</td>
                <td class="py-2 font-mono text-amber-600">vᵢ{v.ver}</td>
                <td class="py-2 text-stone-600">{v.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
)
