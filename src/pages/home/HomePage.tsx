import React from "react";
import Header from "./Header";

export interface IHomePageProps {
  children: React.ReactNode;
}

const HomePage: React.FC<IHomePageProps> = ({ ...props }) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div className="main-app">{children}</div>
    </div>
  );
};
export default HomePage;
