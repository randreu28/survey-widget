import { reactive } from "vue";

export const store = reactive({
  currentTab: "Consent",
  tabs: ["Consent", "Survey", "Thanks"],
  clientID: "",
});
