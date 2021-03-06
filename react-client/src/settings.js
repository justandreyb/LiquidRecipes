import {getCookies, setCookies} from "./utils/cookies";

export const URL = "http://localhost:8181";
export const API_URL = URL + "/storage";

export const CLIENT_ID = "liquid_recipes_frontend";
export const CLIENT_SECRET = "lirefrse";
export const ACCESS_TOKEN_NAME = "access_token";

export const NOTIFICATION_TIMEOUT = 2500;

/* Available themes: light, night, modern, modern-night */

export const THEME = "theme";
export const DEFAULT_THEME = "modern";

export const FONT = "font";
export const DEFAULT_FONT = "default";

export const getThemeSetting = () => {
  const themeCookies = getCookies(THEME);
  if (themeCookies == null || themeCookies === "")
    setCookies(THEME, DEFAULT_THEME);

  return getCookies(THEME);
};

export const getFontSetting = () => {
  const themeCookies = getCookies(FONT);
  if (themeCookies == null || themeCookies === "")
    setCookies(FONT, DEFAULT_FONT);

  return getCookies(FONT);
};
