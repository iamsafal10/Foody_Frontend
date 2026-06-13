import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
// state is an object here of array as a key
// state.cartItems is an array of objects in which object is getting pushed
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      const check = state.cartItems.find(
        (item) => item.id == actions.payload.id
      );
      if (check) {
        state.cartItems = state.cartItems.map((item) =>
          item.id == actions.payload.id
            ? { ...item, qty: item.qty + 1 }
            : { ...item }
        );
      } else state.cartItems.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id == actions.payload.id ? { ...item, qty: 0 } : { ...item }
      );
      state.cartItems = state.cartItems.filter((item) => item.qty != 0);
    },
    incQty: (state, actions) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id == actions.payload.id
          ? { ...item, qty: item.qty + 1 }
          : { ...item }
      );
      state.cartItems = state.cartItems.filter((item) => item.qty != 0);
    },
    decQty: (state, actions) => {
      state.cartItems = state.cartItems.map((item) =>
        item.id == actions.payload.id
          ? { ...item, qty: item.qty - 1 }
          : { ...item }
      );
      state.cartItems = state.cartItems.filter((item) => item.qty != 0);
    },
    emptyCart: (state, actions) => {
      state.cartItems = [];
    },
    setCart: (state, actions) => {
      state.cartItems = actions.payload;
    },
  },
});
export const { addToCart, removeFromCart, incQty, decQty, emptyCart, setCart } =
  cartSlice.actions;
export default cartSlice.reducer;
