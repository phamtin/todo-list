import * as actionType from "./items.type";

const INITIAL_STATE = {
  listItems: [
    {
      id: 1,
      heading: "h1",
      detail: "d1"
    },
    {
      id: 2,
      heading: "h2",
      detail: "d2"
    },
    {
      id: 3,
      heading: "h3",
      detail: "d3"
    }
  ]
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      return {
        ...state,
        listItems: state.listItems.concat(action.payload)
      };
    case actionType.REMOVE_ITEM:
      console.log("dele");
      return {
        ...state,
        listItems: state.listItems.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default itemReducer;
