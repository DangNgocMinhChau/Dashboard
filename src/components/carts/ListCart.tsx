import React, { useEffect, useState } from "react";
import { CartList } from "../../types/Cart.type";
import { useDispatch } from "react-redux";
import { addItem, deleteItem, subItem } from "../../reducers/cartList.reducers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from "@fortawesome/free-solid-svg-icons";

export interface ICartListProps {
  cartList: CartList[] | undefined;
  hiddenBTN?: boolean;
}
const ListCart: React.FC<ICartListProps> = ({ ...props }) => {
  const { cartList, hiddenBTN = false } = props;
  const [totalAmount, setTotalAmount] = useState<number | undefined>(0);

  const dispatch = useDispatch();

  const total = (price: string, quantity: string) => {
    return parseFloat(price) * parseFloat(quantity);
  };

  const add = (item: CartList) => {
    dispatch(addItem(item));
  };
  const sub = (item: CartList) => {
    if (parseInt(item.count) > 1) {
      dispatch(subItem(item));
    }
  };

  const handleDeleteProducts = (id : string) => {
      dispatch(deleteItem(id))
  }

  useEffect(() => {
    const res = cartList?.reduce((total: number, currentValue: CartList) => {
      return (
        total +
        parseInt(currentValue.count) * parseFloat(currentValue.priceCost)
      );
    }, 0);
    setTotalAmount(res);
  }, [cartList]);

  return (
    <div>
      <div className="cart">
        <div className="cart-list">
          {cartList?.map((item: CartList, index: number) => {
            return (
              <div key={index} className="cart-list-items">
                <div className="cart-list-items-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-list-items-body">
                  <div className="item-header">
                    <div className="item-title">{item.title}</div>
                    <div onClick={() => handleDeleteProducts(item.id)} className="item-remove"><FontAwesomeIcon icon={faRemove}/></div>
                  </div>
                  <div className="item-quantity">
                    <div className="item-quantity-title">
                      <div className="item-quantity-title-label"> Quantity</div>
                      <div className="item-quantity-title-total">
                        {total(item.priceCost, item.count)} $
                      </div>
                    </div>
                    <div className="item-quantity-count">
                      {!hiddenBTN && (
                        <div
                          onClick={() => sub(item)}
                          className="item-quantity-count-btn radius-left"
                        >
                          -
                        </div>
                      )}
                      <div className="item-quantity-count-result">
                        {item.count}
                      </div>
                      {!hiddenBTN && (
                        <div
                          onClick={() => add(item)}
                          className="item-quantity-count-btn radius-right"
                        >
                          +
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="cart-total-pay">
            <div className="cart-total-pay-title">Total amount : </div>
            <div className="cart-total-pay-result">{totalAmount} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
