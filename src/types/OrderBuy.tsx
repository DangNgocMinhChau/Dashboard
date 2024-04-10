import { CartList } from "./Cart.type";

export interface OrderBuy {
  id: string;
  name?: string;
  addres?: string;
  phonenumber?: string;
  note?: string;
  listProduct?: CartList[],
  status?:boolean
}
