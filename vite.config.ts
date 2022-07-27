import { fileURLToPath, URL } from 'node:url'
import type { UserConfig } from "vite";
import type { RouteRecord } from "vue-router";
import vue from '@vitejs/plugin-vue'

interface MyUserConfig extends UserConfig {
  ssgOptions?: {
    includedRoutes: (path: any, routes: RouteRecord[]) => string[];
  };
}

function defineConfig(config: MyUserConfig | Promise<MyUserConfig>){
  return config
}

const foodId = [1, 2, 3, 4, 5, 6];

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: "",
  build: {
    outDir: "docs"
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
