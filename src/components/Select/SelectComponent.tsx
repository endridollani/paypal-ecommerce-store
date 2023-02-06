/* eslint-disable @typescript-eslint/no-unused-vars */
import { Select, Space } from 'antd';
import React, { useState } from 'react';
import { CategoryOptions } from '../../types/Category';

const SelectComponent: React.FC = () => {
  const [open, isOpen] = useState<boolean>(false);

  const toogleSelect = () => isOpen((open) => !open);

  const handleProvinceChange = (value: any) => {
    console.log(value);
  };

  const onSecondCityChange = (value: any) => {
    console.log(value);
  };

  return (
    <Select
      style={{ width: 120 }}
      placeholder="Select category"
      open={open}
      onChange={handleProvinceChange}
      options={CategoryOptions}
      onClick={() => toogleSelect()}
      allowClear
    />
  );
};

export default SelectComponent;