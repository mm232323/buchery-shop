import { createSlice, configureStore } from "@reduxjs/toolkit";
import { cartProdsData } from "../src/util/interfaces";
async function fetchCartCount() {
  const response = await fetch("http://localhost:3000/main/shop/cart");
  if (!response.ok) throw new Error("an error occured in redux file");
  const cartData: { totalProducts: number; products: cartProdsData[] } =
    await response.json();
  return cartData;
}
const initialState = { totalProducts: 0 };
fetchCartCount().then((cart) => {
  initialState.totalProducts = cart.totalProducts;
});
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseCartCount(state: { totalProducts: number }) {
      state.totalProducts++;
    },
  },
});

const store = configureStore({reducer:cartSlice.reducer})

export default store;
