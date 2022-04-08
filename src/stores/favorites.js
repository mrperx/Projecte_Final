import { defineStore } from "pinia";
import { storeData, getData } from "./firebase";
// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useFavorites = defineStore("favorites", {
  state: () => ({
    favoriteRecipes: [],
  }),
  getters: {},
  actions: {
    add(recipe) {
      this.favoriteRecipes.push(recipe);
      // ⁄storeData("favorites", this.favoriteRecipes);
    },
    async get() {
      // obtener de Firebase
      this.favoriteRecipes = await getData("favorites");
    },
  },
});
