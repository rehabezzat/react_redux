import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/slice/cartSlice';

function Cards({ id, title,description, imgSrc, price }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemsInCart = useSelector(state => state.cart.items);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ id, title, description, imgSrc, price }));
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    if (itemsInCart.some(item => item.id === id)) {
      dispatch(removeFromCart({ id }));
    }
  };

  const isInCart = itemsInCart.some(item => item.id === id);

  return (
    <Card
      style={{ width: '20rem', cursor: 'pointer', margin: '10px', marginTop: 20, border: 'none' }}
      onClick={handleCardClick}
      className="mb-4"
    >
      <Card.Img style={{ width: 200, height: 200, margin: 'auto' }} variant="top" src={imgSrc} alt={title} />
      <Card.Body>
        <Card.Title style={{ height: '60px' }}>{title}</Card.Title>
        <Card.Text style={{ overflow: 'hidden', height: '50px' }}>{description}</Card.Text>
        <Button variant="primary" onClick={(e) => { e.stopPropagation(); navigate(`/product/${id}`); }}>
          View Details
        </Button>
        {isInCart ? (
          <Button variant="danger" className="m-2" onClick={handleRemoveFromCart}>
            Remove
          </Button>
        ) : <Button variant="success" className="m-2" onClick={handleAddToCart}>
          Add To Cart
        </Button>}
      </Card.Body>
    </Card>
  );
}

export default Cards;
