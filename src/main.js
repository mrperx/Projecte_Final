import { createApp } from "vue";
import App from "./App.vue";

import "./index.css";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
// import { library } from "@fortawesome/fontawesome-svg-core";

import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { createPinia } from "pinia";
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
// library.add(faUserSecret);

app.use(createPinia());

app.mount("#app");
