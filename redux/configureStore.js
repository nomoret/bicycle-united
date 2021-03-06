import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/users";
import favorites from "./modules/favorites";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage
};

const reducer = persistCombineReducers(persistConfig, {
  favorites,
  user
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
