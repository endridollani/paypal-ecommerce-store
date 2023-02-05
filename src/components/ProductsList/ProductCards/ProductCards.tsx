import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Image, List, Popconfirm, Row, Skeleton, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteProduct, getAllProducts } from '../../../api/productService';
import { ProductModelType } from '../../../types/Product';
import CardItem from '../../Card/CardItem';
import { StyledButton } from '../../styledComponents';
import ProductModal from '../ProductModal';

export default function ProductCards() {
  const [open, isOpen] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductModelType>();
  const [products, setProducts] = useState<ProductModelType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleModal = () => isOpen((open) => !open);
  const fetchProducts = async () => {
    isLoading(true);
    getAllProducts()
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data.items);
        }
      })
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => {
        isLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchParams.get('add-product')) {
      fetchProducts();
      searchParams.delete('add-product');
      setSearchParams(searchParams);
    }

    if (searchParams.get('edit-product')) {
      fetchProducts();
      searchParams.delete('edit-product');
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  const removeProduct = async (id: number) => {
    isLoading(true);
    deleteProduct(id)
      .then(() => {
        toast.success('Product deleted successfully!');
      })
      .catch(() => {
        toast.error('Failed to delete product');
      })
      .finally(() => {
        isLoading(false);
        fetchProducts();
      });
  };

  return (
    <>
      <List
        style={{ width: '100%' }}
        grid={{ gutter: 0, column: 3 }}
        size="small"
        loading={loading}
        pagination={{
          defaultCurrent: 1,
          total: products.length,
          pageSize: 3,
          responsive: true,
          simple: true,
          position: 'top',
        }}
        dataSource={products}
        renderItem={(p) => (
          <Card
            title={p.product_name}
            style={{ margin: '10px', borderRadius: '8px' }}
            cover={
              <Skeleton
                active
                loading={loading}
                paragraph={{ rows: 1, width: '100%' }}
              >
                <Image src={p.images[0]} style={{ padding: '10px' }} />
              </Skeleton>
            }
            extra={
              <Space align="baseline" size="large">
                <StyledButton
                  type="link"
                  icon={<EditOutlined />}
                  size="small"
                  className="style-underline"
                  onClick={() => {
                    toggleModal();
                    setProduct(p);
                  }}
                />
                <Popconfirm
                  title="Are you sure you want to delete?"
                  onConfirm={() => removeProduct(p.product_id)}
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
            }
          >
            <Card.Meta
              description={
                <Row justify="space-between" gutter={[0, 10]}>
                  <CardItem
                    label="Description:"
                    value={p?.product_description}
                  />
                  <CardItem label="Price:" value={p?.product_price} />
                  <CardItem
                    label="Discounted Price:"
                    value={p?.product_discounted_price}
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
          open={open}
          close={() => {
            toggleModal();
          }}
          product={product}
        />
      )}
    </>
  );
}
