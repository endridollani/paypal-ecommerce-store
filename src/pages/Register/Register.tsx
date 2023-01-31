import { Col, Form, Layout, Row, Spin } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledInput } from '../../components/styledComponents';
import Card from '../../components/Card';
import GenericHeader from '../../components/UI/GenericHeader';
import GenericContent from '../../components/UI/GenericContent/GenericContent';
import RegisterPageIcon from '../../icons/RegisterPageIcon';

export default function Register() {
  const [form] = useForm();
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);
  const onFinish = async () => {
    isLoading(true);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GenericHeader>
        <Row gutter={[40, 0]}>
          <Col>
            <StyledButton
              type="link"
              className="style-underline"
              ghost
              size="large"
              onClick={() => navigate('/login')}
            >
              Login
            </StyledButton>
          </Col>
        </Row>
      </GenericHeader>
      <GenericContent>
        <Row justify="start" align="middle">
          <Col span={11}>
            <RegisterPageIcon />
          </Col>
          <Col span={12}>
            <Card title="Register" centerTitle>
              <Row justify="center" gutter={[0, 20]}>
                <Col span={24}>
                  <Spin spinning={loading}>
                    <Form
                      size="large"
                      layout="vertical"
                      form={form}
                      onFinish={onFinish}
                    >
                      <Row justify="start">
                        <Col span={11}>
                          <Form.Item
                            name="name"
                            label="First Name"
                            rules={[
                              {
                                required: true,
                                message: 'First name is required!',
                              },
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
                              {
                                required: true,
                                message: 'Last name is required!',
                              },
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
                              {
                                required: true,
                                message: 'Password is required!',
                              },
                            ]}
                          >
                            <StyledInput
                              type="password"
                              placeholder="Password"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </Spin>
                </Col>
                <Col span={24}>
                  <Row justify="end" gutter={[20, 0]}>
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
          </Col>
        </Row>
      </GenericContent>
    </Layout>
  );
}
