/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Image, Layout, Row, Space, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { RadarChartOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { StyledButton } from '../components/styledComponents';

export default function AppLayout() {
  //   useEffect(() => {

  //   }, []);
  return (
    <Layout>
      <Header>
        <Row justify="space-between">
          <Col span={5}>
            <Space align="baseline" size="large">
              <RadarChartOutlined
                style={{ color: 'white', fontSize: '30px' }}
                title="Paypal Store"
              />
              <Typography.Title level={3} style={{ color: 'white' }}>
                PayPal Store
              </Typography.Title>
            </Space>
          </Col>
          <Col>
            <Row gutter={[30, 0]}>
              <Col>
                <Button
                  type="link"
                  style={{ color: 'white' }}
                  ghost
                  size="large"
                  href="/register"
                >
                  Register
                </Button>
              </Col>
              <Col>
                <StyledButton type="default" ghost size="large" href="/login">
                  Login
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '83vh' }}>
        <Image
          width="100%"
          height="100%"
          preview={false}
          src="https://wallpapercave.com/wp/wp2747211.jpg"
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Typography.Text strong>PayPal Store ©2023</Typography.Text>
      </Footer>
    </Layout>
  );
}
