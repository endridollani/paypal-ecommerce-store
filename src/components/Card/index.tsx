import { Col, Row, Typography } from 'antd';
import React from 'react';
import { StyledRow } from '../styledComponents';

type IProps = {
  title?: string;
  centerTitle?: boolean;
  children?: React.ReactNode | null;
};

const Card: React.FC<IProps> = ({ title, centerTitle, children }) => (
  <StyledRow>
    <Col span={24}>
      <Row justify={`${centerTitle ? 'center' : 'start'}`}>
        <Col>
          <Typography.Title level={centerTitle ? 1 : 4}>
            {title}
          </Typography.Title>
        </Col>
      </Row>
    </Col>
    <Col span={24}>{children}</Col>
  </StyledRow>
);

Card.defaultProps = {
  title: '',
  centerTitle: false,
  children: null,
};

export default Card;
