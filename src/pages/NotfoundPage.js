

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>Go to Home</Link>
    </div>
  );
};

export default NotFound;
