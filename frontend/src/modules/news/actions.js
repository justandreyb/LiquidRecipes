import * as constants from "./constants";

export const getNews = () => ({
  type: constants.GET_NEWS_REQUEST
});

export const getNewsSuccess = (news) => ({
  type   : constants.GET_NEWS_SUCCESS,
  payload: news
});

export const getNewsFail = (error) => ({
  type   : constants.GET_NEWS_FAIL,
  payload: error,
  error  : true
});

export const getTopNews = (number) => ({
  type   : constants.GET_NEWS_REQUEST,
  payload: number
});

export const getTop10News = () => ({
  type: constants.GET_NEWS_REQUEST
});

export const getTopNewsSuccess = (news) => ({
  type   : constants.GET_NEWS_SUCCESS,
  payload: news
});

export const getTopNewsFail = (error) => ({
  type   : constants.GET_NEWS_FAIL,
  payload: error,
  error  : true
});


export const createSingleNews = (singleNews) => ({
  type   : constants.CREATE_SINGLE_NEWS_REQUEST,
  payload: singleNews
});

export const createSingleNewsSuccess = (singleNews) => ({
  type   : constants.CREATE_SINGLE_NEWS_SUCCESS,
  payload: singleNews
});

export const createSingleNewsFail = (error) => ({
  type   : constants.CREATE_SINGLE_NEWS_FAIL,
  payload: error,
  error  : true
});


export const updateSingleNews = (singleNews) => ({
  type   : constants.UPDATE_SINGLE_NEWS_REQUEST,
  payload: singleNews
});

export const updateSingleNewsSuccess = (singleNews) => ({
  type   : constants.UPDATE_SINGLE_NEWS_SUCCESS,
  payload: singleNews
});

export const updateSingleNewsFail = (error) => ({
  type   : constants.UPDATE_SINGLE_NEWS_FAIL,
  payload: error,
  error  : true
});


export const deleteSingleNews = (singleNewsId) => ({
  type   : constants.DELETE_SINGLE_NEWS_REQUEST,
  payload: singleNewsId
});

export const deleteSingleNewsSuccess = (singleNewsId) => ({
  type   : constants.DELETE_SINGLE_NEWS_SUCCESS,
  payload: singleNewsId
});

export const deleteSingleNewsFail = (error) => ({
  type   : constants.DELETE_SINGLE_NEWS_FAIL,
  payload: error,
  error  : true
});


export const createSingleNewsComment = (singleNewsId, comment) => ({
  type   : constants.CREATE_SINGLE_NEWS_COMMENT_REQUEST,
  payload: {
    singleNewsId: singleNewsId,
    comment     : comment
  }
});

export const createSingleNewsCommentSuccess = (comment) => ({
  type   : constants.CREATE_SINGLE_NEWS_COMMENT_SUCCESS,
  payload: comment
});

export const createSingleNewsCommentFail = (error) => ({
  type   : constants.CREATE_SINGLE_NEWS_COMMENT_FAIL,
  payload: error,
  error  : true
});


export const deleteSingleNewsComment = (singleNewsId, commentId) => ({
  type   : constants.DELETE_SINGLE_NEWS_COMMENT_REQUEST,
  payload: {
    singleNewsId: singleNewsId,
    commentId   : commentId
  }
});

export const deleteSingleNewsCommentSuccess = (commentId) => ({
  type   : constants.DELETE_SINGLE_NEWS_COMMENT_SUCCESS,
  payload: commentId
});

export const deleteSingleNewsCommentFail = (error) => ({
  type   : constants.DELETE_SINGLE_NEWS_COMMENT_FAIL,
  payload: error,
  error  : true
});

export const createSingleNewsLike = (singleNewsId, like) => ({
  type   : constants.CREATE_SINGLE_NEWS_LIKE_REQUEST,
  payload: {
    singleNewsId: singleNewsId,
    like        : like
  }
});

export const createSingleNewsLikeSuccess = (like) => ({
  type   : constants.CREATE_SINGLE_NEWS_LIKE_SUCCESS,
  payload: like
});

export const createSingleNewsLikeFail = (error) => ({
  type   : constants.CREATE_SINGLE_NEWS_LIKE_FAIL,
  payload: error,
  error  : true
});


export const deleteSingleNewsLike = (singleNewsId, likeId) => ({
  type   : constants.DELETE_SINGLE_NEWS_LIKE_REQUEST,
  payload: {
    singleNewsId: singleNewsId,
    likeId      : likeId
  }
});

export const deleteSingleNewsLikeSuccess = (likeId) => ({
  type   : constants.DELETE_SINGLE_NEWS_LIKE_SUCCESS,
  payload: likeId
});

export const deleteSingleNewsLikeFail = (error) => ({
  type   : constants.DELETE_SINGLE_NEWS_LIKE_FAIL,
  payload: error,
  error  : true
});

export const getUserNews = () => ({
  type: constants.GET_USER_NEWS_REQUEST
});

export const getUserNewsSuccess = (data) => ({
  type   : constants.GET_USER_NEWS_SUCCESS,
  payload: data
});

export const getUserNewsFail = (error) => ({
  type   : constants.GET_USER_NEWS_FAIL,
  payload: error,
  error  : true
});

export const addSingleNewsToUser = (singleNews) => ({
  type   : constants.ADD_SINGLE_NEWS_TO_USER_REQUEST,
  payload: singleNews
});

export const addSingleNewsToUserSuccess = (singleNews) => ({
  type   : constants.ADD_SINGLE_NEWS_TO_USER_SUCCESS,
  payload: singleNews
});

export const addSingleNewsToUserFail = (error) => ({
  type   : constants.ADD_SINGLE_NEWS_TO_USER_FAIL,
  payload: error,
  error  : true
});

export const deleteSingleNewsFromUser = (singleNewsId) => ({
  type   : constants.DELETE_SINGLE_NEWS_FROM_USER_REQUEST,
  payload: singleNewsId
});

export const deleteSingleNewsFromUserSuccess = (singleNewsId) => ({
  type   : constants.DELETE_SINGLE_NEWS_FROM_USER_SUCCESS,
  payload: singleNewsId
});

export const deleteSingleNewsFromUserFail = (error) => ({
  type   : constants.DELETE_SINGLE_NEWS_FROM_USER_FAIL,
  payload: error,
  error  : true
});
