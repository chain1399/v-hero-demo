import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from "vite";
import type { RouteRecord } from "vue-router";

interface MyUserConfig extends UserConfig {
  ssgOptions?: {
    includedRoutes: (path: any, routes: RouteRecord[]) => string[];
  };
}

declare function defineConfig(config: MyUserConfig | Promise<MyUserConfig>): MyUserConfig

const foodId = [1, 2, 3, 4, 5, 6];

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    includedRoutes(path: any, routes: RouteRecord[]) {
      const incRoutes = routes.flatMap((route) => {
        return route.path.includes("food")
          ? foodId.map((id) => `/food/food${id}`)
          : route.path;
      });
      return incRoutes;
    },
  },
})
