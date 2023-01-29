import { Button, Input, Row } from 'antd';
import styled from 'styled-components';

export const StyledInput = styled(Input)`
  border-radius: 5px;
  padding: 1em;
`;

export const StyledRow = styled(Row)`
  padding: 5em;
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;

  [class*='ant-form-item-explain-error'] {
    display: flex;
    padding-top: 5px;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 5px;
`;
export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
