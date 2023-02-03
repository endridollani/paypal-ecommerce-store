import React from 'react';
import { Col, Space, Typography } from 'antd';

type Props = {
  label: string;
  value: string | number | undefined;
};

const CardItem: React.FC<Props> = ({ label, value }: Props) => (
  <Col offset={2}>
    <Space direction="vertical">
      <Typography.Text>{label}</Typography.Text>
      <Typography.Title level={5}>{value || '-'}</Typography.Title>
    </Space>
  </Col>
);

export default CardItem;
