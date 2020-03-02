import * as actionType from "./items.type";

export const addItem = item => ({
  type: actionType.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: actionType.REMOVE_ITEM,
  payload: item
});
