<template>
  <h2 class="font-bold shadow text-center text-2xl text-gray-600">
    Favorite recipes
  </h2>

  <div class="p-2 grid grid-cols-1 md:grid-cols-4 gap-3 mt-7 mx-auto">
    <div v-for="recipe in recipes" :key="recipe">
      <div class="bg-[#c8e8b0] rounded-md p-2">
        <img :src="recipe.image" class="h-52 w-52 rounded-t-lg" />

        <p class="font-bold text-lg p-2">{{ recipe.label }}</p>
        <div class="p-2">
          <h3 class="font-bold text-lg">Ingredients:</h3>
          <p v-for="i in recipe.ingredientLines" :key="i">
            {{ i }}
          </p>
        </div>
        <div class="p-2">
          <h4 class="font-bold text-base">Nutritional information:</h4>
          <p>{{ Math.round(recipe.calories) }} kcal</p>
        </div>
        <a
          target="_ blank"
          class="shadow-sm px-3 py-2 bg-[#70e6da] rounded-lg m-2"
          v-bind:href="recipe.url"
          >Read more
        </a>

        <button
          @click="removeElement(recipe)"
          class="px-3 py-2 text-xl text-red-700"
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavorites } from "../stores/favorites";

export default {
  setup() {
    const favoritesStore = useFavorites();

    return { favoritesStore };
  },

  computed: {
    recipes() {
      return this.favoritesStore.favoriteRecipes;
    },
  },
  methods: {
    addToFavorites(recipe) {
      this.favoritesStore.add(recipe);
    },

    async removeElement(recipe) {
      //fer un filter
      this.favoritesStore.delete(recipe);
    },
  },
};
</script>
