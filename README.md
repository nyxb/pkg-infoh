[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] [![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

# ℹ️ pkg-infoh

> 📦 Retrieve details of local packages. Works on both CJS and ESM.

## ⬇️ Install:

```bash
# nyxi
nyxi pkg-infoh

# pnpm 
pnpm add pkg-infoh

# npm 
npm i pkg-infoh

# yarn
yarn add pkg-infoh
```

## Usage

```ts
import {
   getPackageInfo,
   importModule,
   isPackageExists,
   resolveModule,
} from 'pkg-infoh'

isPackageExists('pkg-infoh') // true
isPackageExists('foo') // false

await getPackageInfo('pkg-infoh')
/* {
 *   name: "local-pkg",
 *   version: "0.1.0",
 *   rootPath: "/path/to/node_modules/pkg-infoh",
 *   packageJson: {
 *     ...
 *   }
 * }
 */

// similar to `require.resolve` but works also in ESM
resolveModule('pkg-infoh')
// '/path/to/node_modules/local-pkg/dist/index.cjs'

// similar to `await import()` but works also in CJS
const { importModule } = await importModule('pkg-infoh')
```


## 📜 License

[MIT](./LICENSE) - Made with 💞

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/pkg-infoh?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/pkg-infoh
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-infoh?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/pkg-infoh
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-infoh?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=pkg-infoh
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=14F195
[jsdocs-href]: https://www.jsdocs.io/package/pkg-infoh
[license-src]: https://img.shields.io/github/license/nyxb/pkg-infoh.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxb/pkg-infoh/blob/main/LICENSE
