import { Col, Form, Row, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import {
  CenterContainer,
  StyledButton,
  StyledInput,
} from '../../components/styledComponents';
import Card from '../../components/Card';

export default function Register() {
  const [form] = useForm();
  const [loading, isLoading] = useState(false);
  const onFinish = async () => {
    isLoading(true);
  };

  return (
    <CenterContainer>
      <Card title="Register" centerTitle>
        <Row justify="center" gutter={[0, 20]}>
          <Col span={18}>
            <Spin spinning={loading}>
              <Form
                size="large"
                layout="vertical"
                form={form}
                onFinish={onFinish}
              >
                <Row justify="start" gutter={[0, 20]}>
                  <Col span={11}>
                    <Form.Item
                      name="name"
                      label="First Name"
                      rules={[
                        { required: true, message: 'First name is required!' },
                      ]}
                    >
                      <StyledInput placeholder="First Name" />
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={2}>
                    <Form.Item
                      name="surname"
                      label="Last Name"
                      rules={[
                        { required: true, message: 'Last name is required!' },
                      ]}
                    >
                      <StyledInput placeholder="Last Name" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: 'Email is required!' },
                      ]}
                    >
                      <StyledInput placeholder="Email" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        { required: true, message: 'Password is required!' },
                      ]}
                    >
                      <StyledInput type="password" placeholder="Password" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Spin>
          </Col>
          <Col span={18}>
            <Row justify="end" gutter={[20, 0]}>
              <Col>
                <StyledButton size="large" type="link" href="/login">
                  Log In
                </StyledButton>
              </Col>
              <Col>
                <StyledButton
                  size="large"
                  type="primary"
                  onClick={() => form.submit()}
                >
                  Register
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </CenterContainer>
  );
}
