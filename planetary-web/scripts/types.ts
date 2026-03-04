/**
 * Update metadata schema - ISO 8601, ISO 6709, SI units
 * 更新トリガー時の位置・時刻情報（暗号化前の形式）
 */

/** ISO 8601: Date and time (UTC) */
export type TimestampISO8601 = string

/** ISO 6709: Geographic coordinates (decimal degrees) */
export interface LocationISO6709 {
  /** Latitude in decimal degrees [-90, 90] */
  lat: number
  /** Longitude in decimal degrees [-180, 180] */
  lon: number
  /** Altitude in meters (SI unit) - optional */
  alt?: number
}

/** Update metadata - plaintext before encryption */
export interface UpdateMetadataPlain {
  /** Semantic version */
  version: string
  /** Git commit hash */
  commitHash: string
  /** ISO 8601 timestamp (UTC) */
  timestamp: TimestampISO8601
  /** ISO 6709 + SI (alt in m) - null if not provided */
  location: LocationISO6709 | null
}

/** Stored format - version + encrypted blob (plaintext never exposed) */
export interface UpdateMetadataStored {
  version: string
  commitHash: string
  /** AES-256-GCM encrypted JSON of { timestamp, location } */
  encrypted: string
}
