import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: './src/app.ts',
        },
        outDir: './dist',
    },
    base: '/ts-todo/',
});