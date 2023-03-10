import { Col, Row, Typography } from 'antd';
import React from 'react';
import { StyledLayout } from '../../components/styledComponents';
import EnthusiasticIcon from '../../icons/EnthusiasticIcon';
import AppContent from '../../layout/AppContent';

export default function Guest() {
  return (
    <StyledLayout>
      <AppContent>
        <Row justify="start" align="middle">
          <Col span={12}>
            <Typography.Title level={1} className="hero-section-text">
              <span>Everything you want in one </span>
              <span className="hero-section-word-emphasize">store</span>
            </Typography.Title>
          </Col>
          <Col span={12}>
            <div className="guest-img">
              <EnthusiasticIcon />
            </div>
          </Col>
        </Row>
      </AppContent>
    </StyledLayout>
  );
}
