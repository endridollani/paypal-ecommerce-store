import { Card, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllUsers } from '../../../api/userService';
import { UserModelType } from '../../../types/User';
import CardItem from '../../Card/CardItem';
import { StyledAdminTag } from '../../styledComponents';

export default function UserCards() {
  const [loading, isLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserModelType[]>([]);

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
    <List
      className="full-width"
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
            <StyledAdminTag type={user.user_type === 'admin'}>
              {user?.user_type}
            </StyledAdminTag>
          }
          className="list-card"
        >
          <Card.Meta
            description={
              <Row justify="space-between" gutter={[0, 10]}>
                <CardItem label="Name:" value={user?.user_name} />
                <CardItem label="Surname:" value={user?.user_surname} />
                <CardItem label="Gender:" value={user?.user_gender} span={22} />
                <CardItem label="Email:" value={user?.user_email} span={22} />
              </Row>
            }
          />
        </Card>
      )}
    />
  );
}
