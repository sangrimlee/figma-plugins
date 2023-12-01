# Figma Plugins

[![Figma Badge](https://img.shields.io/badge/Figma-@sangrimlee-_?logo=figma&logoColor=fff&labelColor=2c2c2c&color=0c8ce9)](https://figma.com/@sangrimlee)
![CI Badge](https://github.com/sangrimlee/figma-plugins/actions/workflows/ci.yml/badge.svg)

![Thumbnail](https://github.com/sangrimlee/figma-plugins/assets/56021431/9e1b73df-0f76-4a00-93a2-04b9b681eeba)

## Plugins

| 이름                                               | 설명                  |                                  링크                                  |
| :------------------------------------------------- | :-------------------- | :--------------------------------------------------------------------: |
| [한글맞춤](./plugins/korean-spell-check/README.md) | 한글 맞춤법 검사      | [Figma ↗](https://www.figma.com/community/plugin/1233034736208451985) |
| [한글입숨](./plugins/korean-ipsum/README.md)       | 한글 예시 텍스트 생성 | [Figma ↗](https://www.figma.com/community/plugin/1218854890608417355) |

## Internal Packages

### Design System

- `@figma-plugins/docs`: Development and testing and documentation for `@figma-plugins/ui` with [Storybook](https://storybook.js.org/).
- `@figma-plugins/ui`: React components for design system with [Stitches](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/).

### Configurations

- `@figma-plugins/eslint-config`: `eslint` configurations. (based on [`@vercel/style-guide`](https://github.com/vercel/style-guide))
- `@figma-plugins/tsconfig`: `typescript` configuration used throughout the monorepo.
- `@figma-plugins/webpack-config`: `webpack` configuration for build figma plugins.

## Skill Stacks

- **Base**: [React](https://react.dev/), [TypeScript](https://typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Storybook](https://storybook.js.org/)
- **Build**: [Webpack](https://webpack.js.org/), [tsup](https://tsup.egoist.dev/)
- **Other**: [pnpm](https://pnpm.io), [turborepo](https://turbo.build)
