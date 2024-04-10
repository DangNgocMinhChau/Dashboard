import {
  faHardDrive,
  faMemory,
  faMicrochip,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/Store";
import { callAPIGET } from "../../utils/APICaller";
import { useDispatch } from "react-redux";
import { getProduct } from "../../reducers/productList.reducers";
import { ProductList } from "../../types/Product.type";
import { getItem } from "../../reducers/cartList.reducers";
import { API_PRODUCT } from "../../commons/API";

export interface IProductPageProps {}
const ProductPage: React.FC<IProductPageProps> = ({ ...props }) => {
  const productList = useSelector((state: RootState) => state.productList.list);

  const dispatch = useDispatch();
  
  useEffect(() => {
    callAPIGET(API_PRODUCT, "GET").then((data) => {
      if (data) {
        dispatch(getProduct(data));
      }
    });
  }, []);

  const handleBuy = (data: any) => {
    dispatch(getItem(data));
  };
  const renderInfomationProduct = (item: ProductList) => {
    const dataInfo = [
      {
        icon: faMicrochip,
        content: item.chip,
      },
      {
        icon: faMobile,
        content: item.screenSize,
      },
      {
        icon: faMobile,
        content: `${item.screenSize} inch`,
      },
      {
        icon: faMemory,
        content: `${item.ram} GB`,
      },
      {
        icon: faHardDrive,
        content: `${item.rom} GB`,
      },
    ];
    return (
      <>
        {dataInfo.map((item, index) => {
          return (
            <div key={index} className="product-infomation-item">
              <div className="product-infomation-item_icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="product-infomation-item_content">
                {item.content}{" "}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="product">
      <div className="product-title">New product</div>
      <div className="product-list">
        {productList.map((item: ProductList, index: any) => {
          return (
            <div key={index} className="product-list-item">
              <div className="product-list-item_img">
                <img src={item.image} alt="image product" />
              </div>
              <div className="product-list-item_title">{item.title}</div>
              <div className="product-price">
                <div className="product-price-sale">{item.priceSale}</div>
                <div className="product-price-cost">{item.priceCost}</div>
              </div>
              <div className="product-infomation">
                {renderInfomationProduct(item)}
              </div>
              <div className="product-btn" onClick={() => handleBuy(item)}>
                <div className="product-btn-buy">Buy now</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
