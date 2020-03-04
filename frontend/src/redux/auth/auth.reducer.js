import * as actionType from "./auth.type";

const initialState = {
  token: null,
  error: null,
  isLoading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return {
        ...state,
        isLoading: true
      };
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload
      };
    case actionType.AUTH_FAIL:
      return {};
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
      return state;
  }
};

export default authReducer;
