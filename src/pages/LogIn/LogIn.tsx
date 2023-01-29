/* eslint-disable import/no-extraneous-dependencies */
import { Col, Form, notification, Row, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { login } from '../../api/userLoginService';
import {
  CenterContainer,
  StyledButton,
  StyledInput,
} from '../../components/styledComponents';
import { LoginType } from '../../types/Login';
import Card from '../../components/Card';

export default function LogIn() {
  const [form] = useForm();
  const [loading, isLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values: LoginType) => {
    isLoading(true);
    login(values)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.user.user_type === 'admin') {
            Cookies.set('admin', 'loginTrue');
            Cookies.remove('user');
          } else {
            Cookies.set('user', 'loginTrue');
            Cookies.remove('admin');
          }
          api.success({
            message: 'Loged in successfully!',
            placement: 'topRight',
          });
        }
      })
      .catch(() => {
        api.error({
          message: 'Loged in failed!',
          placement: 'topRight',
        });
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return (
    <CenterContainer>
      {contextHolder}
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
