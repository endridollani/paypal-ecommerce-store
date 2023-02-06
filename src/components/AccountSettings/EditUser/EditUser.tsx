import { Col, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAuthUser } from '../../../api/authService';
import { updateUser } from '../../../api/userService';
import { InputTypes } from '../../../types/FormTypes';
import { UserUpdate } from '../../../types/User';
import GenericForm from '../../GenericForm';
import GenericModal from '../../GenericModal';
import { StyledButton } from '../../styledComponents';

type EditUserProps = {
  close: () => void;
};

export default function EditUser({ close }: EditUserProps) {
  const authUserState = useSelector((state: any) => state.authUser);
  const dispatch = useDispatch();
  const [loading, isLoading] = useState<boolean>(false);

  const [form] = useForm();

  const onFinish = async (values: UserUpdate) => {
    const payload: UserUpdate = {
      ...values,
      user_birthday: '2000-05-17',
    };
    isLoading(true);
    updateUser(payload)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Account information updated successfully!');
          dispatch(getAuthUser());
          close();
        }
      })
      .catch(() => {
        toast.error('Account information failed to update!');
      })
      .finally(() => {
        isLoading(false);
      });
  };

  const UserFormConfiguration: any[][] = useMemo(
    () => [
      [
        {
          col: 11,
          offset: 0,
          name: 'name',
          label: 'Name',
          type: InputTypes.INPUT,
          defaultValue: authUserState?.data.user_name,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
        {
          col: 11,
          offset: 2,
          name: 'surname',
          label: 'Surname',
          type: 'input',
          defaultValue: authUserState?.data.user_surname,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 24,
          offset: 0,
          name: 'gender',
          label: ' Gender',
          type: InputTypes.INPUT,
          defaultValue: authUserState?.data.user_gender,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
      [
        {
          col: 24,
          offset: 0,
          name: 'email',
          label: ' Email',
          type: InputTypes.INPUT,
          defaultValue: authUserState?.data.user_email,
          rules: [
            {
              required: true,
              message: 'This field is required',
            },
          ],
        },
      ],
    ],
    []
  );

  return (
    <GenericModal open title="Edit User" close={close}>
      <GenericForm
        formConfigurations={UserFormConfiguration}
        form={form}
        onFinish={onFinish}
        loading={loading}
      >
        <Row justify="end">
          <Col>
            <StyledButton type="primary" size="large" htmlType="submit">
              Submit
            </StyledButton>
          </Col>
        </Row>
      </GenericForm>
    </GenericModal>
  );
}
