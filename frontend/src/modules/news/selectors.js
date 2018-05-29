export const selectNewsContainer = (state) => state.containers.news;

export const selectNewsData = (state) => selectNewsContainer(state).get("list");
export const selectTopNewsData = (state) => selectNewsContainer(state).get("list");
export const selectUserNewsData = (state) => selectNewsContainer(state).get("userList");

export const selectSingleNewsData = (state, id) => selectNewsData(state).find((singleNews) => singleNews.id === id);

export const selectSingleNewsComments = (state, id) => selectSingleNewsData(state, id).comments;
export const selectSingleNewsLikes = (state, id) => selectSingleNewsData(state, id).likes;
