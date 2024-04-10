import React from "react";
import Dashboard from "./Dashboard";

export interface IContentLayoutProps {
  children?: React.ReactNode;
}
const ContentLayout: React.FC<IContentLayoutProps> = ({ ...props }) => {
  return (
    <div>
      <div className="header-content-layout">
        <div className="title-content">Dashboard</div>
        <Dashboard />
        <div className="body-content">{props.children}</div>
      </div>
    </div>
  );
};
export default ContentLayout;
