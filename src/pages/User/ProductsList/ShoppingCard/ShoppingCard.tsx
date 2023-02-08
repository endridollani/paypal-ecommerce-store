/* eslint-disable react/jsx-one-expression-per-line */
import { Col, Empty, Row, Typography } from 'antd';
import React from 'react';
import useCards from '../../../../hooks/useCards';
import { CardType } from '../../../../types/Card';

export default function ShoppingCard() {
  const { cards } = useCards();

  if (cards.length === 0) {
    return <Empty />;
  }

  const total = () => {
    let sum = 0;
    for (let i = 0; i < cards.length; i += 1) {
      sum +=
        Number(cards[i].product.product_discounted_price) *
        Number(cards[i].quantity);
    }
    return sum;
  };

  return (
    <>
      <Row gutter={[0, 30]} className="full-width">
        <Col span={8}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Typography.Text>Products</Typography.Text>
            </Col>
            {cards.map(
              (item: CardType) =>
                item.quantity > 0 && (
                  <Col span={24}>
                    <Typography.Text strong>
                      {item.product.product_name}
                    </Typography.Text>
                  </Col>
                )
            )}
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Typography.Text>Quantity</Typography.Text>
            </Col>
            {cards.map(
              (item: CardType) =>
                item.quantity > 0 && (
                  <Col span={24}>
                    <Typography.Text strong>{item.quantity}</Typography.Text>
                  </Col>
                )
            )}
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <Typography.Text>Price</Typography.Text>
                </Col>
                {cards.map(
                  (item: CardType) =>
                    item.quantity > 0 && (
                      <Col span={24}>
                        <Typography.Text strong>
                          {`${item.product.product_discounted_price} $`}
                        </Typography.Text>
                      </Col>
                    )
                )}
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <Col>
              <Typography.Title level={4}>
                Total:
                {total()}$
              </Typography.Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
