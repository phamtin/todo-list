import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemReducer from "./items/items.reducer";
import authReducer from "./auth/auth.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};
const rootReducer = combineReducers({
  items: itemReducer,
  auth: authReducer
});

export default persistReducer(persistConfig, rootReducer);
