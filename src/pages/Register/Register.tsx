import { Col, Layout, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StyledButton } from '../../components/styledComponents';
import Card from '../../components/Card';
import GenericContent from '../../components/UI/GenericContent/GenericContent';
import RegisterPageIcon from '../../icons/RegisterPageIcon';
import { InputTypes } from '../../types/FormTypes';
import GenericForm from '../../components/GenericForm';
import { RegisterType } from '../../types/Register';
import { register } from '../../api/authService';

export default function Register() {
  const [form] = useForm();
  const navigate = useNavigate();
  const [loading, isLoading] = useState(false);

  const RegisterFormConfiguration: any[][] = useMemo(
    () => [
      [
        {
          col: 11,
          offset: 0,
          name: 'name',
          label: 'Name',
          type: 'input',
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
        {
          col: 11,
          offset: 2,
          name: 'surname',
          label: 'Surname',
          type: 'input',
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 24,
          offset: 0,
          name: 'email',
          label: ' Email',
          type: InputTypes.INPUT,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 24,
          offset: 0,
          name: 'password',
          label: 'Password',
          type: 'input',
          inputProps: { type: 'password' },
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
    ],
    []
  );

  const onFinish = async (payload: RegisterType) => {
    isLoading(true);
    register(payload)
      .then((response) => {
        if (response.status === 201) {
          toast.success('Registered successfully!');
          navigate('/users');
        }
      })
      .catch(() => {
        toast.error('Registration failed!');
      })
      .finally(() => {
        isLoading(false);
      });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GenericContent>
        <Row justify="start" align="middle">
          <Col span={11}>
            <RegisterPageIcon />
          </Col>
          <Col span={12}>
            <Card title="Register" centerTitle>
              <GenericForm
                form={form}
                onFinish={onFinish}
                loading={loading}
                formConfigurations={RegisterFormConfiguration}
              >
                <StyledButton size="large" type="primary" htmlType="submit">
                  Register
                </StyledButton>
              </GenericForm>
            </Card>
          </Col>
        </Row>
      </GenericContent>
    </Layout>
  );
}
