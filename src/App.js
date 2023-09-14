import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const generateRandomColor = () => {
    const newRandomColor = randomColor();
    setBackgroundColor(newRandomColor);
  };

  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          color: 'white',
          backgroundColor: backgroundColor,
        }}
      >
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
    </>
  );
}
