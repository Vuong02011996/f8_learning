import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  routes: [
    { path: '/index', component: '@/pages/index' },
  ],
  
});
