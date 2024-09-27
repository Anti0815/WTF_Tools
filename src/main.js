import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { createApp } from "vue";
// import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

// Vue.use(VueAxios, axios);
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
