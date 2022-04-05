import Home from "./components/Home.vue";

import Favorites from "./components/Favorites.vue";

export const routes = [
  { path: "/", name: "home", component: Home },

  {
    path: "/favorites",
    component: Favorites,
  },
  // { path: "/:path(.*)", component: NotFound },
];
