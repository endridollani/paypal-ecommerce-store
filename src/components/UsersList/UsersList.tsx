/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../api/productService';
import { getAllUsers } from '../../api/userService';
import { UserModelType } from '../../types/User';
import { StyledButton } from '../styledComponents';
import UserCards from './UserCards/UserCards';

export default function UsersList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);

  return (
    <Row justify="space-around" style={{ width: '100%' }} gutter={[0, 30]}>
      <Col span={24}>
        <UserCards />
      </Col>
    </Row>
  );
}
