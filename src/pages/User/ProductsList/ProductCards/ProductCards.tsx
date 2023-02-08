import { Card, Image, List, Row, Skeleton } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProduct } from '../../../../api/productService';
import { useProductData } from '../../../../hooks/useProductData';
import { fetchProducts } from '../../../../redux/products/action';
import { ProductModelType } from '../../../../types/Product';
import { isAdmin } from '../../../../utils/utilFunctions';
import CardItem from '../../../../components/Card/CardItem';
import ProductModal from '../ProductModal';
import ProductCardActions from '../ProductCardActions';
import { CardType } from '../../../../types/Card';
import { appendCard } from '../../../../redux/card/action';

export default function ProductCards() {
  const authUserState = useSelector((state: any) => state.authUser);
  const isAdminUser = isAdmin(authUserState);
  const { products, loading, totalItems, currentPages } = useProductData();
  const [open, isOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductModelType>();
  const dispatch = useDispatch();

  const toggleModal = () => isOpen((open) => !open);

  const onEdit = (p: ProductModelType) => {
    toggleModal();
    setProduct(p);
  };

  const removeProduct = async (id: number, category: string) => {
    deleteProduct(id)
      .then(() => {
        toast.success('Product deleted successfully!');
        dispatch(fetchProducts({ category }));
      })
      .catch(() => {
        toast.error('Failed to delete product');
      });
  };
  const onCardChange = (quantity: number, product: ProductModelType) => {
    const payload: CardType = {
      id: product.product_id,
      quantity,
      product,
    };
    dispatch(appendCard(payload));
  };

  return (
    <>
      <List
        className="full-width"
        grid={{ gutter: 0, column: 3 }}
        size="small"
        loading={loading}
        pagination={{
          defaultCurrent: currentPages,
          total: totalItems,
          pageSize: 3,
          responsive: true,
          simple: true,
          position: 'top',
        }}
        dataSource={products as ProductModelType[]}
        renderItem={(p) => (
          <Card
            title={p.product_name}
            className="product-card"
            cover={
              <Skeleton
                active
                loading={loading}
                paragraph={{ rows: 1, width: '100%' }}
              >
                <Image src={p.images[0]} className="product-img" />
              </Skeleton>
            }
            extra={
              <ProductCardActions
                isAdmin={isAdminUser}
                onEdit={() => onEdit(p)}
                onDeleteConfirm={() =>
                  removeProduct(p.product_id, p.product_category)
                }
                onChange={(quantity) => onCardChange(quantity, p)}
              />
            }
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem
                    label="Description:"
                    value={p?.product_description}
                    span={24}
                  />
                  <CardItem label="Price:" value={`${p?.product_price} $`} />
                  <CardItem
                    label="Discounted Price:"
                    value={`${p?.product_discounted_price} $`}
                  />
                  <CardItem label="Stock:" value={p?.product_stock} />
                  <CardItem label="Category:" value={p?.product_category} />
                </Row>
              }
            />
          </Card>
        )}
      />
      {open && product && (
        <ProductModal
          close={() => {
            toggleModal();
          }}
          product={product}
        />
      )}
    </>
  );
}
