import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
import Favorites from "./views/Favorites.vue";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/navbar", name: "navbar", component: NavBar },

  {
    path: "/favorites",
    component: Favorites,
  },
  { path: "/:path(.*)", component: NotFound },
];
