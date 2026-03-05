import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'

/**
 * Observable Universe Calibration — Models for the size and content of the observable universe.
 * Sub-page under Observable Universe (観測可能な宇宙), Level 11.
 */

const OBSERVABLE_MODELS = [
  {
    id: 'particle-horizon',
    name: 'Particle horizon (粒子地平線)',
    radius: '~46.5 Gly',
    diameter: '~93 Gly',
    logic: 'Comoving distance to the furthest observable point. Light emitted at recombination (z≈1100) has traveled ~13.8 Gyr. Proper distance today.',
    source: 'Planck 2018, ΛCDM',
  },
  {
    id: 'hubble-radius',
    name: 'Hubble radius (ハッブル半径)',
    radius: 'c/H₀ ≈ 14.4 Gly',
    diameter: '~28.8 Gly',
    logic: 'Distance at which recession velocity = c. Objects beyond recede faster than c. Not a physical barrier; comoving objects can cross.',
    source: 'H₀ ≈ 67.4 km/s/Mpc (Planck)',
  },
  {
    id: 'cmb-surface',
    name: 'CMB surface of last scattering',
    radius: '~45.5 Gly (comoving)',
    diameter: '~91 Gly',
    logic: 'Redshift z≈1100. When photons decoupled (~380 kyr after Big Bang). CMB we see today is from a spherical shell at this distance.',
    source: 'Planck, recombination epoch',
  },
  {
    id: 'planck-2018',
    name: 'Planck 2018 ΛCDM',
    radius: '46.2–46.9 Gly',
    diameter: '92.4–93.8 Gly',
    logic: 'H₀ = 67.36 ± 0.54 km/s/Mpc. Age 13.787 Gyr. Comoving particle horizon depends on Ω_m, Ω_Λ, Ω_k.',
    source: 'ESA Planck 2018',
  },
  {
    id: 'hubble-tension',
    name: 'Hubble tension (H₀ discrepancy)',
    radius: 'Model-dependent',
    diameter: '—',
    logic: 'Local (Cepheids, SN Ia): H₀ ≈ 73 km/s/Mpc. CMB (Planck): H₀ ≈ 67 km/s/Mpc. ~5σ tension. Affects age and horizon estimates.',
    source: 'Riess, Planck, SH0ES',
  },
  {
    id: 'content',
    name: 'Content estimates',
    radius: '—',
    diameter: '—',
    logic: '~2×10²⁴ stars. ~10¹¹–2×10¹² galaxies. ~10⁸⁰ atoms. Observable mass ~10⁵³ kg. Mostly dark matter and dark energy.',
    source: 'Galaxy surveys, CMB',
  },
] as const

export const ObservableUniverseCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Observable Universe (観測可能な宇宙)</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.observableUniverseDesc}</p>
      <p class="mt-1 text-xs text-stone-400">
        Hierarchy: Universe geometry (L13) → Theoretical max (L12) → Observable (L11). Horizon-limited.
      </p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Size models (サイズモデル)</h2>
      <p class="mt-1 text-xs text-stone-500">
        Different definitions of "observable" yield different radii. Comoving vs proper distance. Gly = billion light-years.
      </p>
      <div class="mt-3 space-y-3">
        {OBSERVABLE_MODELS.map((m) => (
          <div class="rounded-lg border border-stone-100 p-3">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono font-medium text-amber-600">{m.name}</span>
              {m.radius !== '—' && (
                <span class="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-700">
                  radius {m.radius}
                  {m.diameter !== '—' && ` · diam ${m.diameter}`}
                </span>
              )}
            </div>
            <p class="mt-1 text-xs text-stone-600">{m.logic}</p>
            <p class="mt-1 text-[10px] text-stone-500">Source: {m.source}</p>
          </div>
        ))}
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Key parameters</h2>
      <div class="mt-2 space-y-1 text-xs text-stone-600">
        <p><span class="font-mono text-amber-600">1 Gly</span> ≈ 0.306 Gpc ≈ 9.46 × 10²⁴ m.</p>
        <p><span class="font-mono text-amber-600">Particle horizon</span> = comoving distance light could travel since t=0.</p>
        <p><span class="font-mono text-amber-600">Event horizon</span> = comoving distance beyond which light will never reach us (de Sitter).</p>
        <p><span class="font-mono text-amber-600">Observable</span> = within particle horizon. Isotropic, homogeneous at large scales.</p>
      </div>
    </section>

    <div class="flex flex-wrap gap-3 text-xs text-stone-500">
      <A href="/calibration/theoretical-max-extent" class="font-mono text-amber-600 hover:underline">
        ← Theoretical max extent (L12)
      </A>
      <A href="/calibration/cosmo" class="font-mono text-amber-600 hover:underline">
        ← Cosmo Calibration (full hierarchy)
      </A>
    </div>
  </div>
)
