import { defineCustomElement } from "vue";
import App from "./App.ce.vue";

const element = defineCustomElement(App);

customElements.define("survey-widget", element);
