// class to animate candles

import React from 'react';
import Candle from './Candle';

function CandlesContainer({ candles }) {
  return (
    <div className="candles-container">
      {candles.map(candle => (
        <Candle
          key={candle.id}
          animationDelay={candle.animationDelay}
          flameDuration={candle.flameDuration}
          waxDripDelay={candle.waxDripDelay}
        />
      ))}
    </div>
  );
}

export default CandlesContainer;