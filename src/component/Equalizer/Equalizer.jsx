import React, { useEffect, useState } from 'react';
import './Equalizer.css'; // Assuming you already have your styles in Equalizer.css

const Equalizer = ({ isPlaying }) => {
  const bars = 40;
  const [barHeights, setBarHeights] = useState([]);

  const generateRandomHeights = () => {
    return Array.from({ length: bars }, () => Math.random() * 50);
  };

  const getColor = (index) => {
    const yellow = { r: 255, g: 238, b: 8 }; 
    const white = { r: 255, g: 255, b: 255 }; 

    const ratio = index / (bars - 1); 
    const r = Math.round(yellow.r + (white.r - yellow.r) * ratio);
    const g = Math.round(yellow.g + (white.g - yellow.g) * ratio);
    const b = Math.round(yellow.b + (white.b - yellow.b) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    setBarHeights(generateRandomHeights());
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setBarHeights(generateRandomHeights());
      }, 100);
    } else {
      setBarHeights(Array.from({ length: bars }, () => 10));
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="flex justify-center items-center">
      <div className="container flex items-end">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${height}px`,
              backgroundColor: getColor(index),
              animation: isPlaying
                ? `grow${index} ${Math.random() * 700 + 1500}ms alternate infinite`
                : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Equalizer;
