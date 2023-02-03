import { Col, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { createProduct } from '../../../api/productService';
import { InputTypes } from '../../../types/FormTypes';
import { ProductCreateType, ProductModelType } from '../../../types/Product';
import GenericForm from '../../GenericForm/GenericForm';
import GenericModal from '../../GenericModal/GenericModal';
import { FormItemStyled, StyledButton } from '../../styledComponents';

type ProductModalProps = {
  open: boolean;
  close: () => void;
  onSubmit: () => void;
  product?: ProductModelType | undefined;
};

export default function ProductModal({
  open,
  close,
  onSubmit,
  product,
}: ProductModalProps) {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const ProductFormConfiguration: any[][] = useMemo(
    () => [
      [
        {
          col: 11,
          offset: 0,
          name: 'name',
          label: 'Name',
          type: 'input',
          defaultValue: product?.name,
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
          name: 'price',
          label: 'Price',
          type: 'input',
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.price,
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
          name: 'discounted_price',
          label: 'Discounted Price',
          type: InputTypes.INPUT,
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.discounted_price,
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
          name: 'stock',
          label: 'Stock',
          type: 'input',
          inputProps: { type: 'number', min: 0 },
          defaultValue: product?.stock,
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
          name: 'category',
          label: 'category',
          type: 'input',
          defaultValue: product?.category,
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
          name: 'description',
          label: 'Description',
          type: InputTypes.TEXTAREA,
          defaultValue: product?.description,
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

  const onFinish = async (values: ProductCreateType) => {
    setIsLoading(true);
    const payload: ProductCreateType = {
      ...values,
      discounted_price: Number(values.discounted_price),
      stock: Number(values.stock),
      price: Number(values.price),
      images: ['https://pixlr.com/images/index/remove-bg.webp'],
    };
    if (product?.id) {
      console.log(111, 'Update', product);
      close();
      return;
    }
    createProduct(payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Product created successfully!');
          onSubmit();
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
      open={open}
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
              <StyledButton
                type="primary"
                size="large"
                htmlType="submit"
                onClick={() => form.submit()}
              >
                Submit
              </StyledButton>
            </Col>
          </Row>
        </FormItemStyled>
      </GenericForm>
    </GenericModal>
  );
}
