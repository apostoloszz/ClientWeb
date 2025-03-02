import React from 'react';
import { Layout, Menu, Badge, Space } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/products', label: 'Shop' },
    { key: '/contact', label: 'Contact' }
  ];

  return (
    <Header>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--primary-color)', fontSize: '24px', fontWeight: 'bold' }}>
          4BEE
        </Link>
        
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{ flex: 1, justifyContent: 'center', border: 'none' }}
        >
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>

        <Space size="large" style={{ marginLeft: '20px' }}>
          <Link to="/cart">
            <Badge count={0} size="small">
              <ShoppingCartOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />
            </Badge>
          </Link>
          <Link to="/login">
            <UserOutlined style={{ fontSize: '24px', color: 'var(--primary-color)' }} />
          </Link>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;