import Favorites from "./components/Favorites.vue";
import CreateRecipe from "./components/CreateRecipe.vue";
import SearchRecipe from "./components/SearchRecipe.vue";
import Login from "./components/Login.vue";
export const routes = [
  { path: "/", name: "searchRecipe", component: SearchRecipe },
  {
    path: "/create-recipe",
    name: "createRecipe",
    component: CreateRecipe,
  },
  { path: "/login", name: "login", component: Login },

  {
    path: "/favorites",
    component: Favorites,
  },

  // { path: "/:path(.*)", component: NotFound },
];
