import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true, // generate .d.ts files
  sourcemap: true,
  clean: true,
  external: ['react'],
});
