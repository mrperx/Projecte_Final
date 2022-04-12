<template>
  <div class="container p-3 m-auto bg-slate-300">
    <!-- <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-600">
      {{ error }}
    </div> -->

    <h2
      class="text-center italic font-semibold text-lime-500 shadow-gray-400 font-serif text-xl"
    >
      Create Recipe
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        class="md:col-start-2 col-span-1 container bg-[url('/hojas.gif')] opacity-75 p-3 rounded shadow"
      >
        <div>
          <h4 class="my-2">Title: <input v-model="title" class="border" /></h4>
          Image: <input v-model="image" class="border my-2" />
          <!-- //crear v-for per anar agregant ingredients i quantitat-->
          <h3>Ingredients</h3>
          <div class="my-2">
            <div v-for="ingredient in ingredients" :key="ingredient">
              <div class="items-start grid grid-cols-2">
                <div><input placeholder="Amount" class="border" /></div>
                <div>
                  <textarea placeholder="Ingredient" class="border"></textarea>
                </div>
              </div>
            </div>
            <button
              @click="addtoIngredient"
              class="text-lime-300 bg-white rounded-full shadow shadow-lime-100 hover:bg-green-200 w-8 h-8"
            >
              <i class="fa-solid fa-circle-plus"></i>
            </button>
          </div>
          <!-- </div> -->
        </div>

        <div class="items-center">
          <h4>Steps</h4>
          <textarea v-model="steps" class="border w-full p-3 mb-3"></textarea>
          <div class="text-right">
            <button
              @click="addToCreate()"
              class="border-2 shadow-md text-gray-600 border-lime-500 rounded-lg bg-lime-300 py-2 px-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCreate } from "../stores/createRecipe";
export default {
  setup() {
    const createStore = useCreate();

    return { createStore };
  },
  name: "createRecipe",
  data() {
    return {
      image: "",
      title: "",
      ingredients: [],
      // ingredient: "",
      // amount: "",
      steps: "",
    };
  },

  methods: {
    limpiarFormulario() {
      this.recipe = {
        image: "",
        title: "",
        ingredients: [],
        steps: "",
      };
      this.addtoIngredient();
    },
    addToCreate() {
      let recipe = {
        imatge: this.image,

        ingredients: this.ingredients,

        steps: this.steps,
      };
      this.createStore.addCreate(recipe);
    },
    addtoIngredient() {
      let ingredient = {
        ingredient: this.ingredient,
        amount: this.amount,
      };
      this.ingredients.push(ingredient);
    },
  },
};
</script>
