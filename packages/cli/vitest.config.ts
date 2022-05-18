import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['__tests__/**/*-test.ts'],
    globals: true,
    testTimeout: 200_000,
  },
});
