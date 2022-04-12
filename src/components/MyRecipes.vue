<template>
  <div>
    <h2 class="text-2xl text-lime-300 font-bold text-center">My Recipes</h2>
    <div class="p-2 grid grid-cols-1 md:grid-cols-4 gap-3 mt-7 bg-gray-300">
      <div v-for="i in recipe" :key="i">
        <div class="bg-green-300">
          <p>
            <img :src="i.image" class="h-52 w-52 rounded-t-lg" />
          </p>
          <p class="font-bold text-lg p-2">{{ i.title }}</p>
          <div class="p-2">
            <h3 class="font-bold text-lg">Ingredients:</h3>
            <p v-for="i in recipe.ingredients" :key="i">
              {{ i }}
            </p>
          </div>
          <div class="p-2">
            <h4 class="font-bold text-base">Steps</h4>
            <p>{{ recipe.steps }}</p>
          </div>
          <button
            @click="removeElement(recipe)"
            class="px-3 py-2 text-xl text-red-700"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCreate } from "../stores/createRecipe";
export default {
  setup() {
    const createStore = useCreate();

    return { createStore };
  },
  computed: {
    recipesCreate() {
      return this.createStore.createRecipes;
    },
  },
  methods: {
    addToCreate(recipe) {
      this.createStore.addCreate(recipe);
    },
  },
  // async removeElement(recipe) {
  //   //fer un filter
  //   this.favoritesStore.delete(recipe);
  // },
};
</script>
