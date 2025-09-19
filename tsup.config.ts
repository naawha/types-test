import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.{ts,tsx}'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  sourcemap: true,
  bundle: false,
  splitting: false,
  clean: true,
  minify: true,
});
