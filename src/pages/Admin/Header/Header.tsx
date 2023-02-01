/* eslint-disable indent */
import { Avatar, Button, Dropdown, MenuProps, notification, Space } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../../components/styledComponents';
import GenericHeader from '../../../components/UI/GenericHeader';
import { onLogout } from '../../../redux/authUser/actions';
import { UserData } from '../../../types/User';
import { clearLocalStorage } from '../../../utils/utilFunctions';
import AdminInfo from '../AdminInfo';

export default function Header() {
  const authUserState: UserData | undefined = useSelector(
    (state: any) => state.authUser
  );
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();

  const onToogleModal = () => setIsVisible((isVisible) => !isVisible);

  const initials = authUserState?.data
    ? `${authUserState.data.user_name.charAt(
        0
      )} ${authUserState.data.user_surname.charAt(0)}`
    : undefined;

  const logOut = () => {
    dispatch(onLogout());
    clearLocalStorage();
    navigate('/guest');
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="primary" size="small" onClick={() => logOut()}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Are you sure you want to log out?',
      btn,
      key,
    });
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <StyledButton
          type="link"
          className="style-underline"
          ghost
          size="large"
          onClick={() => onToogleModal()}
        >
          My Account
        </StyledButton>
      ),
    },
    {
      key: '2',
      label: (
        <StyledButton
          type="link"
          className="style-underline"
          ghost
          size="large"
          onClick={() => openNotification()}
        >
          Log Out
        </StyledButton>
      ),
    },
  ];

  return (
    <GenericHeader>
      {contextHolder}
      <Dropdown.Button
        className="header-menu"
        trigger={['click']}
        placement="bottom"
        style={{ paddingBottom: '10px' }}
        icon={
          <Avatar shape="square" size="large" className="capitalize avatar">
            {initials || 'FF'}
          </Avatar>
        }
        menu={{ items }}
      />

      {isVisible && (
        <AdminInfo close={() => onToogleModal()} open={isVisible} />
      )}
    </GenericHeader>
  );
}
