import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import { expect } from 'chai'
import { getPackageInfo, importModule, isPackageExists, loadPackageJSON, resolveModule } from '../index.mjs'

console.warn('===== ESM =====')

async function run() {
   expect(resolveModule('@nyxb/utils')).to.contain(join('node_modules', '@nyxb', 'utils'))

   expect(isPackageExists('tsup')).to.eq(true)
   expect(isPackageExists('hi')).to.eq(false)
   expect(isPackageExists('dynot')).to.eq(true)

   const info1 = await getPackageInfo('tsup')
   expect(!!info1).to.eq(true)
   expect(info1.name).to.eq('tsup')
   expect(info1.packageJson.name).to.eq('tsup')

   const info2 = await getPackageInfo('hi')
   expect(!!info2).to.eq(false)

   const info3 = await getPackageInfo('dynot')
   expect(!!info3).to.eq(true)
   expect(info3.rootPath).to.contain(join('node_modules', 'dynot'))

   const { slash } = (await importModule('@nyxb/utils'))
   expect(slash('foo\\bar')).to.eq('foo/bar')

   expect(await loadPackageJSON()).to.eql(JSON.parse(await fs.readFile('./package.json'), 'utf-8'))
}

run()
