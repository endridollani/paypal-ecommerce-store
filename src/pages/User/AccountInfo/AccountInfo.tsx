import { Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserData } from '../../../types/User';
import CardItem from '../../../components/Card/CardItem';
import GenericModal from '../../../components/GenericModal';

type AccountInfo = {
  open: boolean;
  close: () => void;
};

export default function AccountInfo({ open, close }: AccountInfo) {
  const authUserState: UserData | undefined = useSelector(
    (state: any) => state.authUser
  );
  return (
    <GenericModal open={open} close={close} title="Account Information">
      <Row justify="start" gutter={[0, 20]}>
        <CardItem label="First Name" value={authUserState?.data.user_name} />
        <CardItem label="Last Name" value={authUserState?.data.user_surname} />
        <CardItem label="Email" value={authUserState?.data.user_email} />
        <CardItem label="Gender" value={authUserState?.data.user_gender} />
      </Row>
    </GenericModal>
  );
}
