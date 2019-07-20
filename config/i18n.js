export const fallback = "en";

export const supportedLocales = {
  en: {
    name: "English",
    translationFileLoader: () => require("../lang/en.json"),

    // en is default locale in Moment
    momentLocaleLoader: () => Promise.resolve()
  },
  ko: {
    name: "한국어",
    translationFileLoader: () => require("../lang/ko.json"),
    momentLocaleLoader: () => import("moment/locale/ko")
  },
  ar: {
    name: "عربي",
    translationFileLoader: () => require("../lang/ar.json"),
    momentLocaleLoader: () => import("moment/locale/ar")
  }
};

export const defaultNamespace = "common";

export const namespaces = [
  "common",
  "favorite",
  "head",
  "timer",
  "map",
  "alert"
];
