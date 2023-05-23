const { join } = require('node:path')
const { expect } = require('chai')
const { getPackageInfo, isPackageExists, resolveModule, importModule, loadPackageJSON } = require('../index.cjs')
const pkgJSON = require('../package.json')

console.warn('===== CJS =====')

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

   const { slash } = (await importModule('@nyxb/utils').then(r => r.default))
   expect(slash('foo\\bar')).to.eq('foo/bar')

   expect(await loadPackageJSON()).to.eql(pkgJSON)
}

run()
