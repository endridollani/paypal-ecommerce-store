import { Row, Typography } from 'antd';
import React, { ReactNode } from 'react';
import { StyledGuestContent } from '../../components/styledComponents';
import AppHeader from '../AppHeader';

type GenericContentProps = {
  children: ReactNode;
};

export default function AppContent({ children }: GenericContentProps) {
  return (
    <>
      <AppHeader />
      <StyledGuestContent>
        <Row justify="start" align="middle">
          {children}
        </Row>
        <Typography.Text className="footer">
          © PayPal Store, 2023
        </Typography.Text>
      </StyledGuestContent>
    </>
  );
}
