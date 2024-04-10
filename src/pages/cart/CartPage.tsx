import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";
import { useDispatch } from "react-redux";
import ListCart from "../../components/carts/ListCart";
import { useHistory } from "react-router-dom";
import FormCart from "../../components/carts/FormCart";
import { callAPI } from "../../utils/APICaller";
import { API_ORDERBUY } from "../../commons/API";
import { afterPurchaseCart } from "../../reducers/cartList.reducers";
import CartEmpty from "../../components/carts/CartEmpty";
import { OrderBuy } from "../../types/OrderBuy";

export interface ICartPageProps {}
const CartPage: React.FC<ICartPageProps> = ({ ...props }) => {
  const cartList = useSelector((state: RootState) => state.cartList.list);
  const cartEmpty = cartList.length === 0 ? true : false;
  const [infoCustom, setInfoCustom] = useState<{}>();
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: any) => {
    let dataOrder: OrderBuy = {
      ...values,
      listProduct: cartList,
      status: false,
    };
    callAPI(API_ORDERBUY, "POST", dataOrder).then((data) => {
      if (data) {
        history.push(`/checkout/${data.id}`);
        dispatch(afterPurchaseCart([]));
      }
    });
  };

  return (
    <>
      {cartEmpty ? (
        <CartEmpty />
      ) : (
        <>
          <ListCart cartList={cartList} />
          <div className="cart-infor-buy">
            <div className="cart-infor-buy-title">Infomation Buy</div>
            <FormCart onSubmit={onFinish} />
          </div>
        </>
      )}
    </>
  );
};
export default CartPage;
