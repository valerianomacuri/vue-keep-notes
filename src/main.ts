import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./router";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import "vuetify/styles";
import "./styles/global.css";

loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.use(VueQueryPlugin);
app.mount("#app");
