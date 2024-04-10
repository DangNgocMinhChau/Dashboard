import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./productList.reducers";
import CartListReducer from "./cartList.reducers";
import OrderBuyListReducer from "./order.reducers";
export const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    cartList: CartListReducer,
    orderList: OrderBuyListReducer
  },
});

// Get Root state and appDispatch store
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
