import Cookies from "js-cookie";

export const setCookies = (key, value, exp) => {
  Cookies.set(key, value, {
    expires: exp
  });
};

export const getCookies = (key) => {
  return Cookies.get(key);
};

export const removeCookies = (key) => {
  Cookies.remove(key);
};