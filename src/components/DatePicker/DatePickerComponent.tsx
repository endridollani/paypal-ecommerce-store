/* eslint-disable @typescript-eslint/no-unused-vars */
import { DatePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import { RulesType } from '../../types/FormTypes';
import { disabledDate } from '../../utils/utilFunctions';
import { FormItemStyled } from '../styledComponents';

interface Props {
  placeholder: string;
  name: string;
  rules?: RulesType[];
  birthDay?: boolean;
  validateStatus?: 'error' | 'validating';
  help?: string;
}

const DatePickerComponent: React.FC<Props> = ({
  placeholder,
  name,
  rules,
  birthDay,
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
    <DatePicker disabledDate={disabledDate} placeholder={placeholder} />
  </FormItemStyled>
);

DatePickerComponent.defaultProps = {
  rules: [],
  birthDay: false,
};

export default DatePickerComponent;
