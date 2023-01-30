import { Col, Form, Row, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  CenterContainer,
  StyledButton,
  StyledInput,
} from '../../components/styledComponents';
import Card from '../../components/Card';
import { isAdmin, isUser } from '../../utils/utilFunctions';
import { onLogin } from '../../redux/authUser/actions';
import { IS_LOGGEDIN } from '../../utils/constants';

export interface LoginUserData {
  email: string;
  password: string;
}

export default function LogIn() {
  const [form] = useForm();
  const [loading, isLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUserState = useSelector((state: any) => state.authUser);

  const isAdminUser = isAdmin(authUserState);
  const isNormalUser = isUser(authUserState);

  const onFinish = async (userCredentials: LoginUserData) => {
    if (loading) return;
    isLoading(true);
    toast.dismiss();
    dispatch(
      onLogin({
        ...userCredentials,
      })
    );
  };

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem(IS_LOGGEDIN);
    if (authUserState.error) {
      isLoading(false);
      toast.error('Invalid credentials. Please try again.');
    }
    if (isUserLoggedIn) {
      isLoading(false);
      if (isAdminUser || isNormalUser) {
        navigate('/home');
      }
    }
  }, [authUserState]);

  return (
    <CenterContainer>
      <Card title="Log in" centerTitle>
        <Row justify="space-around" gutter={[0, 20]}>
          <Col span={24}>
            <Spin spinning={loading}>
              <Form
                size="large"
                layout="vertical"
                form={form}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[{ required: true, message: 'Email is required!' }]}
                >
                  <StyledInput placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Password is required!' }]}
                >
                  <StyledInput type="password" placeholder="Password" />
                </Form.Item>
              </Form>
            </Spin>
          </Col>
          <Col span={24}>
            <Row justify="end" gutter={[20, 0]}>
              <Col>
                <StyledButton size="large" type="link" href="/register">
                  Register
                </StyledButton>
              </Col>
              <Col />
              <Col>
                <StyledButton
                  size="large"
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Log in
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </CenterContainer>
  );
}
