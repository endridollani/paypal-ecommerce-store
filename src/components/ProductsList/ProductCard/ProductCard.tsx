import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, List, Row, Skeleton, Space } from 'antd';
import React, { useState } from 'react';
import { ProductModelType } from '../../../types/Product';
import CardItem from '../../Card/CardItem';
import { StyledButton } from '../../styledComponents';
import ProductModal from '../ProductModal';

type ProductCardProps = {
  products: ProductModelType[];
};
export default function ProductCard({ products }: ProductCardProps) {
  const [open, isOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductModelType>();

  const toggleModal = () => isOpen((open) => !open);

  return (
    <>
      <List
        style={{ width: '100%' }}
        grid={{ gutter: 0, column: 3 }}
        size="small"
        pagination={{
          defaultCurrent: 1,
          total: products.length,
          pageSize: 3,
          responsive: true,
          simple: true,
          position: 'top',
        }}
        dataSource={products}
        renderItem={(p) => (
          <Card
            title={p.name}
            style={{ margin: '10px', borderRadius: '8px' }}
            cover={
              <Skeleton
                active
                loading={false}
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
                <StyledButton
                  icon={<DeleteOutlined />}
                  type="link"
                  size="small"
                  ghost
                  danger
                />
              </Space>
            }
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem label="Description:" value={p?.description} />
                  <CardItem label="Price:" value={p?.price} />
                  <CardItem
                    label="Discounted Price:"
                    value={p?.discounted_price}
                  />
                  <CardItem label="Stock:" value={p?.stock} />
                  <CardItem label="Category:" value={p?.category} />
                </Row>
              }
            />
          </Card>
        )}
      />
      {open && product && (
        <ProductModal
          open={open}
          onSubmit={() => console.log('submited')}
          close={() => toggleModal()}
          product={product}
        />
      )}
    </>
  );
}
