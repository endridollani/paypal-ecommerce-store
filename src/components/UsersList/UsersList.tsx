/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlusCircleTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../api/productService';
import { getAllUsers } from '../../api/userService';
import { UserModelType } from '../../types/User';
import { StyledButton } from '../styledComponents';

export default function UsersList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);
  const [users, setUsers] = useState<UserModelType[]>([]);

  const fetchUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.items);
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Row justify="space-around" style={{ width: '100%' }} gutter={[0, 30]}>
      <Col span={24} />
      <Col>{users.length ? 'There are ' : 'There are no users yet!'}</Col>
    </Row>
  );
}
