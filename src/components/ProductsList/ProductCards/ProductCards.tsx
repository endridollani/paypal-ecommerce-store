import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, List, Popconfirm, Row, Skeleton, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProduct } from '../../../api/productService';
import { useProductData } from '../../../hooks/useProductData';
import { fetchProducts } from '../../../redux/products/action';
import { ProductModelType } from '../../../types/Product';
import CardItem from '../../Card/CardItem';
import { StyledButton } from '../../styledComponents';
import ProductModal from '../ProductModal';

export default function ProductCards() {
  const { products, loading, totalItems, currentPages } = useProductData();
  const [open, isOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductModelType>();
  const dispatch = useDispatch();

  const toggleModal = () => isOpen((open) => !open);

  const removeProduct = async (id: number, category: string) => {
    deleteProduct(id)
      .then(() => {
        toast.success('Product deleted successfully!');
        dispatch(fetchProducts({ category }));
      })
      .catch(() => {
        toast.error('Failed to delete product');
      });
  };

  return (
    <>
      <List
        style={{ width: '100%' }}
        grid={{ gutter: 0, column: 3 }}
        size="small"
        loading={loading}
        pagination={{
          defaultCurrent: currentPages,
          total: totalItems,
          pageSize: 3,
          responsive: true,
          simple: true,
          position: 'top',
        }}
        dataSource={products as ProductModelType[]}
        renderItem={(p) => (
          <Card
            title={p.product_name}
            style={{ margin: '10px', borderRadius: '8px' }}
            cover={
              <Skeleton
                active
                loading={loading}
                paragraph={{ rows: 1, width: '100%' }}
              >
                <Image src={p.images[0]} style={{ padding: '10px' }} />
              </Skeleton>
            }
            extra={
              <Space align="baseline" size="large">
                <StyledButton
                  type="link"
                  icon={<EditOutlined />}
                  size="small"
                  className="style-underline"
                  onClick={() => {
                    toggleModal();
                    setProduct(p);
                  }}
                />
                <Popconfirm
                  title="Are you sure you want to delete?"
                  onConfirm={() =>
                    removeProduct(p.product_id, p.product_category)
                  }
                  trigger="click"
                >
                  <StyledButton
                    icon={<DeleteOutlined />}
                    type="link"
                    size="small"
                    ghost
                    danger
                  />
                </Popconfirm>
              </Space>
            }
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem
                    label="Description:"
                    value={p?.product_description}
                    span={24}
                  />
                  <CardItem label="Price:" value={p?.product_price} />
                  <CardItem
                    label="Discounted Price:"
                    value={p?.product_discounted_price}
                  />
                  <CardItem label="Stock:" value={p?.product_stock} />
                  <CardItem label="Category:" value={p?.product_category} />
                </Row>
              }
            />
          </Card>
        )}
      />
      {open && product && (
        <ProductModal
          close={() => {
            toggleModal();
          }}
          product={product}
        />
      )}
    </>
  );
}
