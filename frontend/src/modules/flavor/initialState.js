import {fromJS} from "immutable";

export const list = "list";
export const userList = "userList";
export const error = "error";
export const loading = "loading";

export const initialState = fromJS({
  list    : [],
  userList: [],
  error   : null,
  loading : false
});
