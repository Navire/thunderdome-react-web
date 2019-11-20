import { applyMiddleware, createStore, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";
import playerReducer from '../pages/main/reducer'


const rootReducer = combineReducers({
  player: playerReducer,
});

const middlewares = [
  routerMiddleware(history), 
  thunk,  
];

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(...middlewares),  
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
