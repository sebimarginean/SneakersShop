export const SWITCH_MODE = "SWITCH_MODE";

export const switchMode = (isDarkModeOn) => ({
  type: SWITCH_MODE,
  isDarkModeOn,
});
