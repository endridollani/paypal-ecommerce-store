import { PlusCircleTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { StyledButton } from '../styledComponents';
import ProductCards from './ProductCards';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);

  return (
    <Row justify="space-around" style={{ width: '100%' }} gutter={[0, 40]}>
      <Col span={24}>
        <Row justify="end">
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
        </Row>
      </Col>
      <Col>Search</Col>
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
