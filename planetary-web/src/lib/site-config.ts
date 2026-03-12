import { TRAINING_ITEMS } from './training-config'

/**
 * Site configuration for SEO, sitemap, canonical URLs
 */
export const SITE_URL = 'https://phw.tanaakk.com'

const TRAINING_ROUTES = TRAINING_ITEMS.map((t) => ({
  path: `/training/${t.slug}`,
  title: t.title,
}))

export const ROUTES: { path: string; title: string }[] = [
  { path: '/', title: 'Planetary Hello World' },
  { path: '/architect', title: 'Architect' },
  { path: '/axiom', title: 'Axiom' },
  { path: '/axiomaticity', title: 'Axiomaticity' },
  { path: '/axiomatic-system', title: 'Axiomatic System' },
  { path: '/calibration/space', title: 'Space Calibration' },
  { path: '/calibration/cosmo', title: 'Cosmo Calibration' },
  { path: '/calibration/universe-geometry', title: 'Universe geometry' },
  { path: '/calibration/theoretical-max-extent', title: 'Theoretical max extent' },
  { path: '/calibration/observable-universe', title: 'Observable Universe' },
  { path: '/calibration/solar', title: 'Solar Calibration' },
  { path: '/calibration/planet', title: 'Planet Calibration' },
  { path: '/calibration/civil', title: 'Civil Calibration' },
  { path: '/calibration/human-spec', title: 'Human Spec' },
  { path: '/calibration/orbit', title: 'Time/Orbit Calibration' },
  { path: '/calibration/cosmic-event', title: 'Cosmic Event' },
  { path: '/journey', title: 'Journey' },
  { path: '/genesis-trigger', title: 'Genesis Trigger' },
  { path: '/tutorials/specification', title: 'Specification' },
  { path: '/tutorials/specification/classification', title: 'Classification' },
  { path: '/tutorials/startup-sequence', title: 'Startup Sequence' },
  { path: '/training', title: 'Training' },
  ...TRAINING_ROUTES,
  { path: '/tutorials/error-handling', title: 'Error Handling' },
  { path: '/events/schedule', title: 'Events Schedule' },
  { path: '/events/schedule-archive', title: 'Schedule Archive' },
  { path: '/calibrators', title: 'Calibrators' },
  { path: '/cockpit', title: 'Cockpit' },
  { path: '/cockpit/indicator-environmental', title: 'Indicator — Environmental' },
  { path: '/cockpit/indicator-civil', title: 'Indicator — Civil' },
  { path: '/cockpit/controlling-model', title: 'Controlling Model' },
  { path: '/cockpit/version', title: 'Version' },
  { path: '/library', title: 'Library' },
  { path: '/library/elements', title: 'Elements' },
  { path: '/library/dynamics', title: 'Dynamics' },
  { path: '/library/scale', title: 'Scale' },
  { path: '/library/si', title: 'SI Units' },
  { path: '/library/species-landscape', title: 'Species Landscape' },
  { path: '/library/species-taxonomy', title: 'Species Taxonomy' },
]
