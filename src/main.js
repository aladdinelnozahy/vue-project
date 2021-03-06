import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/main.scss";
import "normalize.css";

// make uppercase
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

// Vue.config.productionTip= false;
// new Vue ({
//   router,
//   store ,
//   render: h => h(App)
// }).$mount("#app");
