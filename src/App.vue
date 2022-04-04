<template>
  <NavBar />
  <h1 class="border bg-slate-400">APP</h1>
</template>

<script>
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    home: Home,
    navBar: NavBar,
  },
};
</script>
