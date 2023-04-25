import React from 'react';

const RotatedContainer = ({ children }) => {
  return (
    <div style={{ transformOrigin: 'bottom left', transform: 'rotate(90deg)', width: '100vh', height: '100vh' }}>
      {children}
    </div>
  );
};

export default RotatedContainer;

{/* <div style={{ transform: 'rotate(90deg)', transformOrigin: 'top right', width: 'flex', height: 'flex' }}> */}