<template>
  <div>
    <div v-if="loading">
      <img class="rounded-full h-24 w-24" src="/load.gif" />
    </div>
    <div v-if="error" class="text-red-600">
      {{ error }}
    </div>
    <div class="container grid grid-cols-4 gap-3">
      <input
        type="text"
        v-model="buscar"
        @keyup.enter="sendApiRequest"
        class="border rounded-md w-full col-start-2 col-span-2"
      />
      <button
        class="rounded border text-sm bg-lime-500 py-2 px-3 w-20"
        @click="sendApiRequest()"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
  <div class="p-2 grid grid-cols-1 md:grid-cols-4 gap-3 mt-7">
    <div v-for="ingredient in data?.hits" :key="ingredient">
      <div class="bg-[#c8e8b0] rounded-md p-2">
        <a>
          <img :src="ingredient.recipe.image" class="h-52 w-52 rounded-t-lg" />
        </a>
        <p class="font-bold text-lg p-2">{{ ingredient.recipe.label }}</p>
        <div class="p-2">
          <h3 class="font-bold text-lg">Ingredients:</h3>
          <p v-for="i in ingredient.recipe.ingredientLines" :key="i">
            {{ i }}
          </p>
        </div>
        <div class="p-2">
          <h4 class="font-bold text-base">Nutritional information:</h4>
          <p>{{ Math.round(ingredient.recipe.calories) }} kcal</p>
        </div>
        <a
          target="_ blank"
          class="shadow-sm px-3 py-2 bg-[#70e6da] rounded-lg m-2"
          v-bind:href="ingredient.recipe.url"
          >Read more
        </a>

        <button
          class="border justify-end shadow-sm px-3 py-2 bg-lime-200 rounded-lg m-2"
          @click="addToFavorites(ingredient.recipe)"
        >
          Add Favorites
        </button>
        <div v-if="addToFvorites">Save recipe!</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useFavorites } from "../stores/favorites";

export default {
  setup() {
    const favoritesStore = useFavorites();

    return { favoritesStore };
  },
  data() {
    return {
      data: null,
      loading: false,
      error: null,
      buscar: "",
    };
  },
  methods: {
    addToFavorites(recipe) {
      this.favoritesStore.add(recipe);
    },
    async sendApiRequest() {
      this.loading = true;
      const APP_ID = "38ba7739";
      const Api_Key = "8567c4564eecc301097726808737edb6";
      try {
        const { data } = await axios(
          `https://api.edamam.com/search?q=${this.buscar}&app_id=${APP_ID}&app_key=${Api_Key}`
        );
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    url() {
      return this.ingredient.recipe.url;
    },
  },

  mounted() {
    this.sendApiRequest();
  },
};
</script>
