<template>
  <div>
    <!-- <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-600">
      {{ error }}
    </div> -->
    <h2>My Recipes</h2>
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
      this.createStore.add(recipe);
    },
  },
};
</script>
