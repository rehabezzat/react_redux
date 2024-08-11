import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Cards from '../Cards/Card'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 


function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (products.length === 0) return <p>No products found</p>;

  return (
    <Container>
      <Row className="justify-content-center">
        {products.map(product => (
          <Col key={product.id} md={4} lg={3} className="d-flex justify-content-center mb-4">
            <Cards
              id={product.id}
              title={product.title}
              description={product.description}
              imgSrc={product.image}
              price={product.price}
            />
            
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
