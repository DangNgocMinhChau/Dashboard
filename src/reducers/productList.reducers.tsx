import { createAction, createReducer } from "@reduxjs/toolkit";
import { ProductList } from "../types/Product.type";

interface ProductSate {
  list: ProductList[] | any;
  items: ProductList | null;
}

const initalState: ProductSate = {
  list: [],
  items: null,
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

export const addProduct = createAction<ProductList>("product/addProduct");
export const getProduct = createAction<ProductList>("product/getProduct");
export const deleteProduct = createAction<String>("product/deleteProduct");
export const findProductByID = createAction<any>("product/findProductByID");
export const editProduct = createAction<ProductList>("product/editProduct");

const ProductListReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(addProduct, (state, action) => {
      state.list.push(action.payload);
    })
    .addCase(getProduct, (state, action) => {
      state.list = action.payload;
    })
    .addCase(deleteProduct, (state, action) => {
      const productID = action.payload;
      const findProductIndex = findIndex(state.list, productID);
      if (findProductIndex !== -1) {
        state.list.splice(findProductIndex, 1);
      }
    })
    .addCase(findProductByID, (state, action) => {
      const productID = action.payload.id;
      const productItem =
        state.list.find((item: ProductList) => item.id === productID) || null;
      state.items = productItem;
      action.payload.form.setFieldsValue(productItem);
    })
    .addCase(editProduct, (state, action) => {
      const productID = action.payload.id;
      state.list.some((item: ProductList, index: number) => {
        if (item.id === productID) {
          state.list[index] = action.payload;
        }
      });
    });
});

export default ProductListReducer;
