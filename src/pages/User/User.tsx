import { Col, Row, Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import React from 'react';
import { useSelector } from 'react-redux';
import AccountSettings from './AccountSettings';
import ProductList from './ProductsList';
import { StyledUserContent } from '../../components/styledComponents';
import UserCards from './UsersGrid';
import AppContent from '../../layout/AppContent';
import { isAdmin } from '../../utils/utilFunctions';

export default function User() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);

  const adminTab = (
    <TabPane key="0" tab="Users">
      <Row justify="space-around" className="full-width" gutter={[0, 30]}>
        <Col span={24}>
          <UserCards />
        </Col>
      </Row>
    </TabPane>
  );

  return (
    <AppContent>
      <StyledUserContent>
        <Col span={24}>
          <Tabs tabPosition="left">
            {isAdminUser && adminTab}
            <TabPane key="1" tab="Products">
              <ProductList />
            </TabPane>
            <TabPane key="2" tab="Settings">
              <AccountSettings />
            </TabPane>
          </Tabs>
        </Col>
      </StyledUserContent>
    </AppContent>
  );
}
