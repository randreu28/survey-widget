import { defineCustomElement } from "vue";
import App from "./App.ce.vue";
import "./index.css";

const element = defineCustomElement(App);

customElements.define("survey-widget", element);
