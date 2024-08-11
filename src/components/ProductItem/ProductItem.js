import './ProductItem.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="product-item">
      <h1 className="product-title">Product Details</h1>
      <div className="product-details">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: <span> ${product.price}</span></p>
          <p className="product-category">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
