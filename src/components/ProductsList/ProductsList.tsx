/* eslint-disable react/no-children-prop */
import { PlusCircleTwoTone, SearchOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import SelectComponent from '../Select';
import { StyledButton, StyledInput } from '../styledComponents';
import ProductCards from './ProductCards';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);

  return (
    <Row justify="space-around" style={{ width: '100%' }} gutter={[0, 40]}>
      <Col span={24}>
        <Col>
          <Row justify="end" gutter={[0, 30]}>
            <Col>
              <StyledButton
                type="primary"
                size="large"
                onClick={() => onToogleModal()}
                icon={<PlusCircleTwoTone />}
              >
                Add Product
              </StyledButton>
            </Col>
            <Col span={24}>
              <StyledInput
                type="search"
                placeholder="Search keyword"
                onChange={(values) => console.log(values)}
                prefix={<SearchOutlined />}
                suffix={<SelectComponent />}
              />
            </Col>
          </Row>
        </Col>
      </Col>
      <Col span={24}>
        <ProductCards />
      </Col>
      {isOpen && (
        <ProductModal
          open={isOpen}
          close={() => {
            onToogleModal();
          }}
        />
      )}
    </Row>
  );
}
