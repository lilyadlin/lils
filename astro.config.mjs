import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 从环境变量获取站点 URL，如果没有设置则使用默认值
// 注意：首次部署后请务必在 .env 文件中设置正确的 PUBLIC_SITE_URL
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://portfolio.ricoui.com/';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: '/',
  envPrefix: 'PUBLIC_',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  },

  legacy: {
    collections: true,
  },

  server: {
    port: 5200,
  },

  integrations: [mdx(), sitemap()],
});