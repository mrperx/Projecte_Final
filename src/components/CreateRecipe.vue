<template>
  <div class="container p-3 m-auto bg-slate-300">
    <h2
      class="text-center italic font-semibold text-lime-500 shadow-gray-400 font-serif text-xl"
    >
      Create Recipe
    </h2>

    <div class="grid grid-cols-2 container bg-cyan-200 p-3">
      <div>
        <h4>Title : <input v-model="title" class="border" /></h4>
        Image<input v-model="image" class="border" />
        <!-- //crear v-for per anar agregant ingredients i quantitat-->
        <h3>Ingredients</h3>
        <input placeholder="amount" v-model="amount" class="border" />
        <textarea
          placeholder="Ingredients"
          v-model="ingrediemts"
          class="border"
        >
Ingredients...</textarea
        >
      </div>
    </div>

    <div class="items-center">
      <h4>Steps</h4>
      <textarea v-model="steps" class="border w-full p-3 mb-3">
Steps...</textarea
      >
      <div class="text-right">
        <button
          @click="handleSubmit"
          class="border-2 shadow-md text-gray-600 border-lime-500 rounded-lg bg-lime-300 py-2 px-3"
        >
          Submit
        </button>
        <div v-for="(r, index) of recipes" :key="r.id">
          <h1>{{ r.name }}</h1>
          <h2>ingredients</h2>
          <div class="content">{{ r.ingredients }}</div>
          <h2>steps</h2>
          <div class="content">{{ r.steps }}</div>
          <button type="button" @click="deleteRecipe(index)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createRecipe",
  data() {
    return {
      image: "",
      title: "",
      ingrediemts: "",
      amount: "",
      steps: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("createRecipe", {
        title: this.title,
        ingrediemts: this.ingrediemts,
        amount: this.amount,
        process: this.process,
      });
    },
  },
};
</script>
