import React, { useEffect, useState } from "react";
import checkout from "./../../assets/img/checkout.jpg";
import ListCart from "../../components/carts/ListCart";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";
import { useHistory } from "react-router-dom";
import { callAPI, callAPIGET } from "../../utils/APICaller";
import { API_ORDERBUY } from "../../commons/API";
import { OrderBuy } from "../../types/OrderBuy";

export interface ICheckoutPageProps {}
const CheckoutPage: React.FC<ICheckoutPageProps> = ({ ...props }) => {
  const [itemOrder, setItemOrder] = useState<OrderBuy>();
  const history = useHistory();
  const idOrder =
    history.location.pathname.split("/")[
      history.location.pathname.split("/").length - 1
    ];
  useEffect(() => {
    callAPIGET(`${API_ORDERBUY}/${idOrder}`, "GET").then((data) => {
      if (data) {
        setItemOrder(data);
      }
    });
  }, []);
  const cartList = itemOrder?.listProduct;

  return (
    <div>
      <div className="checkout">
        <div className="checkout-img">
          <img src={checkout} width={100} alt="" />
        </div>
        <div className="checkout-title">Order Success</div>
        <div className="checkout-content">
          Thank you for purchasing at Shop. The Shop operator will contact you
          as soon as possible.
        </div>
        <div className="info-section">Customer information</div>
        <div className="checkout-section">
          <div className="checkout-info-customer-item">
            <div className="info-customer-title">Code</div>
            <div className="info-customer-content">{itemOrder?.id}</div>
          </div>
          <div className="checkout-info-customer-item">
            <div className="info-customer-title">Name Customer</div>
            <div className="info-customer-content">{itemOrder?.name}</div>
          </div>
          <div className="checkout-info-customer-item">
            <div className="info-customer-title">Phone number</div>
            <div className="info-customer-content">
              {itemOrder?.phonenumber}
            </div>
          </div>
          <div className="checkout-info-customer-item">
            <div className="info-customer-title">Address</div>
            <div className="info-customer-content">{itemOrder?.addres}</div>
          </div>
        </div>

        <div className="info-section">Order information</div>
        <div className="checkout-section-oder">
          <ListCart cartList={cartList} hiddenBTN={true} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
