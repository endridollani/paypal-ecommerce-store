import { PlusCircleTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../api/productService';
import { ProductModelType } from '../../types/Product';
import { StyledButton } from '../styledComponents';
import ProductCard from './ProductCard/ProductCard';
import ProductModal from './ProductModal';

const dummyProducts: ProductModelType[] = [
  {
    id: 1,
    name: 'test 1',
    description: 'test 1',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 1',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 2,
    name: 'test 2',
    description: 'test 2',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 21',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 3,
    name: 'test 3',
    description: 'test 3',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 3',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 4,
    name: 'test 4',
    description: 'test 4',
    price: 2,
    discounted_price: 3,
    stock: 2,
    category: 'test 4',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 5,
    name: 'test 5',
    description: 'test 5',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 5',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 6,
    name: 'test 6',
    description: 'test 6',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 6',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 7,
    name: 'test 7',
    description: 'test 7',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 7',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
  {
    id: 8,
    name: 'test 8',
    description: 'test 8',
    price: 2,
    discounted_price: 2,
    stock: 2,
    category: 'test 8',
    images: [
      'https://assets.shpresa.al/shop/2023/01/ba8935eb-itd1652-300x300.jpg',
    ],
  },
];
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
      <Col span={24}>
        {products.length || dummyProducts.length ? (
          <ProductCard products={dummyProducts} />
        ) : (
          'There are no products yet!'
        )}
      </Col>
      {isOpen && (
        <ProductModal
          open={isOpen}
          close={() => onToogleModal()}
          onSubmit={() => fetchProducts()}
        />
      )}
    </Row>
  );
}
