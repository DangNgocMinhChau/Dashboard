import React from "react";
import {
  faCartPlus,
  faMessage,
  faSearch,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IDashboardProps {}
const Dashboard: React.FC<IDashboardProps> = ({ ...props }) => {
  return (
    <div className="statistical">
      <div className="statistical-item">
        <div className="statistical-item-icon primary">
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
        <div className="statistical-item-count">120</div>
        <div className="statistical-item-title">New Orders</div>
      </div>
      <div className="statistical-item">
        <div className="statistical-item-icon yello">
          <FontAwesomeIcon icon={faMessage} />
        </div>
        <div className="statistical-item-count ">52</div>
        <div className="statistical-item-title">Comments</div>
      </div>
      <div className="statistical-item">
        <div className="statistical-item-icon green">
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
        <div className="statistical-item-count">24</div>
        <div className="statistical-item-title">New Users</div>
      </div>
      <div className="statistical-item">
        <div className="statistical-item-icon red">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="statistical-item-count">25.2K</div>
        <div className="statistical-item-title">Page Views</div>
      </div>
    </div>
  );
};
export default Dashboard;
