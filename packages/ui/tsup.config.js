import { defineConfig } from 'tsup';
import pkg from './package.json';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  target: 'es6',
  format: ['esm'],
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: !options.watch,
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
}));
