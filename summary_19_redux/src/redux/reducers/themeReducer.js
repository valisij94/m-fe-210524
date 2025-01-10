import { THEME_ACTIONS } from "../actions/themeActions.js";

// начальное состояние
const initialState = 'light';

export const themeReducer = ( state = initialState, action ) => {

  switch (action.type) {
    case THEME_ACTIONS.SWITCH_THEME: {
      return state === 'light' ? 'dark' : 'light';
    }
    default: return state;
  }
}