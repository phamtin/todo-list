import * as actionType from './items.type';
import { handleUpdate } from './item.utils';

const INITIAL_STATE = {
  listItems: [],
  isEditMode: false,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_SUCCESS:
      return {
        ...state,
        listItems: state.listItems.concat(action.payload),
      };
    case actionType.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        listItems: state.listItems.filter(
          item => item._id !== action.payload._id,
        ),
      };
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        listItems: [...action.payload],
      };
    case actionType.EDIT_ITEM_SUCCESS:
      return {
        ...state,
        listItems: handleUpdate(state.listItems, action.payload),
      };
    case actionType.EDIT_MODE:
      return {
        ...state,
        isEditMode: action.payload === 'edit' ? true : false,
      };
    default:
      return state;
  }
};

export default itemReducer;
