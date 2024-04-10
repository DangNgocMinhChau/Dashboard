import React, { useEffect, useState } from "react";
import logo from "../../assets/img/pngtree-smartphone-shop-sale-logo-design-png-image_5069958.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCartShopping,
  faCreditCard,
  faDesktopAlt,
  faHouseChimneyCrack,
  faIdCard,
  faKeyboard,
  faLaptopCode,
  faMobileAndroid,
  faNavicon,
  faRotateLeft,
  faSun,
  faTablet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Search from "antd/es/input/Search";
import { Link } from "react-router-dom";
import { CART } from "../../commons/ConstantURL";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";
import { CartList } from "../../types/Cart.type";
import { screen } from '@testing-library/react';

export interface IHeaderProps {}
const Header: React.FC<IHeaderProps> = ({ ...props }) => {
  const cartList = useSelector((state: RootState) => state.cartList.list);
  const [countCart, setCountCart] = useState<number>(0);
  const [isVisibleNavMobile, setIsVisibleNavMobile] = useState<boolean>(false);
  useEffect(() => {
    const res = cartList.reduce((total: number, currentValue: CartList) => {
      return total + parseInt(currentValue.count);
    }, 0);
    setCountCart(res);
  }, [cartList]);

  const screenWidth = window.screen.width
  useEffect(() => {
      if(screenWidth <= 820){
          setIsVisibleNavMobile(true)
      }
  },[screenWidth])

  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <span className="header-logo-web">phonestore.com</span>
        </div>
        <div className="header-search">
          <Search className="header-search_input" placeholder="Search" />
        </div>
        <div className="header-nav">
          <div className="header-nav-items hidden-mobile">
            <div className="header-nav-items_icon">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <span className="header-nav-items_text">Information</span>
          </div>

          <div className="header-nav-items hidden-mobile">
            <div className="header-nav-items_icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <span className="header-nav-items_text ">Payments</span>
          </div>

          <div className="header-nav-items hidden-mobile">
            <div className="header-nav-items_icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="header-nav-items_text  ">My account</span>
          </div>
          <div className="header-nav-items">
            <span className="header-nav-items_text">
              <Link to={CART} className="removeline">
                <div className="header-nav-items_icon icon-cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  {countCart > 0 && (
                    <div className="count-item-cart">{countCart}</div>
                  )}
                </div>

                <span className="header-nav-items_text">Cart </span>
              </Link>
            </span>
          </div>
          <div
            onClick={() => setIsVisibleNavMobile(!isVisibleNavMobile)}
            className="header-nav-items hidden-pc"
          >
            <div className="header-nav-items_icon ">
              <FontAwesomeIcon icon={faNavicon} />
            </div>
          </div>
        </div>
      </div>

      <div className="subnav">
        <ul className="subnav-list">
          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faMobileAndroid} />
            </div>
            <div className="subnav-list-item_title">Mobile</div>
          </li>

          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="subnav-list-item_title">Laptop</div>
          </li>

          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faTablet} />
            </div>
            <div className="subnav-list-item_title">Tablet</div>
          </li>

          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faDesktopAlt} />
            </div>
            <div className="subnav-list-item_title">PC components</div>
          </li>

          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faKeyboard} />
            </div>
            <div className="subnav-list-item_title">Accessory</div>
          </li>

          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faRotateLeft} />
            </div>
            <div className="subnav-list-item_title">Cheap used machines</div>
          </li>
          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faHouseChimneyCrack} />
            </div>
            <div className="subnav-list-item_title">
              Household electrical appliances
            </div>
          </li>
          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faIdCard} />
            </div>
            <div className="subnav-list-item_title">Sim & Card</div>
          </li>
          <li className="subnav-list-item">
            <div className="subnav-list-item_icon">
              <FontAwesomeIcon icon={faSun} />
            </div>
            <div className="subnav-list-item_title">Promotion</div>
          </li>
        </ul>
      </div>

      {isVisibleNavMobile && (
        <div className="subnav-mobile">
          <ul className="subnav-mobile-list">
            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faMobileAndroid} />
              </div>
              <div className="subnav-mobile-list-item_title">Mobile</div>
            </li>

            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <div className="subnav-mobile-list-item_title">Laptop</div>
            </li>

            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faTablet} />
              </div>
              <div className="subnav-mobile-list-item_title">Tablet</div>
            </li>

            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faDesktopAlt} />
              </div>
              <div className="subnav-mobile-list-item_title">PC components</div>
            </li>

            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faKeyboard} />
              </div>
              <div className="subnav-mobile-list-item_title">Accessory</div>
            </li>

            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faRotateLeft} />
              </div>
              <div className="subnav-mobile-list-item_titles">
                Cheap used machines
              </div>
            </li>
            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faHouseChimneyCrack} />
              </div>
              <div className="subnav-mobile-list-item_title">
                Household electrical appliances
              </div>
            </li>
            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faIdCard} />
              </div>
              <div className="subnav-mobile-list-item_title">Sim & Card</div>
            </li>
            <li className="subnav-mobile-list-item">
              <div className="subnav-mobile-list-item_icon">
                <FontAwesomeIcon icon={faSun} />
              </div>
              <div className="subnav-mobile-list-item_title">Promotion</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
