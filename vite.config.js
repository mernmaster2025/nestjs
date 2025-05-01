/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default defineConfig({
    test: {
        include: ["**/ts-vitest/src/mocks.spec.ts"],
        coverage: {
            report: {
                reporter: ["cobertura", "html"]
            },
            include: ["**/ts-vitest/src/mocks.ts"],
        }
    },
});
