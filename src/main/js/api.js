import axios from 'axios';

const REQUEST_TIMEOUT = 5000;
const REQUEST_ROOT_PATH = '/storage';

export const save = (data, path) =>
  axios({
    url: REQUEST_ROOT_PATH.concat(path),
    data,
    timeout: REQUEST_TIMEOUT,
    method: 'post'
  });

export const get = (path) =>
  axios({
    url: REQUEST_ROOT_PATH + path,
    timeout: REQUEST_TIMEOUT,
    method: 'get',
    responseType: 'json'
  })
;
