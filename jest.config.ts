import { InitialOptionsTsJest } from 'ts-jest';

const config: InitialOptionsTsJest = {
    testEnvironment: 'jsdom',
    verbose: false,
    preset: 'ts-jest',
    setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
    coverageReporters: ['json-summary', 'text', 'lcov'],
    collectCoverageFrom: ['src/**', '!**/*.d.ts, !**/*.stories.{tsx | mdx}'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    roots: ['<rootDir>/src/'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|scss|css)$':
            '<rootDir>/jest/fileMock.ts',
    },
    globals: {
        'ts-jest': {
            useESM: true,
            babelConfig: {
                plugins: ['babel-plugin-transform-vite-meta-env'],
                presets: ['@babel/preset-env'],
            },
        },
    },
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
};

export default config;
