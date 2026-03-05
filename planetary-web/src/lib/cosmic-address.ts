/** Cosmic address hierarchy (宇宙の住所) — largest to smallest (大きな順) */
export const COSMIC_HIERARCHY = [
  { level: 13, name: 'Universe geometry', nameJa: '宇宙の形状', desc: 'Flat (Ω=1), Closed (Ω>1), Open (Ω<1). CMB (Planck) suggests flat to ~0.2% precision. Choice constrains theoretical max extent.' },
  { level: 12, name: 'Theoretical max extent', nameJa: '理論上の最大宇宙サイズ', desc: 'Shape-dependent. Flat/Open: unbounded (possibly infinite). Closed: finite, lower bound >250× observable radius. Not directly observable.' },
  { level: 11, name: 'Observable Universe', nameJa: '観測可能な宇宙', desc: '~46.5 Gly radius (~93 Gly diameter). Horizon set by cosmic expansion. ~2×10²⁴ stars, ~10¹¹ galaxies.' },
  { level: 10, name: 'Quipu superstructure', nameJa: 'キープ超構造', desc: '2025 report. Major axis >400 Mpc (~1.3 Gly). Mass ~2×10¹⁷ M☉. One of the largest known cosmic structures.' },
  { level: 9, name: 'Shapley Supercluster', nameJa: 'シャプレー超銀河団', desc: 'Major axis ~625 Mly (~191.5 Mpc). Center ~650 Mly. Largest mass concentration in local universe. Laniakea and neighbors may flow toward it.' },
  { level: 8, name: 'Pisces–Cetus Supercluster Complex', nameJa: 'うお座–くじら座超銀河団複合体', desc: 'Major axis ~380 Mpc (~1.24 Gly). Parent structure containing Laniakea as its inner part.' },
  { level: 7, name: 'Laniakea Supercluster', nameJa: 'ラニアケア超銀河団', desc: '~100,000 galaxies, ~400–520 Mly, Hawaiian: immense heaven' },
  { level: 6, name: 'Local Supercluster', nameJa: '局部超銀河団', desc: 'Virgo Supercluster, hundreds of groups' },
  { level: 5, name: 'Virgo Cluster', nameJa: 'おとめ座銀河団', desc: '1,000+ galaxies, center of Local Supercluster' },
  { level: 4, name: 'Local Group', nameJa: '局部銀河群', desc: '50+ galaxies incl. Andromeda, Triangulum' },
  { level: 3, name: 'Milky Way', nameJa: '天の川銀河', desc: 'Spiral galaxy, ~26 kly from center, Orion Arm' },
  { level: 2, name: 'Solar System', nameJa: '太陽系', desc: 'Orbiting the Sun in the Orion Spur' },
  { level: 1, name: 'Earth', nameJa: '地球', desc: 'Location on Earth (street, city, country)' },
]

/** Massive objects for location tracking — central/primary objects of cosmic address levels (大きな順) */
export const MASSIVE_OBJECTS = [
  { name: 'Shapley Concentration', level: 9, hierarchyName: 'Shapley Supercluster', desc: 'Largest mass concentration in local universe', role: 'Level 9 center' },
  { name: 'Great Attractor', level: 7, hierarchyName: 'Laniakea Supercluster', desc: '~10¹⁶ M☉, Laniakea gravitational center, Hydra-Centaurus, Zone of Avoidance', role: 'Level 7 center' },
  { name: 'Virgo Cluster', level: 6, hierarchyName: 'Local Supercluster', desc: '~1,000 galaxies, ~10¹⁵ M☉', role: 'Level 6 center' },
  { name: 'Andromeda (M31)', level: 4, hierarchyName: 'Local Group', desc: '~2.5×10¹² M☉, major member with Milky Way, approaching', role: 'Level 4 primary' },
  { name: 'Sagittarius A*', level: 3, hierarchyName: 'Milky Way', desc: 'SMBH at galactic center, ~4.3×10⁶ M☉', role: 'Level 3 center' },
]
