import React from 'react';

function CandleLighting({ isLighting }) {
  return (
    <div 
      className="candle-lighting"
      style={{
        opacity: isLighting ? 1 : 0,
        transition: 'opacity 0.1s ease-in-out'
      }}
    ></div>
  );
}

export default CandleLighting;