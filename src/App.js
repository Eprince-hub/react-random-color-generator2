import './App.css';
import { useState } from 'react';
import ColorValueDisplay from './components/ColorValueDisplay';
import CustomBoxDisplay from './components/CustomBoxDisplay';
import HomeButton from './components/HomeButton';
import LeftColorBox from './components/LeftColorBox';
import RightColorBox from './components/RightColorBox';

function App() {
  // declaring the state variables that will change values according to their names!

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

  // ################

  return (
    <div className="App">
      {/* Render all my Components here */}
      <h1>REACT RANDOM COLOR GENERATOR</h1>
      <div className="colorBoxes">
        {/* the component that displays the color on the left screen */}
        <LeftColorBox
          leftBoxBackground={hexColorValue}
          hexColorValue={`Hex Value: ${hexColorValue}`}
          rgbColorValue={`RGB Value: rgb(${rgbColorValue})`}
        />

        {/* the component that displays the color on the left screen */}
        {/* the component has a children components for the color values */}
        <RightColorBox rightBoxBackground={hexColorValue}>
          <ColorValueDisplay
            border={`5px solid ${hexColorValue}`}
            hexColorValue={`Hex Value: ${hexColorValue}`}
            rgbColorValue={`RGB Value: rgb(${rgbColorValue})`}
          />

          <CustomBoxDisplay />
        </RightColorBox>
      </div>

      {/* Button that controls all the colors on box boxes */}
      <HomeButton
        name="Generate Random Color"
        changeColor={() => {
          const retunedHexColorValue = generateRandomHex();

          // This slices off the # from the hex color code
          // and send the remaining value to the function that converts it to the RGB
          // color code and sets it to the RGB state variable!
          setRgbColorValue(convertToRGB(retunedHexColorValue.slice(1)));

          // setting the HexColor state variable
          setHexColorValue(retunedHexColorValue);

          // setting the background color state variable
          setHexColorValue(retunedHexColorValue);
        }}
      />
    </div>
  );
}

export default App;
