<template>
  <div>
    <div class="container">
      <input @keyup.enter="sendApiRequest()" class="border w-full" />
      <button @click="sendApiRequest()">Search</button>
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
    };
  },
  methods: {
    async sendApiRequest() {
      this.loading = true;
      const APP_ID = "38ba7739";
      const Api_Key = "8567c4564eecc301097726808737edb6";
      try {
        const { data } = await axios(
          `https://api.edamam.com/api/search?q=biryani&app_id=${APP_ID}&app_key=${Api_Key}`
        );
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
