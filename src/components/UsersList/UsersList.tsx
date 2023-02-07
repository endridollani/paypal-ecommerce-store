import { Col, Row } from 'antd';
import React from 'react';
import UserCards from './UserCards/UserCards';

export default function UsersList() {
  return (
    <Row justify="space-around" className="full-width" gutter={[0, 30]}>
      <Col span={24}>
        <UserCards />
      </Col>
    </Row>
  );
}
