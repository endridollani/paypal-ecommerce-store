import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct, updateProduct } from '../../../api/productService';
import { fetchProducts } from '../../../redux/products/action';
import { InputTypes } from '../../../types/FormTypes';
import { ProductModelType } from '../../../types/Product';
import GenericForm from '../../GenericForm/GenericForm';
import GenericModal from '../../GenericModal/GenericModal';
import { FormItemStyled, StyledButton } from '../../styledComponents';

type ProductModalProps = {
  close: () => void;
  product?: ProductModelType | undefined;
};

export default function ProductModal({ close, product }: ProductModalProps) {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const ProductFormConfiguration: any[][] = useMemo(
    () => [
      [
        {
          col: 11,
          offset: 0,
          name: 'product_name',
          label: 'Name',
          type: 'input',
          defaultValue: product?.product_name,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
        {
          col: 11,
          offset: 2,
          name: 'product_price',
          label: 'Price',
          type: 'input',
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.product_price,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 11,
          offset: 0,
          name: 'product_discounted_price',
          label: 'Discounted Price',
          type: InputTypes.INPUT,
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.product_discounted_price,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
        {
          col: 11,
          offset: 2,
          name: 'product_stock',
          label: 'Stock',
          type: 'input',
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.product_stock,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 11,
          offset: 0,
          name: 'product_category',
          label: 'category',
          type: 'input',
          defaultValue: product?.product_category,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
        {
          col: 11,
          offset: 2,
          name: 'images',
          label: 'Image URL',
          type: 'input',
          defaultValue: product?.images[0],
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 24,
          offset: 0,
          name: 'product_description',
          label: 'Description',
          type: InputTypes.TEXTAREA,
          defaultValue: product?.product_description,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
    ],
    []
  );

  const onFinish = async (values: any) => {
    setIsLoading(true);
    const payload: any = {
      name: values.product_name,
      category: values.product_category,
      description: values.product_description,
      discounted_price: Number(values.product_discounted_price),
      stock: Number(values.product_stock),
      price: Number(values.product_price),
      images: [values.images],
    };
    if (product?.product_id) {
      updateProduct(product.product_id, payload)
        .then((response) => {
          if (response.status === 200) {
            toast.success('Product updated successfully!');
            dispatch(
              fetchProducts({
                category: payload.category,
              })
            );
          }
        })
        .catch(() => {
          toast.error('Product faild to update!');
        });
      close();
      return;
    }
    createProduct(payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Product created successfully!');
          dispatch(
            fetchProducts({
              category: payload.category,
            })
          );
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

  return (
    <GenericModal
      title={`${product ? 'Edit' : 'Add'} Product`}
      open
      close={close}
    >
      <GenericForm
        formConfigurations={ProductFormConfiguration}
        form={form}
        onFinish={onFinish}
        loading={isLoading}
      >
        <FormItemStyled>
          <Row justify="end">
            <Col>
              <StyledButton
                type="primary"
                size="large"
                htmlType="reset"
                danger
                ghost
                onClick={() => close()}
              >
                Cancel
              </StyledButton>
            </Col>
            <Col offset={2}>
              <StyledButton type="primary" size="large" htmlType="submit">
                Submit
              </StyledButton>
            </Col>
          </Row>
        </FormItemStyled>
      </GenericForm>
    </GenericModal>
  );
}
