import React, { useState } from 'react';

function CustomColor() {
  const [displayColorBox, setDisplayColorBox] = useState(0);

  const [hideColorBox, setHideColorBox] = useState(true);

  return (
    <div className="customColorWrapper">
      <div className="customColor" style={{ opacity: displayColorBox }}>
        <h2>Custom Color</h2>

        <div className="heuWrap">
          <label htmlFor="hue">Hue:</label>
          <input name="hue" id="hue" />
        </div>

        <div className="luminosityWrap">
          <label htmlFor="luminosity">Luminosity:</label>
          <input name="luminosity" id="luminosity" />
        </div>
      </div>

      <button
        className="customColorButton"
        onClick={() => {
          hideColorBox === true ? setDisplayColorBox(1) : setDisplayColorBox(0);
          setHideColorBox((previousState) => !previousState);
        }}
      >
        Show Hue / Luminosity
      </button>
    </div>
  );
}

export default CustomColor;
