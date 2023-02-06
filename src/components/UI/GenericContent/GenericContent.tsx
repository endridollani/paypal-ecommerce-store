import { Row, Typography } from 'antd';
import React, { ReactNode } from 'react';
import AppHeader from '../../../layout/AppHeader';
import { StyledGuestContent } from '../../styledComponents';

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
