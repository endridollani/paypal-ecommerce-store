import { EditOutlined } from '@ant-design/icons';
import { Col, Row, Space, Tag, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../../../components/Card/CardItem';
import { StyledButton } from '../../../components/styledComponents';

export default function AccountSettings() {
  const authUserState = useSelector((state: any) => state.authUser);

  return (
    <Row justify="space-between" gutter={[20, 20]}>
      <Col>
        <Space align="baseline">
          <Typography.Title level={4}>Account Settings</Typography.Title>
          <Tag color="blue">{authUserState?.data.user_type}</Tag>
        </Space>
      </Col>
      <Col>
        <StyledButton type="primary" icon={<EditOutlined />} size="large">
          Edit Info
        </StyledButton>
      </Col>
      <Col span={24}>
        <Row gutter={[0, 20]}>
          <CardItem label="Name" value={authUserState?.data.user_name} />
          <CardItem label="Surname" value={authUserState?.data.user_surname} />
          <CardItem label="Email" value={authUserState?.data.user_email} />
          <CardItem label="Gender" value={authUserState?.data.user_gender} />
          <CardItem
            label="BirthDate"
            value={authUserState?.data.user_birthday}
          />
        </Row>
      </Col>
    </Row>
  );
}
