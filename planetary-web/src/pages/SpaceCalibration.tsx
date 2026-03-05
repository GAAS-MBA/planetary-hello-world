import { type Component } from 'solid-js'
import { A } from '@solidjs/router'
import { copy } from '../lib/copy'

/**
 * Space Calibration — Reference frames, CMB, ICRF, JPL ephemerides, Thurston, Perelman
 * Models of possible universe shapes, Axiom-based multiverse possibilities
 */
export const SpaceCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Space Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.spaceDesc}</p>
    </div>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Models of possible universe shapes (宇宙のとりうる形状のモデル予測)</h2>
      <p class="mt-1 text-xs text-stone-500">
        Cosmological and topological models. FLRW for global geometry; Thurston for 3-manifold structure.
      </p>
      <div class="mt-3 space-y-2">
        <div class="rounded-lg border border-stone-100 p-3">
          <p class="text-xs font-medium text-stone-600">FLRW geometry (cosmology)</p>
          <p class="mt-1 text-xs text-stone-600">
            Flat (Ω=1), Closed (Ω&gt;1), Open (Ω&lt;1). CMB (Planck) suggests flat to ~0.2% precision. Choice constrains theoretical max extent.
          </p>
          <A href="/calibration/universe-geometry" class="mt-2 inline-block text-xs font-mono text-amber-600 hover:underline">→ Universe geometry</A>
        </div>
        <div class="rounded-lg border border-stone-100 p-3">
          <p class="text-xs font-medium text-stone-600">Thurston's eight geometries</p>
          <p class="mt-1 text-xs text-stone-600">
            S³, E³, H³, S²×ℝ, H²×ℝ, SL(2,ℝ)̃, Nil, Sol. Every closed 3-manifold decomposes into pieces admitting one of these. Predicts possible spatial topologies.
          </p>
        </div>
        <div class="rounded-lg border border-stone-100 p-3">
          <p class="text-xs font-medium text-stone-600">Perelman proof</p>
          <p class="mt-1 text-xs text-stone-600">
            Ricci flow with surgery. Geometrization conjecture proved. Implies Poincaré. Rigorous classification of 3-manifold shapes.
          </p>
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Axiom-based multiverse possibilities (Axiomによる多次元宇宙の複数可能性)</h2>
      <p class="mt-1 text-xs text-stone-500">
        Axiomatic systems permit multiple consistent universes. Groundism, Ontopologics.
      </p>
      <div class="mt-3 space-y-2">
        <div class="rounded-lg border border-amber-50 bg-amber-50/30 p-3">
          <p class="text-xs font-medium text-stone-600">Axiom as choice</p>
          <p class="mt-1 text-xs text-stone-600">
            Each axiomatic system defines a possible universe. ZFC, NF, category-theoretic foundations—each yields a distinct mathematical universe. Spirit glides through multi-dimensional space by axioms.
          </p>
          <A href="/axiom" class="mt-2 inline-block text-xs font-mono text-amber-600 hover:underline">→ Axiom</A>
        </div>
        <div class="rounded-lg border border-amber-50 bg-amber-50/30 p-3">
          <p class="text-xs font-medium text-stone-600">ZFC boundary (x&gt;0 / x&lt;0)</p>
          <p class="mt-1 text-xs text-stone-600">
            Inside ZFC (x&gt;0) vs outside ZFC (x&lt;0). Mathematical axioms prove the boundary but cannot verify x=0 (consistent with both). Multiple universes correspond to different boundary conditions.
          </p>
        </div>
        <div class="rounded-lg border border-amber-50 bg-amber-50/30 p-3">
          <p class="text-xs font-medium text-stone-600">Event Horizon (Spirit | Axiomaticity | Body)</p>
          <p class="mt-1 text-xs text-stone-600">
            Axiomaticity as boundary between Spirit (multi-dimensional axiomatic space) and Body (Planetary constraints). Multiverse as causally disconnected axiomatic regions.
          </p>
          <A href="/axiomaticity" class="mt-2 inline-block text-xs font-mono text-amber-600 hover:underline">→ Axiomaticity</A>
        </div>
        <div class="rounded-lg border border-amber-50 bg-amber-50/30 p-3">
          <p class="text-xs font-medium text-stone-600">MatterVerse</p>
          <p class="mt-1 text-xs text-stone-600">
            Premise axioms, location, time for an Entity gliding through all possible space landing on this Planet under ZFC boundary conditions. One realization among many.
          </p>
          <A href="/architect" class="mt-2 inline-block text-xs font-mono text-amber-600 hover:underline">→ Architect</A>
        </div>
      </div>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Reference frames for Earth position</h2>
      <p class="mt-1 text-xs text-stone-500">
        Theories and systems NASA and international agencies use to determine Earth's position in space.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Cosmic Microwave Background (CMB)</h2>
      <p class="mt-2 text-sm text-stone-600">
        The CMB provides a nearly isotropic reference frame (deviations ~1 part in 10⁵). Earth's velocity relative to the CMB is measured via dipole anisotropy—photons from the direction of motion are blueshifted, opposite direction redshifted (~6.7 mK temperature difference). COBE, WMAP, Planck. NASA LAMBDA.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">International Celestial Reference Frame (ICRF)</h2>
      <p class="mt-2 text-sm text-stone-600">
        Celestial coordinate system defined by positions of extragalactic radio sources (quasars) via Very Long Baseline Interferometry (VLBI). IAU-adopted. ICRF3 (2019): 4,588 sources, 303 defining sources; median uncertainty ~0.1–0.2 mas. NASA CDDIS archives VLBI data.
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">JPL Planetary Ephemerides (DE440/DE441)</h2>
      <p class="mt-2 text-sm text-stone-600">
        JPL ephemerides use ICRF for positions. Time: Barycentric Dynamical Time (TDB). Cartesian (x,y,z) in AU. Chebyshev polynomials fitted to positions/velocities. DE440: 1550–2650; DE441: −13,200 to +17,191. Includes Lense-Thirring effects. JPL Horizons.
      </p>
    </section>

  </div>
)
