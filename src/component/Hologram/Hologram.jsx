import React from 'react';
import './Hologram.css';

function Hologram({ imageUrl }) {
  return (
    <div className="hologram-container ">
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="holo"></div>
        <div className="holo"></div>
      </div>
    </div>
  );
}

export default Hologram;
