import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';
import './App.css';
import 'antd/dist/reset.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
