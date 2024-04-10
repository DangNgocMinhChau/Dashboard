import { createAction, createReducer } from "@reduxjs/toolkit";
import { CartList } from "../types/Cart.type";

interface CartState {
  list: CartList[] | any;
}

const initalState: CartState = {
  list: [],
};

let findIndex = (data: any, id: any) => {
  let result = -1;
  data.forEach((data: any, index: any) => {
    if (data.id === id) {
      result = index;
    }
  });
  return result;
};

export const getItem = createAction<CartList>("cart/editCart");
export const addItem = createAction<CartList>("cart/addCart");
export const subItem = createAction<CartList>("cart/subItem");
export const deleteItem = createAction<string>("cart/deleteItem");
export const afterPurchaseCart = createAction<[]>("cart/afterPurchaseCart");

const CartListReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(getItem, (state, action) => {
      const cartID = action.payload.id;
      const item =
        state.list.find((item: CartList) => item.id === cartID) || null;
      if (item) {
        state.list[findIndex(state.list, cartID)] = {
          ...action.payload,
          count: state.list[findIndex(state.list, cartID)].count + 1,
        };
      } else {
        state.list.push({ ...action.payload, count: 1 });
      }
    })
    .addCase(addItem, (state, action) => {
      const cartID = action.payload.id;
      state.list[findIndex(state.list, cartID)] = {
        ...action.payload,
        count: state.list[findIndex(state.list, cartID)].count + 1,
      };
    })
    .addCase(subItem, (state, action) => {
      const cartID = action.payload.id;
      state.list[findIndex(state.list, cartID)] = {
        ...action.payload,
        count: state.list[findIndex(state.list, cartID)].count - 1,
      };
    })
    .addCase(afterPurchaseCart, (state, action) => {
      state.list = action.payload;
    })
    .addCase(deleteItem, (state, action) => {
      const cartID = action.payload;
      const findCartIndex = findIndex(state.list, cartID);
      if (findCartIndex !== -1) {
        state.list.splice(findCartIndex, 1);
      }
    });
});

export default CartListReducer;
