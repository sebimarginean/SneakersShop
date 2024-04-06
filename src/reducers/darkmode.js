import { SWITCH_MODE } from "../actions/darkmode";

const initialState = { darkMode: false };

const switchMode = (state, action) => {
  return { ...state, darkMode: action.isDarkModeOn };
};

const reducer = (state = initialState, action) => {
  if (action.type === SWITCH_MODE) return switchMode(state, action);
  return state;
};

export default reducer;
