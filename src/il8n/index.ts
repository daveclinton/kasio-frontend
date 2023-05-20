import i18n, { StringMap, TOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en";

export const resources = {
  en: { translation: en },
};

export const appLocales = Object.keys(resources);

const customDetector = {
  name: "languageDetector",
  lookup() {
    let appLanguage = appLocales[0];
    const locale = window.navigator.language;
    const localeShort = locale.split(/_|-/)[0];
    const isPresent = appLocales.find((item) => item === localeShort);
    const storeLang = localStorage.getItem("i18nextLng");
    if (storeLang) {
      appLanguage = storeLang;
    } else if (isPresent) {
      appLanguage = localeShort;
    }
    return appLanguage;
  },
};

const detectorOptions = {
  order: ["languageDetector", "localStorage"],
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(customDetector);

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: appLocales,
    react: {
      useSuspense: true,
    },
    detection: detectorOptions,
  });

export default i18n;

export type i18translateType = {
  t: (
    key: string | TemplateStringsArray | (string | TemplateStringsArray)[],
    options?: string | TOptions<StringMap> | undefined
  ) => string;
};
