import React, { useState } from "react";
import { Row, Col, Select, Typography, Slider, Button, Space } from "antd";
import ProductCard from "../components/ProductCard";

const { Title } = Typography;
const { Option } = Select;

// Dữ liệu sản phẩm mẫu
const products = [
  {
    id: 1,
    name: "Áo sơ mi Oxford cổ điển",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
    rating: 5,
    color: "Trắng",
    fabric: "Vải Oxford Cotton",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Áo sơ mi Slim Fit French Cuff",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?w=500",
    rating: 4.5,
    color: "Xanh dương",
    fabric: "Vải Cotton Ai Cập",
    size: ["M", "L", "XL"],
  },
  {
    id: 3,
    name: "Áo sơ mi Cotton cao cấp",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    rating: 4.5,
    color: "Xanh nhạt",
    fabric: "Vải Cotton cao cấp",
    size: ["S", "M", "L"],
  },
  {
    id: 4,
    name: "Áo sơ mi Business Regular Fit",
    price: 94.99,
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=500",
    rating: 5,
    color: "Trắng",
    fabric: "Vải Cotton Twill",
    size: ["M", "L", "XL"],
  },
  {
    id: 5,
    name: "Áo sơ mi Cotton sọc",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500",
    rating: 4,
    color: "Sọc",
    fabric: "Vải Cotton pha",
    size: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Áo sơ mi Modern Fit",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1604695573706-53730fb343c2?w=500",
    rating: 4.5,
    color: "Hồng nhạt",
    fabric: "Vải Cotton cao cấp",
    size: ["S", "M", "L"],
  },
];

const Products = () => {
  const [filters, setFilters] = useState({
    color: [],
    size: [],
    fabric: [],
    priceRange: [0, 200],
  });

  const colors = [...new Set(products.map((p) => p.color))];
  const fabrics = [...new Set(products.map((p) => p.fabric))];
  const sizes = [...new Set(products.flatMap((p) => p.size))];

  const filteredProducts = products.filter((product) => {
    return (
      (filters.color.length === 0 || filters.color.includes(product.color)) &&
      (filters.fabric.length === 0 ||
        filters.fabric.includes(product.fabric)) &&
      (filters.size.length === 0 ||
        product.size.some((s) => filters.size.includes(s))) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );
  });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      color: [],
      size: [],
      fabric: [],
      priceRange: [0, 200],
    });
  };

  return (
    <div className="container" style={{ margin: "32px auto" }}>
      <Title level={2}>Bộ sưu tập của chúng tôi</Title>

      {/* Bộ lọc */}
      <Row gutter={[24, 24]} style={{ marginBottom: "32px" }}>
        <Col xs={24} lg={6}>
          <Title level={4}>Bộ lọc</Title>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div>
              <Title level={5}>Màu sắc</Title>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Chọn màu sắc"
                value={filters.color}
                onChange={(value) => handleFilterChange("color", value)}
              >
                {colors.map((color) => (
                  <Option key={color} value={color}>
                    {color}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Title level={5}>Kích thước</Title>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Chọn kích thước"
                value={filters.size}
                onChange={(value) => handleFilterChange("size", value)}
              >
                {sizes.map((size) => (
                  <Option key={size} value={size}>
                    {size}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Title level={5}>Chất liệu</Title>
              <Select
                mode="multiple"
                style={{ width: "100%" }}
                placeholder="Chọn chất liệu"
                value={filters.fabric}
                onChange={(value) => handleFilterChange("fabric", value)}
              >
                {fabrics.map((fabric) => (
                  <Option key={fabric} value={fabric}>
                    {fabric}
                  </Option>
                ))}
              </Select>
            </div>

            <div>
              <Title level={5}>Khoảng giá</Title>
              <Slider
                range
                min={0}
                max={200}
                value={filters.priceRange}
                onChange={(value) => handleFilterChange("priceRange", value)}
                tipFormatter={(value) => `$${value}`}
              />
            </div>

            <Button type="default" onClick={clearFilters}>
              Xóa bộ lọc
            </Button>
          </Space>
        </Col>

        {/* Lưới sản phẩm */}
        <Col xs={24} lg={18}>
          <Row gutter={[24, 24]}>
            {filteredProducts.map((product) => (
              <Col xs={24} sm={12} md={8} key={product.id}>
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
