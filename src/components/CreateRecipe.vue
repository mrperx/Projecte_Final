<template>
  <div class="container bg-slate-300">
    <h2
      class="text-center italic font-semibold text-lime-500 shadow-gray-400 font-serif text-xl"
    >
      Create Recipe
    </h2>

    <div class="grid grid-cols-2 container bg-cyan-200 p-3">
      <div>
        <img />
        <h4>Title : <input class="border" /></h4>
        <h4>
          Ingredients:
          <div class="flex">
            Quantitat :<input class="border" />
            <textarea class="border">Ingredients...</textarea>
          </div>
        </h4>
      </div>

      <div class="items-center">
        <h4>Process</h4>
        <textarea class="border w-full p-3 mb-3">Process...</textarea>
        <div class="text-right">
          <button
            class="border-2 shadow-md text-gray-600 border-lime-500 rounded-lg bg-lime-300 py-2 px-3"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
