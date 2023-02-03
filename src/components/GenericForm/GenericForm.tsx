/* eslint-disable react/no-array-index-key */
import { Col, Form, FormInstance, Row, Spin } from 'antd';
import React, { useEffect } from 'react';
import { FormConfigurationType } from '../../types/FormTypes';
import InputSwitcher from '../InputSwitcher/InputSwitcher';

type Props = {
  form: FormInstance;
  formConfigurations: FormConfigurationType[][];
  loading?: boolean;
  onFinish?: (values: any) => void;
};

const GenericForm: React.FC<Props> = ({
  children,
  form,
  formConfigurations,
  onFinish,
  loading,
}) => {
  useEffect(() => {
    let fieldsValue = {};

    formConfigurations.forEach((row) => {
      row.forEach((rowItem) => {
        if (rowItem.defaultValue) {
          fieldsValue = {
            ...fieldsValue,
            [rowItem.name]: rowItem.defaultValue,
          };
        }
      });
    });
    form.setFieldsValue(fieldsValue);
  }, [formConfigurations]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        validateTrigger="onChange"
      >
        {formConfigurations.map(
          (rows: FormConfigurationType[], index: number) => (
            <Row key={index}>
              {rows.map((formItem: FormConfigurationType, index: number) => (
                <Col
                  key={`${formItem.col}.${index}`}
                  span={formItem.col}
                  offset={formItem.offset}
                >
                  <InputSwitcher
                    name={formItem.name}
                    inputType={formItem.type}
                    placeholder={formItem.label}
                    rules={formItem?.rules}
                    inputProps={formItem?.inputProps}
                    textAreaProps={formItem?.textAreaProps}
                    validateStatus={formItem?.validateStatus}
                    help={formItem?.help}
                  />
                </Col>
              ))}
            </Row>
          )
        )}
        {children}
      </Form>
    </Spin>
  );
};

GenericForm.defaultProps = {
  loading: false,
};
export default GenericForm;
