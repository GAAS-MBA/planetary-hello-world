/**
 * Planetary Hello World - Version & Axiomatic Identity
 * v1.0.x-commit hash format per Architect specification
 * When x or x+1 changes, both receive UUIDv4
 *
 * Update metadata: 位置・時刻は暗号化され version と共に格納（外部非公開）
 */
import { v4 as uuidv4 } from 'uuid'
import updateMetaJson from './update-metadata.json'

declare const __COMMIT_HASH__: string

/** Update metadata (encrypted location/time stored with version - never exposed) */
export interface UpdateMetadataStored {
  version: string
  commitHash: string
  encrypted: string | null
}

export const updateMetadata: UpdateMetadataStored = updateMetaJson as UpdateMetadataStored
export const COMMIT_HASH = typeof __COMMIT_HASH__ !== 'undefined' ? __COMMIT_HASH__ : 'dev'
export const VERSION = updateMetadata.version
export const VERSION_DISPLAY = `v${VERSION}-${COMMIT_HASH}`

/** Generate UUIDv4 for Axiomatic boundary events (x, x+1 transitions) */
export const generateAxiomaticId = (): string => uuidv4()

/** Whether encrypted location/time was stored (content never exposed) */
export const hasEncryptedUpdateMetadata = (): boolean =>
  updateMetadata.encrypted != null && updateMetadata.encrypted.length > 0
