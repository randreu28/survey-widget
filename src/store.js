import { reactive } from "vue";

export const store = reactive({
  currentTab: "Consent",
  tabs: ["Consent", "Survey", "Thanks"],
  default: {
    client_id: null,
    survey_type: "text",

    survey_confirm: "Enviar",
    survey_placeholder: "Tu respuesta",

    survey_left: "Muy insatisfecho",
    survey_right: "Muy satisfecho",

    logo_src:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_UPC.svg",
    consent_title: "¡Ayudanos a mejorar nuestros servicios!",
    consent_confirm: "Ayúdanos",
    consent_decline: "No, gracias",
    consent_disclaimer:
      "Al continuar, accede que utilicemos sus respuestas y datos de usuario para mejorar nuestros servicios.",
    survey_title: "¿Qué tan satisfecho estás con nuestros servicios hoy?",
    thanks_title: "Gracias!",
  },
  config: {
    client_id: null,
    survey_type: null,

    //Text survey
    survey_confirm: null,
    survey_placeholder: null,

    //Linear Scale survey
    survey_left: null,
    survey_right: null,

    //Common on all survey types
    logo_src: null,
    consent_title: null,
    consent_confirm: null,
    consent_decline: null,
    consent_disclaimer: null,
    survey_title: null,
    thanks_title: null,
  }
});
