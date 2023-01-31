import { Typography } from 'antd';
import React, { ReactNode } from 'react';
import { CustomModal } from '../styledComponents';

type ModalProps = {
  title: string;
  children: ReactNode;
  open: boolean;
  close: () => void;
  icon?: ReactNode;
};

export default function GenericModal({
  title,
  children,
  open,
  icon,
  close,
}: ModalProps) {
  return (
    <CustomModal
      title={
        <div>
          {icon}
          <Typography.Title level={4}>{title}</Typography.Title>
        </div>
      }
      visible={open}
      onCancel={close}
      footer={null}
    >
      {children}
    </CustomModal>
  );
}
