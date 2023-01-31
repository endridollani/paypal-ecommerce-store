import { LogoutOutlined } from '@ant-design/icons';
import { Avatar, Col, Popconfirm, Row, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../../../components/styledComponents';
import GenericHeader from '../../../components/UI/GenericHeader';
import { onLogout } from '../../../redux/authUser/actions';
import { clearLocalStorage } from '../../../utils/utilFunctions';
import AdminInfo from '../AdminInfo';

export default function Header() {
  const authUserState = useSelector((state: any) => state.authUser);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToogleModal = () => setIsVisible((isVisible) => !isVisible);

  if (!authUserState?.data) return null;
  const initials = `${authUserState.data.user_name.charAt()} ${authUserState.data.user_surname.charAt()}`;
  return (
    <GenericHeader>
      <Row gutter={[40, 0]}>
        <Col>
          <Tag color="#adc6ff" className="admin-tag">
            ADMIN
          </Tag>
        </Col>
        <Col>
          <Avatar
            shape="square"
            size="large"
            className="capitalize avatar"
            onClick={() => onToogleModal()}
          >
            {initials}
          </Avatar>
        </Col>
        <Col>
          <Popconfirm
            placement="bottom"
            title="Are you sure you want to log out?"
            onConfirm={() => {
              dispatch(onLogout());
              clearLocalStorage();
              navigate('/guest');
            }}
            okText="Yes"
            cancelText="No"
          >
            <StyledButton
              ghost
              type="link"
              size="large"
              icon={<LogoutOutlined />}
              className="options-btn"
            />
          </Popconfirm>
        </Col>
      </Row>
      {isVisible && (
        <AdminInfo close={() => onToogleModal()} open={isVisible} />
      )}
    </GenericHeader>
  );
}
