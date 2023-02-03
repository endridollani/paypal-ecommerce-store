import React from 'react';
import { RulesType } from '../../types/FormTypes';
import { FormItemStyled, StyledTextArea } from '../styledComponents';

interface Props {
  placeholder: string;
  name: string;
  rules?: RulesType[];
  inputProps?: {
    rows?: number;
  };
}
const TextAreaComponent: React.FC<Props> = ({
  placeholder,
  name,
  rules,
  inputProps,
}) => (
  <FormItemStyled name={name} label={placeholder} rules={rules}>
    <StyledTextArea {...inputProps} placeholder={placeholder} />
  </FormItemStyled>
);

TextAreaComponent.defaultProps = {
  rules: [],
  inputProps: {
    rows: 4,
  },
};

export default TextAreaComponent;
