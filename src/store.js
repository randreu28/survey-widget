import { reactive } from "vue";

export const store = reactive({
  currentTab: "Consent",
  tabs: ["Consent", "Ux", "Thanks"],
  clientID: ""
});
