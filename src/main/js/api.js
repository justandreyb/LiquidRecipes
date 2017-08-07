import toastr from 'toastr';
import axios from 'axios';
import store from 'store';

const REQUEST_TIMEOUT = 5000;
const REQUEST_ROOT_PATH = 'http://localhost:8080/storage/';

const getErrorAddingMessage = (entityName) => {
  return 'New element wasn\'t added in '.concat(entityName);
};

export const addEntity = (entity, path, handleMethods, getEntityData) => {
  store.dispatch(handleMethods.addEntityRequest());
  axios({
    url: REQUEST_ROOT_PATH.concat(path),
    data: getEntityData(entity),
    timeout: REQUEST_TIMEOUT,
    method: 'post'
  })
    .then((response) => {
      store.dispatch(handleMethods.addEntitySuccess(response.data));
      handleMethods.updateAll();
      toastr.success(getSuccessAddingMessage(path));
    })
    .catch((error) => {
      store.dispatch(handleMethods.addEntityFailed(error));
      toastr.error(getErrorAddingMessage(path));
    });
};


export const getEntities = (entityPath, handleMethods, analyzeMethods) => {
  store.dispatch(handleMethods.getEntitiesRequest());
  axios({
    url: REQUEST_ROOT_PATH + entityPath,
    timeout: REQUEST_TIMEOUT,
    method: 'get',
    responseType: 'json'
  })
    .then((response) => {
      let loadedEntities = [];

      loadedEntities = analyzeMethods.getListFromResponse(response);

      store.dispatch(handleMethods.getEntitiesSuccess(loadedEntities));
    })
    .catch((error) => {
      store.dispatch(handleMethods.getEntitiesFailed(error));
      toastr.error(getErrorGettingAllMessage(entityPath));
    });
};
