import { Row, Typography } from 'antd';
import React, { ReactNode } from 'react';
import { StyledGuestContent } from '../../styledComponents';

type GenericContentProps = {
  children: ReactNode;
};

export default function GenericContent({ children }: GenericContentProps) {
  return (
    <StyledGuestContent>
      <Row justify="start" align="middle">
        {children}
      </Row>
      <Typography.Text className="footer">© PayPal Store, 2023</Typography.Text>
    </StyledGuestContent>
  );
}
