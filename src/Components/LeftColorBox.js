import React, { useState } from 'react';

function LeftColorBox() {
  // declaring the state variables that will change values according to their names!
  const [backgroundColor, setBackgroundColor] = useState('#c88b4b');

  const [hexColorValue, setHexColorValue] = useState('#c88b4b');

  const [rgbColorValue, setRgbColorValue] = useState('200,139,75');

  // This function will generate a random Hex color code
  // and it is called when the button is clicked!
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

  // This function will be called when the button is clicked
  // and would convert the generated Hex color code to an RGB

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

  return (
    <div className="leftColorBox" style={{ backgroundColor: backgroundColor }}>
      <div className="leftBoxColorValues">
        <h3>{`Hex Value: ${hexColorValue}`}</h3>
        <h3>{`RGB Value: rgb(${rgbColorValue})`}</h3>
      </div>
      <button
        onClick={() => {
          const retunedHexColorValue = generateRandomHex();

          // This slices off the # from the hex color code
          // and send the remaining value to the function that converts it to the RGB
          // color code and sets it to the RGB state variable!
          setRgbColorValue(convertToRGB(retunedHexColorValue.slice(1)));

          // setting the HexColor state variable
          setHexColorValue(retunedHexColorValue);

          // setting the background color state variable
          setBackgroundColor(retunedHexColorValue);
        }}
      >
        Change the Color
      </button>
    </div>
  );
}

export default LeftColorBox;
