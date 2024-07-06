// Class to create the memorial start page with the candles

import React, { useState, useCallback, useEffect } from 'react';
import backgroundImage from '../assets/congovid.gif';
import CandlesContainer from './CandlesContainer';
import NamesContainer from './NamesContainer';
import CandleLighting from './CandleLighting';

function MemorialContainer() {
  const [candles, setCandles] = useState([]);
  const [isLighting, setIsLighting] = useState(false);

  const createCandle = useCallback((delay = 0) => ({
    id: Date.now() + Math.random(), // Ensure unique IDs
    animationDelay: `${delay}s`,
    flameDuration: `${0.4 + Math.random() * 0.2}s`,
    waxDripDelay: `${Math.random() * 5}s`
  }), []);

  useEffect(() => {
    const initialCandleCount = 7;
    const maxDelay = 2; // Maximum delay in seconds

    const initialCandles = Array.from({ length: initialCandleCount }, () => {
      const randomDelay = Math.random() * maxDelay;
      return createCandle(randomDelay);
    });

    setCandles(initialCandles);
  }, [createCandle]);

  const handleLightStart = useCallback(() => {
    setIsLighting(true);
  }, []);

  const handleLightEnd = useCallback(() => {
    setIsLighting(false);
    setCandles(prevCandles => [...prevCandles, createCandle()]);
  }, [createCandle]);

  return (
    <div className="memorial-container" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="overlay"></div>
      <div className="content">
        <h1>Kumbuka</h1>
        <p className="subtitle">Remembering Innocent Lives Lost in Eastern Congo</p>
        <button className="cta-button" onMouseDown={handleLightStart}
          onMouseUp={handleLightEnd}>Light a Candle</button>
      </div>
      <CandlesContainer candles={candles} />
      <NamesContainer />
      <CandleLighting isLighting={isLighting} />
    </div>
  );
}

export default MemorialContainer;