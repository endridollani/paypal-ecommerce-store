import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../api/productService';
import { StyledButton } from '../styledComponents';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = () => {
    getAllProducts()
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.items);
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Row justify="space-around" style={{ width: '100%' }}>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <StyledButton
              type="link"
              className="style-underline"
              ghost
              size="large"
              onClick={() => onToogleModal()}
            >
              Add Product
            </StyledButton>
          </Col>
        </Row>
      </Col>
      <Col>{products.length ? 'There are ' : 'There are no products yet!'}</Col>
      {isOpen && (
        <ProductModal
          open={isOpen}
          close={() => {
            onToogleModal();
            fetchProducts();
          }}
        />
      )}
    </Row>
  );
}
