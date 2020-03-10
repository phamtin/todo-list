import axios from 'axios';

import * as actionType from './items.type';

export const fetchItems = token => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return dispatch => {
    axios
      .get('http://127.0.0.1:9000/panel', {
        headers: headers,
      })
      .then(res => dispatch(fetchItemsSuccess(res.data.data.items)))
      .catch(e => console.log(e));
  };
};

export const fetchItemsSuccess = items => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload: items,
});

export const addItem = (token, item) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return dispatch =>
    axios
      .post('http://127.0.0.1:9000/panel', item, {
        data: item,
        headers: headers,
      })
      .then(res => dispatch(addItemSuccess(res.data.data.item)))
      .catch(e => console.log(e));
};

export const addItemSuccess = item => ({
  type: actionType.ADD_ITEM_SUCCESS,
  payload: item,
});

export const removeItem = (token, item) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return dispatch => {
    axios
      .delete('http://127.0.0.1:9000/panel', {
        data: item,
        headers: headers,
      })
      .then(res => dispatch(removeItemSuccess(item)))
      .catch(e => console.log(e));
  };
};

export const removeItemSuccess = item => ({
  type: actionType.REMOVE_ITEM_SUCCESS,
  payload: item,
});

export const editItem = (token, idItem, data) => {
  const headers = { Authorization: `Bearer ${token}` };
  const dataEdit = { idItem, data };
  console.log(dataEdit.data);
  return dispatch =>
    axios
      .patch('http://127.0.0.1:9000/panel', {
        data: dataEdit,
        headers: headers,
      })
      .then(res => dispatch(editItemSuccess(res.data.data.data)))
      .catch(e => console.log(e));
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
