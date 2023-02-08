/* eslint-disable react/jsx-one-expression-per-line */
import { PayPalButtons } from '@paypal/react-paypal-js';
import { Col, Empty, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useCards from '../../../../hooks/useCards';
import { CardType } from '../../../../types/Card';

export default function ShoppingCard() {
  const { cards } = useCards();
  const [total, setTotal] = useState<string>('0');

  if (cards.length === 0) {
    return <Empty />;
  }

  const calculateTotal = () => {
    let sum = 0;
    for (let i = 0; i < cards.length; i += 1) {
      sum +=
        Number(cards[i].product.product_discounted_price) *
        Number(cards[i].quantity);
    }
    setTotal(() => String(sum));
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  const handleOrder = (orderId: string) => {
    console.log(222, orderId);
  };

  return (
    <>
      <Row gutter={[0, 30]} justify="center" style={{ padding: '0 50px' }}>
        <Col span={8}>
          <Row gutter={[0, 20]} justify="center">
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
          <Row justify="center">
            <Col>
              <Typography.Title level={4}>
                Total:
                {total}$
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center">
            <Col>
              <PayPalButtons
                onClick={(data, actions) => {
                  const hasAlreadyBought = false;
                  if (hasAlreadyBought) {
                    toast.error('Has already bought');
                    return actions.reject();
                  }
                  return actions.resolve();
                }}
                createOrder={async (data, actions) =>
                  actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          currency_code: 'USD',
                          value: total,
                          breakdown: {
                            item_total: {
                              currency_code: 'USD',
                              value: total,
                            },
                          },
                        },
                        items: [
                          ...cards.map((c: CardType) => ({
                            name: c.product.product_name,
                            description: c.product.product_description,
                            unit_amount: {
                              currency_code: 'USD',
                              value: String(c.product.product_discounted_price),
                            },
                            quantity: String(c.quantity),
                          })),
                        ],
                      },
                    ],
                    intent: 'CAPTURE',
                    application_context: {
                      shipping_preference: 'NO_SHIPPING',
                      return_url: 'http://localhost:3000/checkout',
                    },
                  })
                }
                onApprove={async (data, action) => {
                  const order = await action.order?.capture();
                  console.log(111, { order });
                  handleOrder(data.orderID);
                }}
                onCancel={() => {
                  toast.success('Successfully canceled order!');
                }}
                onError={() => {
                  toast.error('Sorry ,an error occurred with your purchase!');
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
