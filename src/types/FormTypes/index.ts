export type InputType = 'input' | 'textarea' | 'datepicker';

export interface RulesType {
  required: boolean;
  message?: string;
}

export interface FormConfigurationType {
  col: number;
  offset: number;
  name: string;
  defaultValue?: any;
  label: string;
  type: InputType;
  rules?: RulesType[];
  inputProps?: {
    type: 'text' | 'number' | 'email' | 'password';
  };
  textAreaProps?: {
    rows: number;
  };
  validateStatus?: 'error' | 'validating';
  help?: string;
}
export enum InputTypes {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  DATEPICKER = 'datepicker',
}
