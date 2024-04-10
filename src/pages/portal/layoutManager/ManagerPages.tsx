import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuLeft from "./MenuLeft";
import ContentLayout from "./ContentLayout";

export interface IManagerPagesProps {
  children?: React.ReactNode;
}
const ManagerPages: React.FC<IManagerPagesProps> = ({ ...props }) => {
  return (
    <div>
      <div className="header-layout">
        <div className="header-layout-name">Admin</div>
        <div className="header-layout-setting">
          <div className="header-layout-setting-item">
            <div className="setting-item_icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="header-layout-setting-item">
            <div className="setting-item_icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
        </div>
      </div>
      <div className="layout-portal">
        <div className="layout-portal-left">
          <MenuLeft />
        </div>
        <div className="layout-portal-right">
          <ContentLayout>{props.children}</ContentLayout>
        </div>
      </div>
    </div>
  );
};

export default ManagerPages;
