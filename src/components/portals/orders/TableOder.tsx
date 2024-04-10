import React from "react";
import { Space, Table, Tabs } from "antd";
import type { TableProps } from "antd";
import { OrderBuy } from "../../../types/OrderBuy";
import { TabsProps } from "antd/lib";
import { callAPI } from "../../../utils/APICaller";
import { API_ORDERBUY } from "../../../commons/API";
import { useDispatch } from "react-redux";
import { deliverOrderBuy } from "../../../reducers/order.reducers";

export interface ITableOrderProps {
  data?: OrderBuy[];
  columns?: OrderBuy;
}
const TableOrder: React.FC<ITableOrderProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  const onDelivery = (item: OrderBuy) => {
    callAPI(`${API_ORDERBUY}/${item.id}`, "PUT", {
      ...item,
      status: true,
    }).then((res) => {
      if (res) {
        dispatch(deliverOrderBuy(res));
      }
    });
  };

  const renderAction = (data: OrderBuy) => {
    return (
      <>
        {data.status ? (
          <span className="green">delivered</span>
        ) : (
          <a onClick={() => onDelivery(data)}>Order confirmation </a>
        )}
      </>
    );
  };

  const columns: TableProps<OrderBuy>["columns"] = [
    {
      title: "Code",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name Customer",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "addres",
      key: "addres",
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
        {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">{renderAction(record)}</Space>
      ),
    },
  ];

  const columnsDelivery: TableProps<OrderBuy>["columns"] = [
    {
      title: "Code",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name Customer",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "addres",
      key: "addres",
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      key: "phonenumber",
    },
        {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Space size="middle">{renderAction(record)}</Space>
      ),
    },
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "New orders",
      children: (
        <Table
          columns={columns}
          dataSource={props.data?.filter(
            (item: OrderBuy) => item.status === false
          )}
          scroll={{ y: 340 }}
        />
      ),
    },
    {
      key: "2",
      label: "Delivered",
      children: (
        <Table
          columns={columnsDelivery}
          dataSource={props.data?.filter(
            (item: OrderBuy) => item.status === true
          )}
          scroll={{ y: 340 }}
        />
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
};
export default TableOrder;
