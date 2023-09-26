import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const colorBoxStyle = {
    color: 'white',
    backgroundColor: backgroundColor,
  };

  return (
    <div className="container">
      <h1>Random Color Generator</h1>
      <div className="color-box" style={colorBoxStyle}>
        Generated Color: {backgroundColor}
      </div>
      <br />
      <button
        onClick={() => {
          const newRandomColor = randomColor();
          setBackgroundColor(newRandomColor);
          console.log(newRandomColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}
