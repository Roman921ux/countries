import { SET_THEME } from "../actions/theme-action";

export const themeReducer = (state = 'light', { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;

    default:
      return state;
  }
}