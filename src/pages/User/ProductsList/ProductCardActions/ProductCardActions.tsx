import {
  DeleteOutlined,
  EditOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { StyledButton } from '../../../../components/styledComponents';

type IProps = {
  isAdmin: boolean;
  onDeleteConfirm: () => void;
  onEdit: () => void;
  onChange: (quantity: number) => void;
};

export default function ProductCardActions({
  isAdmin,
  onDeleteConfirm,
  onEdit,
  onChange,
}: IProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const [added, isAdded] = useState<boolean>(false);

  const onClickToogle = () => {
    isAdded((added) => !added);
  };

  const incrementQuantity = () => {
    onChange(quantity + 1);
    setQuantity((quantity) => quantity + 1);
  };

  const decrementQuantity = () => {
    onChange(quantity - 1);
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    } else {
      onClickToogle();
    }
  };

  return (
    <>
      {isAdmin ? (
        <>
          <Space align="baseline" size="large">
            <StyledButton
              type="link"
              icon={<EditOutlined />}
              size="small"
              className="style-underline"
              onClick={onEdit}
            />
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={onDeleteConfirm}
              trigger="click"
            >
              <StyledButton
                icon={<DeleteOutlined />}
                type="link"
                size="small"
                ghost
                danger
              />
            </Popconfirm>
          </Space>
        </>
      ) : (
        <>
          {!added ? (
            <StyledButton
              className="add-to-card-btn"
              type="primary"
              icon={<ShoppingOutlined />}
              size="small"
              ghost
              onClick={onClickToogle}
            >
              Add to card
            </StyledButton>
          ) : (
            <Space align="center" size="large" className="card-action-wraper">
              <Button
                icon={<MinusSquareOutlined className="minus-icon" />}
                size="small"
                ghost
                onClick={decrementQuantity}
              />
              <Typography.Text className="quantity">{quantity}</Typography.Text>
              <Button
                icon={<PlusSquareOutlined className="plus-icon" />}
                size="small"
                ghost
                onClick={incrementQuantity}
              />
            </Space>
          )}
        </>
      )}
    </>
  );
}
