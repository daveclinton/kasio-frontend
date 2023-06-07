import { TOGGLE_LOCALE } from "./types";
import i18n from "../../il8n";

export const initialState = {
  locale: i18n.language,
};

export default function translates(
  state = initialState,
  action: { type: string; locale: unknown }
) {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
}
