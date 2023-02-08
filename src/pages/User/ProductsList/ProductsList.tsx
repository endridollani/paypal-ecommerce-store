import {
  FilterOutlined,
  PlusCircleTwoTone,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Col, Drawer, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../../hooks/useDebounce';
import { fetchProducts } from '../../../redux/products/action';
import { isAdmin } from '../../../utils/utilFunctions';
import SelectComponent from '../../../components/Select';
import {
  StyledButton,
  StyledInput,
} from '../../../components/styledComponents';
import ProductCards from './ProductCards';
import ProductModal from './ProductModal';
import useCards from '../../../hooks/useCards';
import { CardType } from '../../../types/Card';
import { resetCards } from '../../../redux/card/action';
import ShoppingCard from './ShoppingCard';

export default function ProductList() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openCardDrawer, setCardDrawer] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const searchTearm = useDebounce(searchText);
  const { cards } = useCards();

  const dispatch = useDispatch();

  useEffect(() => {
    let reducedCards: Array<CardType> = [];
    if (cards.length > 0) {
      for (let i = 0; i < cards?.length; i += 1) {
        if (cards[i]?.id !== cards[i + 1]?.id) {
          reducedCards = [...reducedCards, cards[i]];
        }
      }
    }
    dispatch(resetCards(reducedCards));
    console.log(cards);
  }, [cards.length]);

  useEffect(() => {
    dispatch(fetchProducts({ search_query: searchText }));
  }, [searchTearm]);

  const onToogleDrawer = () => setOpenDrawer((openDrawer) => !openDrawer);

  const onToogleCardDrawer = () =>
    setCardDrawer((openCardDrawer) => !openCardDrawer);

  const onToogleModal = () => setIsOpen((isOpen) => !isOpen);

  return (
    <Row
      justify="space-around"
      style={{ width: '100%' }}
      gutter={[isAdminUser ? 0 : 30, 40]}
    >
      <Col span={24}>
        <Col>
          <Row
            justify={isAdminUser ? 'end' : 'space-between'}
            align="middle"
            gutter={[20, 30]}
          >
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
            {!isAdminUser && (
              <Col>
                <Badge count={cards.length} showZero color="#22075e">
                  <Avatar
                    shape="square"
                    className="cart-avatar"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                    onClick={onToogleCardDrawer}
                  />
                </Badge>
              </Col>
            )}
            {isAdminUser && (
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
            )}
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
      <Drawer
        title="Shooping Card"
        open={openCardDrawer}
        onClose={onToogleCardDrawer}
      >
        <ShoppingCard />
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
