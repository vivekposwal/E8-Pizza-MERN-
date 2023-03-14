import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { cartReducer } from "./reducers/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import {
  placeOrderReducer,
  getUserOrdersReducer,
  //allUserOrdersReducer,
} from "./reducers/orderReducer";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const finalReducer = combineReducers({
  getAllPizzasReducers: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer: placeOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const middleware = [thunk];
//const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
