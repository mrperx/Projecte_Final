import { defineStore } from "pinia";
import { storeData, getData } from "./firebase";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useCreate = defineStore("create", {
  state: () => ({
    createRecipes: [],
  }),

  actions: {
    addCreate(recipe) {
      recipe.totalNutrients = null;
      this.createRecipes.push(recipe);
      storeData("create", this.createRecipes);
    },
    // delete(recipe) {
    //   this.createRecipes = this.createRecipes.filter(
    //     (favRecipe) => favRecipe.url !== recipe.url

    //     //this.items.splice(recipe, 1);
    //   );
    //   storeData("favorites", this.favoriteRecipes);
    // },
    async get() {
      // obtener de Firebase
      this.createRecipes = (await getData("create")) || [];
    },
  },
});
