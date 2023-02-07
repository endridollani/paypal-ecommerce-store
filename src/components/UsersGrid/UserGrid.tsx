import { Card, List, Row } from 'antd';
import React from 'react';
import { useUsersData } from '../../hooks/useUsersData';
import { UserModelType } from '../../types/User';
import CardItem from '../Card/CardItem';
import { StyledAdminTag } from '../styledComponents';

export default function UserGrid() {
  const { users, loading } = useUsersData();

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
      dataSource={users as Array<UserModelType>}
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
