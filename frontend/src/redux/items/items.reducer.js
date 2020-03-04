import * as actionType from "./items.type";

const INITIAL_STATE = {
  listItems: []
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM_SUCCESS:
      return {
        ...state,
        listItems: state.listItems.concat(action.payload)
      };
    case actionType.REMOVE_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter(
          item => item._id !== action.payload._id
        )
      };
    case actionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        listItems: [...action.payload]
      };
    default:
      return state;
  }
};

export default itemReducer;
