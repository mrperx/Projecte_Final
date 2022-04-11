import { defineStore } from "pinia";
import { storeData, getData } from "./firebase";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useFavorites = defineStore("favorites", {
  state: () => ({
    favoriteRecipes: [],
  }),

  actions: {
    add(recipe) {
      recipe.totalNutrients = null;
      this.favoriteRecipes.push(recipe);
      storeData("favorites", this.favoriteRecipes);
    },
    delete(recipe) {
      this.favoriteRecipes = this.favoriteRecipes.filter(
        (favRecipe) => favRecipe.url !== recipe.url

        //this.items.splice(recipe, 1);
      );
      storeData("favorites", this.favoriteRecipes);
    },
    async get() {
      // obtener de Firebase
      this.favoriteRecipes = (await getData("favorites")) || [];
    },
  },
});
