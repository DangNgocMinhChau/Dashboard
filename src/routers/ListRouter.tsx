import {
  PRODUCTSLIST,
  ORDERLIST,
} from "../commons/ConstantURL";

export interface IDataMenu {
  id: string;
  name: string;
  to: string;
  exact: boolean;
  children?: IDataMenu[];
}

export const dataMenu: IDataMenu[] = [
  {
    id: "1",
    name: "Management Acount",
    to: "/account",
    exact: true,
    children: [
      {
        id: "2",
        name: "My account",
        to: "/my-account",
        exact: true,
        children: [],
      },
      {
        id: "3",
        name: "Edit account",
        to: "/edit-account",
        exact: true,
        children: [],
      },
    ],
  },
  {
    id: "4",
    name: "Product",
    to: "/product",
    exact: true,
    children: [
      {
        id: "5",
        name: "List Product",
        to: PRODUCTSLIST,
        exact: true,
        children: [],
      },
      {
        id: "6",
        name: "The Order",
        to: ORDERLIST,
        exact: true,
        children: [],
      }
    ],
  },
];
