<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error" class="text-red-600">
      {{ error }}
    </div>
    <div class="flex justify-between">
      <button>Home</button>
      <button>Preferits</button>
    </div>
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

<style></style>
