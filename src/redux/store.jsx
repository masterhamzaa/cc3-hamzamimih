import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import CartSlice from "./CartSlice";

const reducer = combineReducers({
  users: UserSlice,
  carts: CartSlice,
});
const store = configureStore({ reducer });
export default store;
