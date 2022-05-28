import fs, { access, mkdir } from 'fs-extra'
import { genManifest } from '../src/manifest'
import { r, log } from './utils'

export async function writeManifest () {
  await access(r('dist'))
      .catch(() => mkdir(r('dist')))
    await fs.writeJSON(r('dist/manifest.json'), await genManifest(), { spaces: 2 })
  log('PRE', 'write manifest.json')
}

writeManifest()
