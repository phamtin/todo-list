import * as actionType from './auth.type';
import HttpService from '../../utils/HttpService';

export const auth = (email, password) => {
  const authData = { email, password };
  const httpService = new HttpService();

  return dispatch => {
    dispatch(authStart());
    httpService.post('/login', authData, response => {
      dispatch(authSuccess(response.data.token));
    });
  };
};

// export const auth = (email, password) => {
//   return dispatch => {
//     dispatch(authStart());
//     const authData = { email, password };

//     basePath
//       .post('login', authData)
//       .then(res => dispatch(authSuccess(res.data.token)))
//       .catch(e => alert('Wrong password'));
//   };
// };

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = token => ({
  type: actionType.AUTH_SUCCESS,
  payload: token,
});

export const authFail = error => {
  return {
    type: actionType.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const setAuthRedirectPath = path => {
  return {
    type: actionType.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
