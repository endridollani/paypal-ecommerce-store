import { Button, Col, Image, Layout, Row, Space, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { RadarChartOutlined } from '@ant-design/icons';
import React from 'react';
import { StyledButton } from '../../components/styledComponents';

export default function Guest() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Row justify="space-between">
          <Col>
            <Space align="baseline" size="large">
              <RadarChartOutlined
                style={{ color: 'white', fontSize: '25px' }}
                title="Paypal Store"
              />
              <Typography.Title level={4} style={{ color: 'white' }}>
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
                  size="middle"
                  href="/register"
                >
                  Register
                </Button>
              </Col>
              <Col>
                <StyledButton type="default" ghost size="middle" href="/login">
                  Login
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: '82vh' }}>
        <Image
          width="100%"
          height="100%"
          preview={false}
          src="https://wallpapercave.com/wp/wp2747211.jpg"
        />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#001529',
        }}
      >
        <Typography.Text strong style={{ color: 'white' }}>
          PayPal Store ©2023
        </Typography.Text>
      </Footer>
    </Layout>
  );
}
