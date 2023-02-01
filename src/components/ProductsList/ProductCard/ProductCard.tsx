import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Col, Image, List, Row, Skeleton, Space, Typography } from 'antd';
import React from 'react';
import { ProductModelType } from '../../../types/Product';
import { StyledButton } from '../../styledComponents';

type ProductCardProps = {
  products: ProductModelType[];
};

export default function ProductCard({ products }: ProductCardProps) {
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
              title={
                <Typography.Title style={{ textAlign: 'center' }} level={4}>
                  {p.name}
                </Typography.Title>
              }
              description={
                <Row justify="start" gutter={[0, 20]}>
                  <Col span={11} offset={2}>
                    <Space direction="vertical">
                      <Typography.Text>Description:</Typography.Text>
                      <Typography.Title level={5}>
                        {p?.description || '-'}
                      </Typography.Title>
                    </Space>
                  </Col>
                  <Col span={8} offset={2}>
                    <Space direction="vertical">
                      <Typography.Text>Price:</Typography.Text>
                      <Typography.Title level={5}>
                        {p?.price || '-'}
                      </Typography.Title>
                    </Space>
                  </Col>

                  <Col offset={2} span={11}>
                    <Space direction="vertical">
                      <Typography.Text>Discounted Price:</Typography.Text>
                      <Typography.Title level={5}>
                        {p?.discounted_price || '-'}
                      </Typography.Title>
                    </Space>
                  </Col>

                  <Col offset={2} span={8}>
                    <Space direction="vertical">
                      <Typography.Text>Stock:</Typography.Text>
                      <Typography.Title level={5}>
                        {p?.stock || '-'}
                      </Typography.Title>
                    </Space>
                  </Col>
                  <Col offset={2} span={8}>
                    <Space direction="vertical">
                      <Typography.Text>Category:</Typography.Text>
                      <Typography.Title level={5}>
                        {p?.category || '-'}
                      </Typography.Title>
                    </Space>
                  </Col>
                </Row>
              }
            />
          </Card>
        )}
      />
    </>
  );
}
