<template>
  <div class="container p-3 m-auto">
    <!-- <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-600">
      {{ error }}
    </div> -->

    <h2
      class="text-center italic font-semibold text-lime-500 shadow-gray-400 font-serif text-xl"
    >
      Create Recipe
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3">
      <div
        class="mt-5 lg:col-start-2 col-span-1 container bg-lime-50 bg-[url('/hojas.gif')] opacity-75 p-3 rounded-lg shadow-lg shadow-gray-200"
      >
        <h4 class="my-2">Title <input v-model="title" class="border" /></h4>
        Image <input v-model="image" class="border my-2" />
        <!-- //crear v-for per anar agregant ingredients i quantitat-->
        <h3>Ingredients</h3>
        <div class="my-2">
          <div v-for="ingredient in ingredients" :key="ingredient">
            <div class="items-start grid my-2 grid-cols-1 xl:grid-cols-2 p-2">
              <div>
                <input
                  v-model="ingredient.amount"
                  placeholder="Amount"
                  class="border"
                />
              </div>
              <div>
                <textarea
                  v-model="ingredient.name"
                  placeholder="Ingredient"
                  class="border"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            @click="addtoIngredient"
            class="text-lime-400 text-lg rounded-full shadow shadow-lime-300 hover:bg-green-200 w-8 h-8"
          >
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </div>

        <div class="items-center">
          <h4>Steps</h4>
          <textarea v-model="steps" class="border w-full p-3 mb-3"></textarea>
          <div class="text-right">
            <button
              type="submit"
              @click="addToCreate()"
              class="border-2 shadow-md text-gray-600 border-lime-500 rounded-lg bg-lime-300 py-2 px-3"
            >
              Submit
            </button>
            <!-- <button
              type="reset"
              @click="limpiarFormulario()"
              class="border-2 shadow-md text-gray-600 border-red-500 rounded-lg bg-red-300 py-2 px-3"
            >
              Clean
            </button> -->
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
      name: "",
      amount: "",
      steps: "",
    };
  },
  methods: {
    addToCreate() {
      let recipe = {
        image: this.image,
        title: this.title,
        ingredients: [...this.ingredients],
        steps: this.steps,
      };
      this.createStore.addCreate(recipe);
    },
    limpiarFormulario() {
      this.recipe = {
        image: "",
        title: "",
        ingredients: [...this.ingredients],
        steps: "",
      };
    },
    addtoIngredient() {
      let ingredient = {
        name: "",
        amount: "",
      };
      this.ingredients.push(ingredient);
    },
  },
  // async mounted() {
  //   this.limpiarFormulario();
  // },
};
</script>
