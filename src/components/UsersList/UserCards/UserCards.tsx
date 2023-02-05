/* eslint-disable @typescript-eslint/no-unused-vars */
import { EditOutlined } from '@ant-design/icons';
import { Card, List, Row, Skeleton, Space, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllUsers } from '../../../api/userService';
import { UserModelType } from '../../../types/User';
import CardItem from '../../Card/CardItem';
import { StyledButton } from '../../styledComponents';

export default function UserCards() {
  const [open, isOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserModelType>();
  const [users, setUsers] = useState<UserModelType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleModal = () => isOpen((open) => !open);

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
            extra={
              <Space align="baseline" size="large">
                <StyledButton
                  type="link"
                  icon={<EditOutlined />}
                  size="small"
                  className="style-underline"
                  onClick={() => {
                    toggleModal();
                    setUser(user);
                  }}
                />
              </Space>
            }
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem label="Name:" value={user?.user_name} />
                  <CardItem label="Surname:" value={user?.user_surname} />
                  <CardItem label="Email:" value={user?.user_email} span={22} />
                </Row>
              }
            />
          </Card>
        )}
      />
      {open && user && console.log('Hello')}
    </>
  );
}
