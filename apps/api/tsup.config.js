import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['./src/index.ts'],
  target: 'node16',
  clean: true,
  format: ['cjs'],
  minify: !options.watch,
  ...options,
}));
