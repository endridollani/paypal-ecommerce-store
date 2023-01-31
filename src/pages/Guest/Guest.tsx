/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Col, Image, Layout, Row, Typography } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledGuestContent,
} from '../../components/styledComponents';
import GenericContent from '../../components/UI/GenericContent/GenericContent';
import GenericHeader from '../../components/UI/GenericHeader';
import EnthusiasticIcon from '../../icons/EnthusiasticIcon';

export default function Guest() {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <GenericHeader>
        <Row gutter={[40, 0]}>
          <Col>
            <StyledButton
              className="btn-light style-underline"
              type="link"
              ghost
              size="large"
              onClick={() => navigate('/login')}
            >
              Login
            </StyledButton>
          </Col>
          <Col>
            <StyledButton
              type="link"
              className="style-underline"
              ghost
              size="large"
              onClick={() => navigate('/register')}
            >
              Register
            </StyledButton>
          </Col>
        </Row>
      </GenericHeader>
      <GenericContent>
        <Row justify="start" align="middle">
          <Col span={12}>
            <Typography.Title level={1} className="hero-section-text">
              <span>Everything you want in one </span>
              <span className="hero-section-word-emphasize">store</span>
            </Typography.Title>
          </Col>
          <Col span={12}>
            <EnthusiasticIcon />
          </Col>
        </Row>
      </GenericContent>
    </Layout>
  );
}
