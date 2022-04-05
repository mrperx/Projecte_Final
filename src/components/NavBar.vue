<template>
  <div class="flex items-center justify-between bg-gray-100 px-4 shadow">
    <RouterLink to="/" class="py-4">Home</RouterLink>

    <RouterLink to="/create-recipe">Create Recipes</RouterLink>

    <div>Search Recipe <input type="text" class="border-2 bg-green-300" /></div>

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
