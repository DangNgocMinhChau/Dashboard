import { createAction, createReducer } from "@reduxjs/toolkit";
import { ProductList } from "../types/Product.type";
import { OrderBuy } from "../types/OrderBuy";

interface OrderBuyState {
  list: OrderBuy[] | any;
}

const initalState: OrderBuyState = {
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

export const getOrderBuy = createAction<OrderBuy>("order/getOrder");
export const deliverOrderBuy = createAction<OrderBuy>("order/deliverOrder");
export const findOrderById = createAction<string>("order/findOrder");

const OrderBuyListReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(getOrderBuy, (state, action) => {
      state.list = action.payload;
    })
    .addCase(findOrderById, (state, action) => {})
    .addCase(deliverOrderBuy, (state, action) => {
        const idOrder = action.payload.id
        state.list.some((item: OrderBuy, index: number) => {
          if (item.id === idOrder) {
            state.list[index] = {...action.payload , status: true};
          }
        });
    });
});

export default OrderBuyListReducer;
