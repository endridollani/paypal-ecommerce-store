/* eslint-disable react/no-children-prop */
import {
  FilterOutlined,
  PlusCircleTwoTone,
  SearchOutlined,
} from '@ant-design/icons';
import { Col, Drawer, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchProducts } from '../../redux/products/action';
import SelectComponent from '../Select';
import { StyledButton, StyledInput } from '../styledComponents';
import ProductCards from './ProductCards';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const searchTearm = useDebounce(searchText);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ search_query: searchText }));
  }, [searchTearm]);

  const onToogleDrawer = () => setOpenDrawer((openDrawer) => !openDrawer);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);

  return (
    <Row justify="space-around" style={{ width: '100%' }} gutter={[0, 40]}>
      <Col span={24}>
        <Col>
          <Row justify="end" gutter={[20, 30]}>
            <Col>
              <StyledButton
                type="primary"
                size="large"
                ghost
                onClick={() => onToogleDrawer()}
                icon={<FilterOutlined />}
              >
                Filters
              </StyledButton>
            </Col>
            <Col>
              <StyledButton
                type="primary"
                size="large"
                onClick={() => onToogleModal()}
                icon={<PlusCircleTwoTone />}
              >
                Add Product
              </StyledButton>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col span={24}>
        <ProductCards />
      </Col>
      <Drawer
        title="Filters"
        open={openDrawer}
        onClose={() => onToogleDrawer()}
      >
        <Row gutter={[0, 40]}>
          <Col>
            <Space direction="vertical">
              <Typography.Title level={5}>Category: </Typography.Title>
              <SelectComponent
                onSelect={(option) =>
                  dispatch(fetchProducts({ category: option }))
                }
              />
            </Space>
          </Col>
          <Col>
            <Space direction="vertical">
              <Typography.Title level={5}>Search: </Typography.Title>
              <StyledInput
                type="search"
                placeholder="Search keyword"
                prefix={<SearchOutlined />}
                onChange={(value) => setSearchText(value.target.value)}
                allowClear
              />
            </Space>
          </Col>
        </Row>
      </Drawer>
      {isOpen && (
        <ProductModal
          close={() => {
            onToogleModal();
          }}
        />
      )}
    </Row>
  );
}
