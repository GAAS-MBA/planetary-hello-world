/**
 * Client-side decryption for Journey Map
 * Uses same format as record-update: scrypt + AES-256-GCM
 */
import { scrypt } from 'scrypt-js'

const SCRYPT_N = 16384
const SCRYPT_R = 8
const SCRYPT_P = 1
const KEY_LEN = 32

export interface DecryptedPoint {
  timestamp: string
  location: { lat: number; lon: number; alt?: number } | null
  version?: string
  commitHash?: string
}

export async function decryptEntry(
  encryptedB64: string,
  secret: string
): Promise<DecryptedPoint> {
  const combined = Uint8Array.from(atob(encryptedB64), (c) => c.charCodeAt(0))
  const salt = combined.slice(0, 16)
  const iv = combined.slice(16, 32)
  const authTag = combined.slice(32, 48)
  const encrypted = combined.slice(48)

  const key = await scrypt(
    new TextEncoder().encode(secret),
    salt,
    SCRYPT_N,
    SCRYPT_R,
    SCRYPT_P,
    KEY_LEN
  )

  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    key as BufferSource,
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  )

  const ciphertext = new Uint8Array(encrypted.length + authTag.length)
  ciphertext.set(encrypted)
  ciphertext.set(authTag, encrypted.length)

  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv, tagLength: 128 },
    cryptoKey,
    ciphertext as BufferSource
  )

  return JSON.parse(new TextDecoder().decode(plain)) as DecryptedPoint
}
