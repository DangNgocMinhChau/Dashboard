import { Avatar, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";
import { IDataMenu, dataMenu } from "../../../routers/ListRouter";

export interface IMenuLeftProps {}
const MenuLeft: React.FC<IMenuLeftProps> = ({ ...props }) => {
  const renderMenu = (data: IDataMenu[], parentKey: number | string = 0) => {
    return data.map((item: IDataMenu, index: number) =>
      Array.isArray(item.children) && item.children.length > 0 ? (
        <SubMenu key={`${parentKey}-${index}`} title={item.name}>
          {renderMenu(item.children, `${parentKey}-${index}`)}
        </SubMenu>
      ) : (
        <Menu.Item key={`${parentKey}-${index}`}>
          <Link key={index} className="nav-link" to={item.to}>
            <span>
              {" "}
              <i className="icon-menu-custom fa fa-circle"></i>
              {item.name}
            </span>
          </Link>
        </Menu.Item>
      )
    );
  };
  return (
    <div className="menu-left">
      <div className="card-user-name">
        <div className="card-user-name-avatar">
          <Avatar shape="square" size={64} icon={<UserOutlined />} />
        </div>
        <div className="card-user-name-title">Username</div>
      </div>
      <hr />
      <Menu mode="inline">{renderMenu(dataMenu)}</Menu>
    </div>
  );
};

export default MenuLeft;
