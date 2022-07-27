// import { createApp } from 'vue'
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router";
import Hero from "v-hero";
import "./app.css";


// const app = createApp(App)

// app.use(router)
// app.use(Hero)

// app.mount('#app')
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
   routes ,
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
    app.use(Hero);
  }
);
