import React from "react";
import { Button, Form, Input } from "antd";
import { OrderBuy } from "../../types/OrderBuy";

export interface IFormCartProps {
  onSubmit: any;
}

const FormCart: React.FC<IFormCartProps> = ({ ...props }) => {
  const { onSubmit } = props;
  return (
    <div>
      <div className="cart-infor-buy-form">
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item<OrderBuy>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<OrderBuy>
            label="Address"
            name="addres"
            rules={[{ required: true, message: "Please input your Address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<OrderBuy>
            label="Phone number"
            name="phonenumber"
            rules={[
              { required: true, message: "Please enter your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<OrderBuy> label="Notes" name="note">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
            <Button style={{ width: "150px" }} type="default" htmlType="submit">
              Buy
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormCart;
