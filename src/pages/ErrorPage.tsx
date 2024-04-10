import React from "react";
import { useHistory } from 'react-router-dom';

export interface IErrorPageProps {}
const ErrorPage: React.FC<IErrorPageProps> = ({ ...props }) => {
  const history = useHistory();
  return (
    <div>
      <div className="error-pages">
        <div className="error-pages-text">404 - PAGE NOT FOUND</div>
        <div className="error-pages-subtext">
          The website is under development, please come back later!
        </div>
        <div onClick={() => history.goBack()} className="error-pages-btn">Go to back</div>
      </div>
    </div>
  );
};
export default ErrorPage;
