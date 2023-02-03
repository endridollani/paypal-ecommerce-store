import React from 'react';
import { InputType, InputTypes, RulesType } from '../../types/FormTypes';
import InputComponent from '../Input/InputComponent';
import TextAreaComponent from '../TextArea/TextAreaComponent';

interface Props {
  inputType: InputType;
  placeholder: string;
  name: string;
  rules?: RulesType[];
  inputProps?: {
    type: 'number' | 'email' | 'text' | 'password';
  };
  textAreaProps?: {
    rows?: number;
  };
  validateStatus?: 'error' | 'validating';
  help?: string;
}

const InputSwitcher: React.FC<Props> = ({
  inputType,
  placeholder,
  name,
  rules,
  inputProps,
  textAreaProps,
  validateStatus,
  help,
}) => {
  switch (inputType) {
    case InputTypes.INPUT:
      return (
        <InputComponent
          name={name}
          key="input"
          placeholder={placeholder}
          rules={rules}
          inputProps={inputProps}
          validateStatus={validateStatus}
          help={help}
        />
      );
    case InputTypes.TEXTAREA:
      return (
        <TextAreaComponent
          name={name}
          key="textarea"
          placeholder={placeholder}
          inputProps={textAreaProps}
          rules={rules}
        />
      );
    default:
      return (
        <InputComponent
          name={name}
          key="input"
          placeholder={placeholder}
          rules={rules}
          inputProps={inputProps}
          validateStatus={validateStatus}
          help={help}
        />
      );
  }
};
export default InputSwitcher;

InputSwitcher.defaultProps = {
  rules: [],
  inputProps: { type: 'text' },
  textAreaProps: {
    rows: 4,
  },
};
