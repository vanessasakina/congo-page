// class to create candles

import React from 'react';

function Candle({ animationDelay, flameDuration, waxDripDelay }) {
  return (
    <div 
      className="candle" 
      style={{ animationDelay }}
    >
      <div 
        className="flame"
        style={{ animationDuration: flameDuration }}
      ></div>
      <div className="glow"></div>
      <div 
        className="wax-drip"
        style={{ animationDelay: waxDripDelay }}
      ></div>
    </div>
  );
}

export default Candle;