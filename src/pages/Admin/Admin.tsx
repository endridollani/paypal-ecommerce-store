/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Col, Image, Layout, Row, Tabs, Typography } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import TabPane from 'antd/lib/tabs/TabPane';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductList from '../../components/ProductsList/ProductsList';
import {
  StyledButton,
  StyledGuestContent,
} from '../../components/styledComponents';
import GenericContent from '../../components/UI/GenericContent/GenericContent';
import GenericHeader from '../../components/UI/GenericHeader';
import UsersList from '../../components/UsersList';
import EnthusiasticIcon from '../../icons/EnthusiasticIcon';
import AccountSettings from './AccountSettings';
import Header from './Header';

export default function Admin() {
  const navigate = useNavigate();
  const authUserState = useSelector((state: any) => state.authUser);
  return (
    <>
      <Header />
      <GenericContent>
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
      </GenericContent>
    </>
  );
}
