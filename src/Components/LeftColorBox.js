import React, { useState } from 'react';

function LeftColorBox() {
  function generateRandomHex() {
    const colorValues = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
      colorHex += colorValues[Math.floor(Math.random() * colorValues.length)];
    }

    return colorHex;
  }
  const hexValue = generateRandomHex();

  // Trying to convert the returned hexColor code to RGB!

  const rgbColor = hexValue;
  const newValue = rgbColor.slice(1);

  function convertToRGB(changeHexValue) {
    const regex = /.{1,2}/g;
    const newHexValue = changeHexValue.match(regex);
    const rgbArrayValue = [
      parseInt(newHexValue[0], 16),
      parseInt(newHexValue[1], 16),
      parseInt(newHexValue[2], 16),
    ];
    return rgbArrayValue;
  }

  // convertToRGB(newValue);
  const rgbValue = convertToRGB(newValue);

  const [backgroundColor, setBackgroundColor] = useState('#c88b4b');
  return (
    <div className="leftColorBox" style={{ backgroundColor: backgroundColor }}>
      <div className="leftBoxColorValues">
        <h3>{`Hex Value: ${hexValue}`}</h3>
        <h3>{`RGB Value: rgb(${rgbValue})`}</h3>
      </div>
      <button
        onClick={() => {
          setBackgroundColor(hexValue);
        }}
      >
        Change the Color
      </button>
    </div>
  );
}

export default LeftColorBox;
