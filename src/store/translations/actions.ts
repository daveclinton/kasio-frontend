import { TOGGLE_LOCALE, DELETE_LOCALE } from "./types";
import i18n, { appLocales } from "../../il8n";

export const toggleLocale = (locale: string) => ({
  type: TOGGLE_LOCALE,
  locale,
});

export const deleteLocale = (index: never) => ({ type: DELETE_LOCALE, index });

export const changeLanguage = () => {
  return (dispatch: (arg0: { type: string; locale: string }) => void) => {
    const nextLocaleIndex = appLocales.indexOf(i18n.language) + 1;
    const locale =
      nextLocaleIndex >= appLocales.length
        ? appLocales[0]
        : appLocales[nextLocaleIndex];
    i18n.changeLanguage(locale);
    dispatch(toggleLocale(locale));
  };
};
