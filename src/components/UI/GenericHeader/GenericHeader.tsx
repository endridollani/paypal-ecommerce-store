import { RadarChartOutlined } from '@ant-design/icons';
import { Col } from 'antd';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader } from '../../styledComponents';

type HeaderProps = {
  children: ReactNode;
};

export default function GenericHeader({ children }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Col>
        <RadarChartOutlined
          className="header-logo"
          title="Paypal Store"
          onClick={() => navigate('/')}
        />
      </Col>
      <Col>{children}</Col>
    </StyledHeader>
  );
}
