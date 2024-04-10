import React, { useEffect, useState } from "react";
import HeaderTable from "../../componentCore/HeaderTable";
import {  Modal } from "antd";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
  findProductByID,
  getProduct,
} from "../../../reducers/productList.reducers";
import { callAPI, callAPIGET } from "../../../utils/APICaller";
import { useSelector } from "react-redux";
import { useForm } from "antd/lib/form/Form";
import { RootState } from "../../../reducers/Store";
import TableProduct from "./TableProduct";
import { API_PRODUCT } from "../../../commons/API";
import FormProductList from "./FormProductList";

export interface IProductListProps {}
const ProductList: React.FC<IProductListProps> = ({ ...props }) => {
  const [form] = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitalModal] = useState<String>("");
  const productList = useSelector((state: RootState) => state.productList.list);
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    if (values.id) {
      callAPI(`${API_PRODUCT}/${values.id}`, "PUT", values).then((data) => {
        if (data) {
          dispatch(editProduct(data));
          handleCancel();
          form.resetFields();
        }
      });
    } else {
      callAPI(API_PRODUCT, "POST", values).then((data) => {
        if (data) {
          dispatch(addProduct(data));
          handleCancel();
          form.resetFields();
        }
      });
    }
  };

  useEffect(() => {
    callAPIGET(API_PRODUCT, "GET").then((data) => {
      if (data) {
        dispatch(getProduct(data));
      }
    });
  }, []);
  const handleDelete = (id: string) => {
    callAPIGET(`${API_PRODUCT}/${id}`, "DELETE").then((data) => {
      if (data) {
        dispatch(deleteProduct(id));
      }
    });
  };
  const handleEdit = (id: string) => {
    dispatch(findProductByID({ id: id, form: form }));
    setIsModalOpen(true);
    setTitalModal("Edit Product");
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCreate = () => {
    setIsModalOpen(true);
    setTitalModal("Create Product");
  };

  return (
    <div>
      <Modal
        title={titleModal}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"70%"}
      >
        <FormProductList form={form} onFinish={onFinish} />
      </Modal>
      <HeaderTable title="Products" onCreate={onCreate} />
      <TableProduct
        data={productList}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default ProductList;
