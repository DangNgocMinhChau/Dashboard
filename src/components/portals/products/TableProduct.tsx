import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { ProductList } from "../../../types/Product.type";

export interface ITableProductProps {
  data?: ProductList[];
  columns?: ProductList;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}
const TableProduct: React.FC<ITableProductProps> = ({ ...props }) => {
  const { handleDelete, handleEdit } = props;
  const onDelete = (id: string) => {
    handleDelete(id);
  };

  const onEdit = (id: string) => {
    handleEdit(id);
  };
  const columns: TableProps<ProductList>["columns"] = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Sale",
      dataIndex: "priceSale",
      key: "priceSale",
    },
    {
      title: "Cost",
      dataIndex: "priceCost",
      key: "priceCost",
    },
    {
      title: "Ram",
      dataIndex: "ram",
      key: "ram",
    },
    {
      title: "Rom",
      dataIndex: "rom",
      key: "rom",
    },
    {
      title: "Screen",
      dataIndex: "screenSize",
      key: "screenSize",
    },
    {
      title: "Chip",
      dataIndex: "chip",
      key: "chip",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => onEdit(record.id)}>Edit </a>
          <a onClick={() => onDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={props.data}  />
  );
};
export default TableProduct;
