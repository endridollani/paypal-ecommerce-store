/* eslint-disable @typescript-eslint/no-unused-vars */
import { EditOutlined } from '@ant-design/icons';
import { Card, List, Row, Skeleton, Space, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllUsers } from '../../../api/userService';
import EditUser from '../../../pages/Admin/AccountSettings/EditUser';
import { UserModelType } from '../../../types/User';
import CardItem from '../../Card/CardItem';
import { StyledButton } from '../../styledComponents';

export default function UserCards() {
  const [open, isOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserModelType>();
  const [users, setUsers] = useState<UserModelType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchUsers = async () => {
    isLoading(true);
    getAllUsers()
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.items);
        }
      })
      .catch(() => {
        toast.error('Failed to get all users!');
      })
      .finally(() => {
        isLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <List
        style={{ width: '100%' }}
        grid={{ gutter: 0, column: 3 }}
        size="small"
        loading={loading}
        pagination={{
          defaultCurrent: 1,
          total: users.length,
          pageSize: 6,
          responsive: true,
          simple: true,
          position: 'top',
        }}
        dataSource={users}
        renderItem={(user) => (
          <Card
            title={
              <Tag color={user.user_type === 'admin' ? 'blue' : 'green'}>
                {user?.user_type}
              </Tag>
            }
            style={{ margin: '10px', borderRadius: '8px' }}
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem label="Name:" value={user?.user_name} />
                  <CardItem label="Surname:" value={user?.user_surname} />
                  <CardItem
                    label="Gender:"
                    value={user?.user_gender}
                    span={22}
                  />
                  <CardItem label="Email:" value={user?.user_email} span={22} />
                </Row>
              }
            />
          </Card>
        )}
      />
    </>
  );
}
