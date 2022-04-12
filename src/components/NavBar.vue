<template>
  <div class="flex items-center justify-around m-auto bg-gray-100 px-4 shadow">
    <button class="hover:bg-lime-200 rounded px-2 py-1">
      <RouterLink to="/">Home</RouterLink>
    </button>
    <button class="hover:bg-lime-200 rounded px-2 py-1">
      <RouterLink to="/create-recipe">Create Recipes</RouterLink>
    </button>
    <button class="inline-block hover:bg-lime-200 rounded px-2 py-1">
      <RouterLink to="/favorites">Favorites</RouterLink>
    </button>
    <button class="hover:bg-lime-200 rounded px-2 py-1">
      <RouterLink to="/my-recipes">My recipes</RouterLink>
    </button>
    <!-- <RouterLink to="/login">Log in</RouterLink> -->
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
