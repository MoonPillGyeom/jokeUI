import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFiles: ['jest-canvas-mock'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/src/tests/styleMock.ts',
  },
  collectCoverage: true,
};

export default config;
