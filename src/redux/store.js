import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import displayReucer from "./reducers/DisplayList.reducer";

/* const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result;
    };
  };
}; */

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  displayReucer,
  composeEnhancer(applyMiddleware(thunk))
);
