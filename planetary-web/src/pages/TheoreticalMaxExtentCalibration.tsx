import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'

/**
 * Theoretical Max Extent Calibration — Prediction models for the maximum size of the universe.
 * Sub-page under Universe geometry (宇宙の形状) → Theoretical max extent (理論上の最大宇宙サイズ).
 */

const PREDICTION_MODELS = [
  {
    id: 'flat-lcdm',
    name: 'Flat ΛCDM',
    geometry: 'Flat (Ω_k ≈ 0)',
    extent: 'Unbounded (possibly infinite)',
    logic: 'Standard cosmology. Planck CMB: |Ω_k| < 0.001. Flat geometry implies no curvature constraint on spatial extent.',
    source: 'Planck 2018, ΛCDM',
  },
  {
    id: 'closed',
    name: 'Closed universe',
    geometry: 'Closed (Ω > 1, Ω_k < 0)',
    extent: 'Finite. Lower bound >250× observable radius (~12 Gly)',
    logic: 'Positive curvature. If closed, curvature radius R_c sets minimum size. Current constraints: R_c > 250 × c/H₀ ≈ 3.4 × 10³ Gly.',
    source: 'Planck curvature bounds',
  },
  {
    id: 'open',
    name: 'Open universe',
    geometry: 'Open (Ω < 1, Ω_k > 0)',
    extent: 'Unbounded (infinite)',
    logic: 'Negative curvature. Infinite hyperbolic space. Disfavored by CMB but not ruled out.',
    source: 'Classical FLRW',
  },
  {
    id: 'inflation',
    name: 'Inflationary flatness',
    geometry: 'Flat (inflation-predicted)',
    extent: 'Effectively infinite within horizon',
    logic: 'Inflation drives Ω → 1. Observable patch is a tiny fraction of total. Multiverse / eternal inflation: causally disconnected regions.',
    source: 'Guth, Linde, inflation theory',
  },
  {
    id: 'topology',
    name: 'Compact topology',
    geometry: 'Flat or closed, compact',
    extent: 'Finite (e.g. Poincaré dodecahedron)',
    logic: 'Universe could be finite but multiply connected. Poincaré dodecahedral space: ~60 Gly circumference. CMB constraints weak for large topology.',
    source: 'Luminet, Poincaré dodecahedron',
  },
] as const

export const TheoreticalMaxExtentCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Theoretical max extent (理論上の最大宇宙サイズ)</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.theoreticalMaxExtentDesc}</p>
      <p class="mt-1 text-xs text-stone-400">
        Hierarchy: Universe geometry (L13) → Theoretical max (L12) → Observable (L11). Not directly observable.
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Prediction models (予測モデル)</h2>
      <p class="mt-1 text-xs text-stone-500">
        Shape (geometry) constrains extent. Ω = total density parameter. Ω_k = curvature. CMB = cosmic microwave background.
      </p>
      <div class="mt-3 space-y-3">
        {PREDICTION_MODELS.map((m) => (
          <div class="rounded-lg border border-stone-100 p-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono font-medium text-amber-600">{m.name}</span>
              <span class="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">{m.geometry}</span>
            </div>
            <p class="mt-1 text-xs font-medium text-stone-600">Extent: {m.extent}</p>
            <p class="mt-1 text-xs text-stone-600">{m.logic}</p>
            <p class="mt-1 text-[10px] text-stone-500">Source: {m.source}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Key parameters</h2>
      <div class="mt-2 space-y-1 text-xs text-stone-600">
        <p><span class="font-mono text-amber-600">Ω</span> = Ω_m + Ω_Λ + Ω_k. Total = 1 if flat.</p>
        <p><span class="font-mono text-amber-600">Ω_k</span> &lt; 0.001 (Planck). Universe is nearly flat.</p>
        <p><span class="font-mono text-amber-600">Observable radius</span> ≈ 46.5 Gly. Horizon-limited.</p>
        <p><span class="font-mono text-amber-600">If closed</span>: R_c &gt; 250 × (c/H₀) ≈ 3.4 × 10³ Gly.</p>
      </div>
    </section>

    <div class="flex flex-wrap gap-3 text-xs text-stone-500">
      <A href="/calibration/universe-geometry" class="font-mono text-amber-600 hover:underline">
        ← Universe geometry (L13)
      </A>
      <A href="/calibration/observable-universe" class="font-mono text-amber-600 hover:underline">
        → Observable Universe (L11)
      </A>
      <A href="/calibration/cosmo" class="font-mono text-amber-600 hover:underline">
        ← Cosmo Calibration (full hierarchy)
      </A>
    </div>
  </div>
)
