import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";

interface Resources {
  en: { translation: typeof en };
  hi: { translation: typeof hi };
}

i18next.use(initReactI18next).init<Resources>({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18next;
