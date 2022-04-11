<template>
  <NavBar />
  <div>
    <div class="bg-cover bg-[url('/recetas-veganas.jpeg')] opacity-60">
      <div class="container mx-auto p-4">
        <h1 class="mb-4 text-center">
          <div class="justify-center flex">
            <RouterLink to="/">
              <img
                src="/logo.jpeg"
                class="rounded-full h-24 w-24 text-center"
              />
            </RouterLink>
          </div>
        </h1>
      </div>
    </div>
    <div class="mt-4">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { useFavorites } from "./stores/favorites";
export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const favoritesStore = useFavorites();

    return { favoritesStore };
  },
  mounted() {
    this.favoritesStore.get();
  },
};
</script>
