<template>
  <h2>My Recipes</h2>
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
