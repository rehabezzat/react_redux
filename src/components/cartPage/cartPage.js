import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../store/slice/cartSlice';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './cartPage.css';

function CartPage() {
  const cartItems = useSelector(state => state.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className='desc'>Your cart is empty.</p>
      ) : (
        <div>
          <Table striped bordered hover responsive className='container  mt-5'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price Piece</th>
                <th>Total Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
          
              {cartItems.map(item => (
              
                <tr key={item.id}>
                  <td>
                    <img src={item.imgSrc} alt={item.title} style={{ width: '100px', height: '100px' }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
             
                  <td>{(item.price * item.quantity).toFixed(2)}</td> 
                  <td>
                    <div className='quantity-controls'>
                      <Button variant="secondary" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                      <span className='quantity'>{item.quantity}</span>
                      <Button variant="secondary" onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
                    </div>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove From Cart</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className='total-price-container  '>
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
