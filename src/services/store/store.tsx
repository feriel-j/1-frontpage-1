import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore} from 'redux'


import { rootReducer } from "../Reducers";
import thunk from "redux-thunk";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);