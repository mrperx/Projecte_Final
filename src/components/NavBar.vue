<template>
  <div class="flex items-center justify-between bg-gray-100 px-4 shadow">
    <button class="hover:bg-lime-600 rounded p-3">
      <RouterLink to="/" class="py-4">Home</RouterLink>
    </button>
    <button>
      <RouterLink to="/create-recipe">Create Recipes</RouterLink>
    </button>
    <div>
      Search Recipe
      <RouterLink to="/search-recipe">
        <input type="text" class="border-2 bg-green-300"
      /></RouterLink>
    </div>

    <RouterLink to="/favorites">Favorites</RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null,
    };
  },
};
</script>
