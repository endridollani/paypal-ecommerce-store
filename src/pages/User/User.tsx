import { Col, Row, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import React from 'react';
import { useSelector } from 'react-redux';
import AccountSettings from '../../components/AccountSettings';
import ProductList from '../../components/ProductsList/ProductsList';
import UsersList from '../../components/UsersList';
import AppContent from '../../layout/AppContent';
import { isAdmin } from '../../utils/utilFunctions';

export default function User() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);

  return (
    <AppContent>
      <Row justify="space-between" style={{ width: '100%' }}>
        <Col span={24}>
          <Tabs tabPosition="left">
            {isAdminUser && (
              <TabPane key="0" tab="Users">
                <UsersList />
              </TabPane>
            )}
            <TabPane key="1" tab="Products">
              <ProductList />
            </TabPane>
            <TabPane key="2" tab="Settings">
              <AccountSettings />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </AppContent>
  );
}
