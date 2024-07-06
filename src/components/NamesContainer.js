// Class to display the floating names in the background

import React, { useState, useEffect } from 'react';

const names = ['Marie', 'Jean', 'Asha', 'David', 'Esther', 'Felix', 'Grace', 'Henri', 'Isabelle', 'Joseph'];

function NamesContainer() {
  const [floatingNames, setFloatingNames] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingNames(prevNames => [
        ...prevNames,
        {
          id: Date.now(),
          name: names[Math.floor(Math.random() * names.length)],
          left: `${Math.random() * 100}%`,
          duration: `${15 + Math.random() * 10}s`,
          delay: `-${Math.random() * 20}s`
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (floatingNames.length > 0) {
      const timer = setTimeout(() => {
        setFloatingNames(prevNames => prevNames.slice(1));
      }, 25000);

      return () => clearTimeout(timer);
    }
  }, [floatingNames]);

  return (
    <div className="names-container">
      {floatingNames.map(({ id, name, left, duration, delay }) => (
        <div 
          key={id} 
          className="name" 
          style={{ 
            left, 
            animationDuration: duration, 
            animationDelay: delay 
          }}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

export default NamesContainer;