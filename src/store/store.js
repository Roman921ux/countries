import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import { rootReducer } from "./reducers/rootReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
}
