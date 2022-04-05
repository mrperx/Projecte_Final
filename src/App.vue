<template>
  <NavBar />
  <div class="container mx-auto p-4">
    <h1 class="mb-4 text-center">
      App Recipe
      <!-- <font-awesome-icon icon="fa-solid fa-seedling" />e -->
    </h1>
    <RouterView />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
