import HttpService from '../../utils/HttpService';
import basePath from '../../utils/axios';
import * as actionType from './items.type';

export const fetchItems = token => {
  const httpService = new HttpService();
  return dispatch => {
    httpService.get('/panel', response => {
      console.log(response);
      dispatch(fetchItemsSuccess(response.data.data.items));
    });
  };
};

// export const fetchItems = token => {
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   return dispatch => {
//     basePath
//       .get('panel', {
//         headers: headers,
//       })
//       .then(res => dispatch(fetchItemsSuccess(res.data.data.items)))
//       .catch(e => console.log(e));
//   };
// };

export const fetchItemsSuccess = items => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload: items,
});

export const addItem = (token, item) => {
  const httpService = new HttpService();
  return dispatch =>
    httpService.post('/panel', item, response => {
      dispatch(addItemSuccess(response.data.data.item));
    });
};

export const addItemSuccess = item => ({
  type: actionType.ADD_ITEM_SUCCESS,
  payload: item,
});

export const removeItem = (token, item) => {
  const httpService = new HttpService();
  return dispatch => {
    httpService.delete('/panel', item, response => {
      console.log(response);
      dispatch(removeItemSuccess(item));
    });
  };
};

export const removeItemSuccess = item => ({
  type: actionType.REMOVE_ITEM_SUCCESS,
  payload: item,
});

export const editItem = (token, idItem, data) => {
  const httpService = new HttpService();
  const dataEdit = { idItem, data };
  return dispatch =>
    httpService.patch('/panel', dataEdit, response => {
      dispatch(editItemSuccess(response.data.data.data));
    });
};

export const editItemSuccess = item => ({
  type: actionType.EDIT_ITEM_SUCCESS,
  payload: item,
});

export const changeToEditMode = mode => ({
  type: actionType.EDIT_MODE,
  payload: mode,
});

export const emptyList = () => ({
  type: actionType.EMPTY_LIST,
});
