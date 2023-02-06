import { EditOutlined } from '@ant-design/icons';
import { Col, Empty, Row, Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isAdmin } from '../../utils/utilFunctions';
import CardItem from '../Card/CardItem';
import { StyledButton } from '../styledComponents';
import EditUser from './EditUser';

export default function AccountSettings() {
  const [open, isOpen] = useState<boolean>(false);
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);

  const toogleModal = () => isOpen((open) => !open);

  if (!authUserState.data) return <Empty />;

  return (
    <Row justify="start" gutter={[0, 20]}>
      <Col span={24}>
        <Row justify="end">
          <Col>
            <StyledButton
              type="primary"
              icon={<EditOutlined />}
              size="large"
              onClick={() => toogleModal()}
            >
              Edit Info
            </StyledButton>
          </Col>
        </Row>
      </Col>
      <Col>
        <Space align="baseline">
          <Typography.Title level={4}>Account Settings</Typography.Title>
          {isAdminUser && (
            <Tag color="blue">{authUserState?.data.user_type}</Tag>
          )}
        </Space>
      </Col>
      <Col span={24}>
        <Row gutter={[0, 20]}>
          <CardItem label="Name" value={authUserState?.data.user_name} />
          <CardItem label="Surname" value={authUserState?.data.user_surname} />
          <CardItem label="Email" value={authUserState?.data.user_email} />
          <CardItem label="Gender" value={authUserState?.data.user_gender} />
        </Row>
      </Col>
      {open && <EditUser close={() => toogleModal()} />}
    </Row>
  );
}
