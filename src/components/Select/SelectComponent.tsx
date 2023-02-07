import { Select } from 'antd';
import React, { useState } from 'react';
import { CategoryOptions } from '../../types/Category';

type IProps = {
  onSelect: (option: string) => void;
};

const SelectComponent: React.FC<IProps> = ({ onSelect }) => {
  const [open, isOpen] = useState<boolean>(false);

  const toogleSelect = () => isOpen((open) => !open);

  const handleProvinceChange = (value: any) => {
    console.log(value);
  };

  return (
    <Select
      placeholder="Select category"
      open={open}
      onChange={handleProvinceChange}
      defaultValue={CategoryOptions[0].label}
      options={CategoryOptions}
      onClick={() => toogleSelect()}
      size="large"
      style={{ width: '20rem' }}
      allowClear
      onSelect={onSelect}
      bordered
    />
  );
};

export default SelectComponent;
