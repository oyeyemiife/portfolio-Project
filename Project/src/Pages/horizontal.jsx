import React from 'react';
import './horizontal.css'; // Import your CSS file

const Horizontal = ({ children }) => {
  return (
    <div className="horizontal-scroll-container">
      {children}
    </div>
  );
}

export default Horizontal;

