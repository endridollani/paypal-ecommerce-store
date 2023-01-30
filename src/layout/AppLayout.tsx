/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Image, Layout, Row, Space, Typography } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { RadarChartOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../components/styledComponents';
import { isAdmin, isUser } from '../utils/utilFunctions';
import { IS_LOGGEDIN } from '../utils/constants';
import { getAuthUser } from '../redux/authUser/actions';

export enum SCREE_SIZE {
  SMALL = 'sm',
  MEDIUM = 'md',
}

export function getWindowSize() {
  const { innerWidth } = window;
  if (innerWidth < 1200) {
    return SCREE_SIZE.SMALL;
  }
  return SCREE_SIZE.MEDIUM;
}

export default function App() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);
  const isNormalUser = isUser(authUserState);
  const isUserLoggedIn = localStorage.getItem(IS_LOGGEDIN);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [windowSize, setWindowSize] = useState<
    SCREE_SIZE.SMALL | SCREE_SIZE.MEDIUM
  >(getWindowSize());

  useEffect(() => {
    if (isUserLoggedIn) {
      dispatch(getAuthUser());
    }
  }, []);
  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate('/guest');
    }
  }, [authUserState]);

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
