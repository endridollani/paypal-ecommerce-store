/* eslint-disable @typescript-eslint/no-unused-vars */
import { InboxOutlined } from '@ant-design/icons';
import { Col, Form, Row, Spin, UploadProps } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { RcFile } from 'antd/lib/upload';
import Dragger from 'antd/lib/upload/Dragger';
import { reject } from 'lodash';
import { resolve } from 'path';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { createProduct } from '../../../api/productService';
import { ProductCreateType } from '../../../types/Product';
import { prepereFile } from '../../../utils/utilFunctions';
import GenericModal from '../../GenericModal/GenericModal';
import { StyledButton, StyledInput } from '../../styledComponents';

type ProductModalProps = {
  open: boolean;
  close: () => void;
};

export default function ProductModal({ open, close }: ProductModalProps) {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fileList, setFileList] = useState<RcFile[]>([]);

  const onFinish = async (values: ProductCreateType) => {
    setIsLoading(true);
    const imageContent = await prepereFile(
      form.getFieldValue('images').file?.originFileObj
    );
    const payload: ProductCreateType = {
      ...values,
      discounted_price: Number(values.discounted_price),
      stock: Number(values.stock),
      price: Number(values.price),
      images: ['https://pixlr.com/images/index/remove-bg.webp'],
    };
    createProduct(payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Product created successfully!');
        }
      })
      .catch(() => {
        toast.error('Product faild to create!');
      })
      .finally(() => {
        setIsLoading(false);
        close();
      });
  };

  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
  };
  return (
    <GenericModal title="Product" open={open} close={close}>
      <Row justify="space-around" gutter={[0, 20]}>
        <Col span={24}>
          <Spin spinning={isLoading}>
            <Form
              size="large"
              layout="vertical"
              form={form}
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Name is required!' }]}
              >
                <StyledInput placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  { required: true, message: 'Description is required!' },
                ]}
              >
                <TextArea
                  className="form-item-styled"
                  placeholder="Description"
                />
              </Form.Item>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Price is required!' }]}
              >
                <StyledInput min={0} type="number" placeholder="Price" />
              </Form.Item>
              <Form.Item
                name="discounted_price"
                label="Discounted Price"
                rules={[
                  { required: true, message: 'Discounted Price is required!' },
                ]}
              >
                <StyledInput
                  min={0}
                  type="number"
                  placeholder="Discounted Price"
                />
              </Form.Item>
              <Form.Item
                name="stock"
                label="Stock"
                rules={[{ required: true, message: 'Stock is required!' }]}
              >
                <StyledInput min={0} type="number" placeholder="Stock" />
              </Form.Item>

              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: 'Category is required!' }]}
              >
                <StyledInput placeholder="Category" />
              </Form.Item>

              <Form.Item
                name="images"
                label="Images"
                rules={[
                  {
                    required: true,
                    message: 'At least one image is required!',
                  },
                ]}
              >
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
              </Form.Item>
            </Form>
          </Spin>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <StyledButton
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => form.submit()}
            >
              Submit
            </StyledButton>
          </Row>
        </Col>
      </Row>
    </GenericModal>
  );
}
