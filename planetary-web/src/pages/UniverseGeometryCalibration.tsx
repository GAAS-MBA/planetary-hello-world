import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'

/**
 * Universe Geometry Calibration — Models for the global geometry of the universe.
 * Sub-page under Universe geometry (宇宙の形状), Level 13.
 */

const GEOMETRY_MODELS = [
  {
    id: 'flat',
    name: 'Flat (平坦)',
    symbol: 'Ω = 1, Ω_k = 0',
    curvature: 'Zero curvature',
    logic: 'Euclidean space. Parallel lines never meet. Sum of angles in triangle = 180°. Inflation predicts flatness. Planck: |Ω_k| < 0.001.',
    extent: 'Unbounded (possibly infinite)',
    source: 'Planck 2018, ΛCDM, inflation',
  },
  {
    id: 'closed',
    name: 'Closed (閉じた宇宙)',
    symbol: 'Ω > 1, Ω_k < 0',
    curvature: 'Positive curvature',
    logic: 'Spherical (S³-like). Parallel lines converge. Sum of angles > 180°. Finite volume, no boundary. Like a 3-sphere.',
    extent: 'Finite',
    source: 'FLRW, classical cosmology',
  },
  {
    id: 'open',
    name: 'Open (開いた宇宙)',
    symbol: 'Ω < 1, Ω_k > 0',
    curvature: 'Negative curvature',
    logic: 'Hyperbolic (H³-like). Parallel lines diverge. Sum of angles < 180°. Infinite volume. Saddle-shaped.',
    extent: 'Infinite',
    source: 'FLRW, classical cosmology',
  },
  {
    id: 'inflation-flatness',
    name: 'Inflation flatness problem',
    symbol: 'Ω → 1',
    curvature: 'Driven to flat',
    logic: 'Inflation dilutes curvature. |Ω − 1| shrinks exponentially. Explains why universe appears flat today regardless of initial Ω.',
    extent: '—',
    source: 'Guth 1981, inflation theory',
  },
  {
    id: 'cmb-constraint',
    name: 'CMB curvature constraint',
    symbol: '|Ω_k| < 0.001',
    curvature: 'Nearly flat',
    logic: 'Planck CMB power spectrum. Acoustic peaks constrain spatial curvature. Universe consistent with flat to ~0.1% precision.',
    extent: '—',
    source: 'Planck 2018, ESA',
  },
] as const

export const UniverseGeometryCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Universe geometry (宇宙の形状)</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.universeGeometryDesc}</p>
      <p class="mt-1 text-xs text-stone-400">
        Hierarchy: Universe geometry (L13) → Theoretical max (L12) → Observable (L11). Geometry constrains extent.
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Geometry models (形状モデル)</h2>
      <p class="mt-1 text-xs text-stone-500">
        FLRW metric. Ω = Ω_m + Ω_Λ + Ω_k. Ω_k = −K/(aH)². K = curvature sign.
      </p>
      <div class="mt-3 space-y-3">
        {GEOMETRY_MODELS.map((m) => (
          <div class="rounded-lg border border-stone-100 p-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono font-medium text-amber-600">{m.name}</span>
              <span class="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700 font-mono">{m.symbol}</span>
            </div>
            <p class="mt-1 text-xs font-medium text-stone-600">Curvature: {m.curvature}</p>
            {m.extent !== '—' && <p class="mt-0.5 text-xs text-stone-600">Extent: {m.extent}</p>}
            <p class="mt-1 text-xs text-stone-600">{m.logic}</p>
            <p class="mt-1 text-[10px] text-stone-500">Source: {m.source}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Key parameters</h2>
      <div class="mt-2 space-y-1 text-xs text-stone-600">
        <p><span class="font-mono text-amber-600">Ω_m</span> ≈ 0.31 (matter). <span class="font-mono text-amber-600">Ω_Λ</span> ≈ 0.69 (dark energy).</p>
        <p><span class="font-mono text-amber-600">Ω_k</span> = 1 − Ω_m − Ω_Λ. |Ω_k| &lt; 0.001 (Planck).</p>
        <p><span class="font-mono text-amber-600">Curvature radius</span> |R_c| = c/(H₀√|Ω_k|). If flat, R_c → ∞.</p>
        <p><span class="font-mono text-amber-600">FLRW</span> = Friedmann–Lemaître–Robertson–Walker.</p>
      </div>
    </section>

    <div class="flex flex-wrap gap-3 text-xs text-stone-500">
      <A href="/calibration/theoretical-max-extent" class="font-mono text-amber-600 hover:underline">
        → Theoretical max extent (L12)
      </A>
      <A href="/calibration/cosmo" class="font-mono text-amber-600 hover:underline">
        ← Cosmo Calibration (full hierarchy)
      </A>
    </div>
  </div>
)
