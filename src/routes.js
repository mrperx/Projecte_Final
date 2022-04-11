import Favorites from "./components/Favorites.vue";
import CreateRecipe from "./components/CreateRecipe.vue";
import SearchRecipe from "./components/SearchRecipe.vue";
import Login from "./components/Login.vue";
import MyRecipes from "./components/MyRecipes.vue";
import NotFound from "./components/NotFound.vue";
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
    name: "favorites",
    component: Favorites,
  },
  {
    path: "/my-recipes",
    name: "my recipes",
    component: MyRecipes,
  },

  { path: "/:path(.*)", component: NotFound },
];
