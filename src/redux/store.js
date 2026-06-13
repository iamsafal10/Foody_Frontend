import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../slices/CartSlice";
import CategorySliceReducer from "../slices/CategorySlice";
import SearchSliceReducer from "../slices/SearchSlice";
import AuthSliceReducer from "../slices/AuthSlice";
const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    category: CategorySliceReducer,
    search: SearchSliceReducer,
    auth: AuthSliceReducer,
  },
});
export default store;
