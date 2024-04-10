import React from "react";
import cartEmpty from "../../assets/img/empty-cart.png";
import { useHistory } from "react-router-dom";

export interface ICartEmptyProps {}

const CartEmpty: React.FC<ICartEmptyProps> = ({ ...props }) => {
  const history = useHistory()
  return (
    <div className="cart-empty">
      <div className="cart-empty-img">
        <img src={cartEmpty} width={500} alt="cart-empty" />
      </div>
      <div className="cart-empty-title">
        There are no products in the cart yet
      </div>
      <div className="cart-empty-content">
        Let's shop thousands of products at Shop!
      </div>
      <div onClick={() => history.push("/")} className="cart-empty-btn">Buy</div>
    </div>
  );
};

export default CartEmpty;
