import React, { useState } from 'react';
import './Game.css'; 

const Game = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    // Get the position relative to the viewport, subtract half of the logo's width and height for centering
    const x = e.clientX - 50; 
    const y = e.clientY - 50;

    // Set the new position state for smooth movement
    setPosition({ x, y });
  };

  return (
    <div className="game-container" onClick={handleClick}>
      <img
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
        alt="logo"
        className="logo"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </div>
  );
};

export default Game;
