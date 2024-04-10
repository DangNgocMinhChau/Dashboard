import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export interface IHeaderTableProps {
  onCreate: () => void;
  title?: string;
  showBtn?: boolean;
}
const HeaderTable: React.FC<IHeaderTableProps> = ({ ...props }) => {
  const { onCreate, title, showBtn = true } = props;
  return (
    <div>
      <div className="header-table">
        <div className="header-table-title">{title}</div>
        {showBtn && (
          <div className="header-table-function">
            <div onClick={() => onCreate()} className="function-item">
              <div className="function-item_icon green">
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
            </div>
            <div className="function-item">
              <div className="function-item_icon yello">
                <FontAwesomeIcon icon={faInfoCircle} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTable;
