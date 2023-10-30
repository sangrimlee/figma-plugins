# `@figma-plugins/webpack-config`

Figma Plugin을 빌드하기 위해서 공용으로 사용되는 `webpack` configuration

## Documentation

### Basic Usage

```javascript
// webpack.config.js

const webpackConfig = require('@figma-plugins/webpack-config');

module.export = webpackConfig();
```

### With `Options`

```javascript
// webpack.config.js

const webpackConfig = require('@figma-plugins/webpack-config');

module.export = webpackConfig({
  ui: './src/ui.ts',
  html: './src/ui.html',
  code: './src/code.ts',
  outDir: 'build',
});
```

### `Options`

- `ui`: `ui` code의 entry point. (default: `src/ui/index.tsx`)
- `html`: `ui`에 사용되는 `html` 경로 (default: `src/ui/index.html`)
- `code`: `figma` 내부적으로 사용되는 code의 entry point (default: `src/code/index.ts`)
- `outDir`: 빌드 결과 경로 (**relative path**) (default: `dist`)
- `plugins`: 추가적으로 사용할 `webpack`의 플러그인

## 사용되는 플러그인

- [`tsconfig-paths-webpack-plugin`](https://github.com/dividab/tsconfig-paths-webpack-plugin): `tsconfig`의 `baseUrl` 및 `paths`를 지원하기 위한 플러그인
- [`html-inline-script-webpack-plugin`](https://github.com/icelam/html-inline-script-webpack-plugin): 자바스크립트 번들을 생성하는게 아닌 inline으로 변환하기 위한 플러그인
