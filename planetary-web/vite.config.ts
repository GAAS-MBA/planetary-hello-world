import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

const commitHash = (() => {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: rootDir }).toString().trim()
  } catch {
    return 'dev'
  }
})()

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
})
