<template>
  <h2>Favorites</h2>

  <div class="p-2 grid grid-cols-1 md:grid-cols-3 gap-3 mt-7 bg-gray-300">
    <div v-for="ingredient in data?.hits" :key="ingredient">
      <div class="bg-green-300">
        <p>
          <img :src="ingredient.recipe.image" class="h-52 w-52 rounded-t-lg" />
        </p>
        <p class="font-bold text-lg p-2">{{ ingredient.recipe.label }}</p>
        <div class="p-2">
          <h3 class="font-bold text-lg">Ingredients:</h3>
          <p v-for="i in ingredient.recipe.ingredientLines" :key="i">
            {{ i }}
          </p>
        </div>
        <div class="p-2">
          <h4 class="font-bold text-base">Nutritional information:</h4>
          <p>{{ ingredient.recipe.calories }} kcal</p>
        </div>

        <button
          class="border justify-end shadow-sm px-3 py-2 bg-lime-200 rounded-lg m-2"
          @click="addToFacorites(recipe)"
        >
          Add Favorites
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
};
</script>
