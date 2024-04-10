import React, { useEffect } from "react";
import HeaderTable from "../../componentCore/HeaderTable";
import TableOrder from "./TableOder";
import { callAPIGET } from "../../../utils/APICaller";
import { API_ORDERBUY } from "../../../commons/API";
import { useDispatch, useSelector } from "react-redux";
import { getOrderBuy } from "../../../reducers/order.reducers";
import { RootState } from "../../../reducers/Store";

export interface IOrderListProps {}
const OrderList: React.FC<IOrderListProps> = ({ ...props }) => {
  const orderList = useSelector((state: RootState) => state.orderList.list);

  const dispatch = useDispatch();
  const onCreate = () => {};
  useEffect(() => {
    callAPIGET(API_ORDERBUY, "GET").then((data) => {
      if (data) {
        dispatch(getOrderBuy(data));
      }
    });
  }, []);
  return (
    <div>
      <HeaderTable title="Order" onCreate={onCreate}  showBtn={false}/>
      <TableOrder data={orderList} />
    </div>
  );
};

export default OrderList;
