import axios from "axios";

import * as actionType from "./items.type";

export const fetchItems = token => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch => {
    let items = null;
    console.log("get: " + token);
    axios
      .get("http://127.0.0.1:9000/panel", {
        headers: headers
      })
      .then(res => dispatch(fetchItemsSuccess(res.data.data.items)))
      .catch(e => console.log(e));
  };
};

export const fetchItemsSuccess = items => ({
  type: actionType.FETCH_DATA_SUCCESS,
  payload: items
});

export const addItem = (token, item) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
  return dispatch =>
    axios
      .post("http://127.0.0.1:9000/panel", item, {
        data: item,
        headers: headers
      })
      .then(res => dispatch(addItemSuccess(res.data.data.item)))
      .catch(e => console.log(e));
};

export const addItemSuccess = item => ({
  type: actionType.ADD_ITEM_SUCCESS,
  payload: item
});

export const removeItem = item => ({
  type: actionType.REMOVE_ITEM,
  payload: item
});
