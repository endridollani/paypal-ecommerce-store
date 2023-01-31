import { Row, Space, Typography } from 'antd';
import Col from 'antd/es/grid/col';
import React from 'react';
import { useSelector } from 'react-redux';
import GenericModal from '../../../components/GenericModal/GenericModal';
import { UserData } from '../../../types/User';

type AdminInfo = {
  open: boolean;
  close: () => void;
};

export default function AdminInfo({ open, close }: AdminInfo) {
  const authUserState: UserData = useSelector((state: any) => state.authUser);
  return (
    <GenericModal open={open} close={close} title="Information">
      <Row justify="start" gutter={[0, 20]}>
        <Col span={11} offset={2}>
          <Space direction="vertical">
            <Typography.Text>First Name:</Typography.Text>
            <Typography.Title level={5}>
              {authUserState?.data?.user_name || '-'}
            </Typography.Title>
          </Space>
        </Col>
        <Col span={8} offset={2}>
          <Space direction="vertical">
            <Typography.Text>Last Name:</Typography.Text>
            <Typography.Title level={5}>
              {authUserState?.data?.user_surname || '-'}
            </Typography.Title>
          </Space>
        </Col>

        <Col offset={2} span={11}>
          <Space direction="vertical">
            <Typography.Text>Email:</Typography.Text>
            <Typography.Title level={5}>
              {authUserState?.data?.user_email || '-'}
            </Typography.Title>
          </Space>
        </Col>

        <Col offset={2} span={8}>
          <Space direction="vertical">
            <Typography.Text>Gender:</Typography.Text>
            <Typography.Title level={5}>
              {authUserState.data.user_gender || '-'}
            </Typography.Title>
          </Space>
        </Col>
        <Col offset={2} span={8}>
          <Space direction="vertical">
            <Typography.Text>Birth Date:</Typography.Text>
            <Typography.Title level={5}>
              {authUserState.data.user_birthday || '-'}
            </Typography.Title>
          </Space>
        </Col>
      </Row>
    </GenericModal>
  );
}
