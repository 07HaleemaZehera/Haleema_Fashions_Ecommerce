import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {getJson_reducer_Products} from "./Reducers/reducerProducts"

import thunk from "redux-thunk";
import { LoginReducer } from "./Reducers/LoginReducer";
import { searchReducer } from "./Reducers/searchReducer";
const rootReducer=combineReducers({
    products:getJson_reducer_Products,
    tokenLogin:LoginReducer,
    searchs :searchReducer
})

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        
      })
    : compose;
    const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
 
);
 export const store = createStore(rootReducer, enhancer);