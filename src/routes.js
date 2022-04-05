import Home from "./components/Home.vue";

import Favorites from "./components/Favorites.vue";
import CreateRecipe from "./components/CreateRecipe.vue";
import SearchRecipe from "./components/SearchRecipe.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/create-recipe",
    name: "createRecipe",
    component: CreateRecipe,
  },

  { path: "/search-recipe", name: "searchRecipe", component: SearchRecipe },

  {
    path: "/favorites",
    component: Favorites,
  },
  // { path: "/:path(.*)", component: NotFound },
];
