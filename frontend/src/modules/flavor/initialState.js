import {fromJS} from "immutable";

export const initialState = fromJS({
  list    : [],
  userList: [],
  error   : null,
  loading : false
});
