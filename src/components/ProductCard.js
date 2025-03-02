import React from 'react';
import { Card, Typography, Rate } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ id, name, price, image, rating }) => {
  return (
    <Link to={`/product/${id}`}>
      <Card
        hoverable
        className="product-card"
        cover={
          <div style={{ overflow: 'hidden', height: '300px' }}>
            <img
              alt={name}
              src={image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        }
      >
        <Meta
          title={name}
          description={
            <>
              <Text strong style={{ fontSize: '16px', color: 'var(--primary-color)' }}>
                ${price}
              </Text>
              <div style={{ marginTop: '8px' }}>
                <Rate disabled defaultValue={rating} style={{ fontSize: '14px' }} />
              </div>
            </>
          }
        />
      </Card>
    </Link>
  );
};

export default ProductCard;