import { Body, GeoVector, KM_PER_AU } from 'astronomy-engine'

export type CelestialCategory = 'star' | 'planet' | 'dwarfPlanet' | 'satellite'

export interface DistanceRow {
  name: string
  category: CelestialCategory
  distanceKm: number
  distanceAU: number
  hohmannOneWayDays: number | null
  hohmannRoundTripDays: number | null
  hasHohmann: boolean
}

const ORBITAL_RADII_AU: Record<string, number> = {
  Mercury: 0.3871,
  Venus: 0.7233,
  Earth: 1.0,
  Mars: 1.5237,
  Jupiter: 5.2029,
  Saturn: 9.537,
  Uranus: 19.191,
  Neptune: 30.069,
  Pluto: 39.48,
}

const BODY_MAP: Record<string, Body> = {
  Sun: Body.Sun,
  Moon: Body.Moon,
  Mercury: Body.Mercury,
  Venus: Body.Venus,
  Mars: Body.Mars,
  Jupiter: Body.Jupiter,
  Saturn: Body.Saturn,
  Uranus: Body.Uranus,
  Neptune: Body.Neptune,
  Pluto: Body.Pluto,
}

const BODY_CATEGORIES: Record<string, CelestialCategory> = {
  Sun: 'star',
  Moon: 'satellite',
  Mercury: 'planet',
  Venus: 'planet',
  Earth: 'planet',
  Mars: 'planet',
  Jupiter: 'planet',
  Saturn: 'planet',
  Uranus: 'planet',
  Neptune: 'planet',
  Pluto: 'dwarfPlanet',
}

function vecMag(x: number, y: number, z: number): number {
  return Math.sqrt(x * x + y * y + z * z)
}

function hohmannDays(r1AU: number, r2AU: number): number {
  const a = (r1AU + r2AU) / 2
  return 0.5 * Math.pow(a, 1.5) * 365.25
}

export function computeDistances(date: Date): DistanceRow[] {
  const rows: DistanceRow[] = []
  const rEarth = ORBITAL_RADII_AU['Earth']
  const bodyOrder = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']

  for (const name of bodyOrder) {
    const body = BODY_MAP[name]
    if (!body) continue
    const v = GeoVector(body, date, true)
    const distAU = vecMag(v.x, v.y, v.z)
    const distKm = distAU * KM_PER_AU

    let hohmannOne: number | null = null
    let hohmannRound: number | null = null
    const r2 = ORBITAL_RADII_AU[name]
    if (r2 != null && name !== 'Sun' && name !== 'Moon') {
      const oneWay = hohmannDays(rEarth, r2)
      hohmannOne = Math.round(oneWay)
      hohmannRound = Math.round(2 * oneWay)
    }

    rows.push({
      name,
      category: BODY_CATEGORIES[name] ?? 'planet',
      distanceKm: distKm,
      distanceAU: distAU,
      hohmannOneWayDays: hohmannOne,
      hohmannRoundTripDays: hohmannRound,
      hasHohmann: hohmannOne != null,
    })
  }
  return rows
}

export function formatKm(km: number): string {
  if (km >= 1e9) return `${(km / 1e9).toFixed(2)} × 10⁹ km`
  if (km >= 1e6) return `${(km / 1e6).toFixed(2)} × 10⁶ km`
  if (km >= 1e3) return `${(km / 1e3).toFixed(2)} × 10³ km`
  return `${km.toFixed(0)} km`
}
