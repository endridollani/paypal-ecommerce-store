import React from 'react';
import { RulesType } from '../../types/FormTypes';
import { FormItemStyled, StyledInput } from '../styledComponents';

interface Props {
  placeholder: string;
  name: string;
  rules?: RulesType[];
  inputProps?: {
    type: 'number' | 'email' | 'text' | 'password';
    min?: number;
    max?: number;
  };
  validateStatus?: 'error' | 'validating';
  help?: string;
}
const InputComponent: React.FC<Props> = ({
  placeholder,
  name,
  rules,
  inputProps,
  validateStatus,
  help,
}) => (
  <FormItemStyled
    name={name}
    label={placeholder}
    rules={rules}
    validateStatus={validateStatus}
    help={help}
  >
    <StyledInput {...inputProps} placeholder={placeholder} />
  </FormItemStyled>
);

InputComponent.defaultProps = {
  rules: [],
  inputProps: {
    type: 'text',
  },
};

export default InputComponent;
