// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./src/assets/main.css'],
  srcDir: 'src/',
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@primevue/nuxt-module', '@element-plus/nuxt'],
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
