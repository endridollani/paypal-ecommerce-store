/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Badge,
  Button,
  Col,
  Image,
  Layout,
  Row,
  Space,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import {
  RadarChartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../components/styledComponents';
import { isAdmin, isUser } from '../utils/utilFunctions';
import { IS_LOGGEDIN, USER, USER_ID, USER_ROLE } from '../utils/constants';
import { getAuthUser, onLogout } from '../redux/authUser/actions';

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
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          height: '80px',
          display: 'flex',
        }}
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ width: '100%', padding: '0 80px' }}
        >
          <Col>
            <Space align="baseline" size="large">
              <RadarChartOutlined
                style={{ color: 'white', fontSize: '25px' }}
                title={`${isAdminUser ? 'Paypal Store ADMIN' : 'Paypal Store'}`}
              />
              {isAdminUser ? (
                <>
                  <Typography.Title level={4} style={{ color: 'white' }}>
                    Paypal Store
                  </Typography.Title>
                  <Tag color="purple">ADMIN</Tag>
                </>
              ) : (
                'Paypal Store'
              )}
            </Space>
          </Col>
          <Col>
            <Row justify="start" align="middle" gutter={[50, 0]}>
              {/* <Col style={{ paddingTop: '10px' }}>
                <Badge
                  count={0}
                  showZero
                  color="white"
                  style={{ color: 'black' }}
                >
                  <Avatar
                    icon={<ShoppingCartOutlined />}
                    style={{
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    }}
                    size="large"
                  />
                </Badge>
              </Col> */}
              <Col>
                <Tooltip
                  placement="bottom"
                  trigger="hover"
                  title={
                    <StyledButton
                      type="link"
                      onClick={() => {
                        dispatch(onLogout());
                        navigate('/guest');
                        localStorage.removeItem(USER);
                        localStorage.removeItem(IS_LOGGEDIN);
                        localStorage.removeItem(USER_ROLE);
                        localStorage.removeItem(USER_ID);
                      }}
                    >
                      Log Out
                    </StyledButton>
                  }
                  color="white"
                >
                  <Avatar
                    style={{ backgroundColor: '#efdbff', color: 'black' }}
                    size="large"
                  >
                    {`${authUserState?.data?.user_name.charAt(
                      0
                    )} ${authUserState?.data?.user_surname.charAt(0)}`}
                  </Avatar>
                </Tooltip>
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
}
