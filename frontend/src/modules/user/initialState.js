import {fromJS} from "immutable";

export const user = "user";
export const roles = "roles";
export const auth = "auth";
export const error = "error";
export const loading = "loading";
export const authenticated = "authenticated";

export const initialState = fromJS({
  user: {
    name: "Guest"
  },
  auth         : {},
  roles        : ["guest"],
  error        : null,
  loading      : false,
  authenticated: false
});
