import { type Component } from 'solid-js'
import { copy } from '../lib/copy'

/**
 * Space Calibration — Reference frames, CMB, ICRF, JPL ephemerides, Thurston, Perelman
 */
export const SpaceCalibration: Component = () => (
  <div class="space-y-6">
    <div>
      <h1 class="font-mono text-xl font-bold text-amber-600">Space Calibration</h1>
      <p class="mt-1 text-sm text-stone-500">{copy.calibration.spaceDesc}</p>
    </div>

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

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Thurston Geometrization</h2>
      <p class="mt-2 text-sm text-stone-600">
        Every closed 3-manifold admits a canonical decomposition into pieces, each admitting one of eight geometric structures (3-sphere, Euclidean, hyperbolic, etc.). Thurston (1982).
      </p>
    </section>

    <section class="rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
      <h2 class="font-mono text-sm font-medium text-stone-700">Perelman Proof</h2>
      <p class="mt-2 text-sm text-stone-600">
        Grigori Perelman (2002–2003) proved the geometrization conjecture using Ricci flow with surgery. Implies Poincaré conjecture. Declined Fields Medal (2006).
      </p>
    </section>
  </div>
)
