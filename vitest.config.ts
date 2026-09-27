import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    // e2e/ holds Playwright specs, which run against a built site instead
    include: ['src/**/*.test.ts'],
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      reporter: ['text', 'html', 'json-summary'],
      thresholds: {
        lines: 98,
        statements: 98,
        functions: 98,
        branches: 98,
      },
    },
  },
});
