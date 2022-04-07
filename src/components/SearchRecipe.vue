<template>
  <div>
    <div class="container">
      <input
        type="text"
        v-model="buscar"
        @keyup.enter="sendApiRequest"
        class="border w-full"
      />
      <button @click="sendApiRequest()">Search</button>
    </div>
  </div>
  <div v-for="ingredient in data?.hits" :key="ingredient">
    <div class="p-2 grid grid-cols-3 bg-gray-300">
      <div class="bg-green-300">
        <p>
          <img :src="ingredient.recipe.image" class="h-52 w-52 rounded-t-lg" />
        </p>
        <p v-for="i in ingredient.recipe.ingredientLines" :key="i">
          {{ i }}
        </p>
        <p>{{ ingredient.recipe.calories }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null,
      loading: false,
      error: null,
      buscar: "",
    };
  },
  methods: {
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
  },
  function: {
    useApiData(data) {},
  },
};
</script>
