import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {ViteRsw} from "vite-plugin-rsw";
import path from "path";


const host = process.env.TAURI_DEV_HOST


export default defineConfig(async () => ({
    plugins: [
        react(),
        ViteRsw()
    ],
    resolve: {
        alias: {
            '@':path.resolve(__dirname, './src'), // 关键配置
        },
    },

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
        port: 1420,
        strictPort: true,
        host: host || false,
        hmr: host
            ? {
                protocol: "ws",
                host,
                port: 1421,
            }
            : undefined,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        },
    },

}));
