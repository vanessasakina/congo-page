import React from 'react';
import MemorialContainer from './components/MemorialContainer';
import CustomCursor from './components/CustomCursor';
import ParticleCanvas from './components/ParticleCanvas';

function App() {
  return (
    <>
      <ParticleCanvas />
      <CustomCursor />
      <MemorialContainer />
    </>
  );
}

export default App;