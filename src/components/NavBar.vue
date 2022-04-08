<template>
  <div class="flex items-center justify-between bg-gray-100 px-4 shadow">
    <button>
      <RouterLink to="/">Home</RouterLink>
    </button>
    <button>
      <RouterLink to="/create-recipe">Create Recipes</RouterLink>
    </button>

    <RouterLink to="/favorites">Favorites</RouterLink>
    <RouterLink to="/login">Log in</RouterLink>
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
