import { Col, Row, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import React from 'react';
import ProductList from '../../components/ProductsList/ProductsList';
import UsersList from '../../components/UsersList';
import AppContent from '../../layout/AppContent';
import AccountSettings from './AccountSettings';

export default function Admin() {
  return (
    <AppContent>
      <Row justify="space-between" style={{ width: '100%' }}>
        <Col span={24}>
          <Tabs tabPosition="left">
            <TabPane key="0" tab="Users">
              <UsersList />
            </TabPane>
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
