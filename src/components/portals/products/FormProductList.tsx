import React from "react";
import { Button, Form, Input, Modal } from "antd";
import { ProductList } from "../../../types/Product.type";

export interface IFormProductListProps {
  form: any;
  onFinish: (values: ProductList) => void;
}
const FormProductList: React.FC<IFormProductListProps> = ({ ...props }) => {
  const { form, onFinish } = props;
  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<ProductList>
          label="id"
          name="id"
          style={{ display: "none" }}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductList>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ProductList>
          label="Image"
          name="image"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ProductList>
          label="Cost"
          name="priceCost"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ProductList>
          label="Sale"
          name="priceSale"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductList>
          label="Ram"
          name="ram"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductList>
          label="Rom"
          name="rom"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductList>
          label="Screen Size"
          name="screenSize"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<ProductList>
          label="Chip"
          name="chip"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<ProductList>
          label="Description"
          name="description"
          rules={[{ required: true, message: "Can not be empty!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormProductList;
