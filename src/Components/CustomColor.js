import React from 'react';

function CustomColor() {
  return (
    <div className="customColorWrapper">
      <div className="customColor">
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

      <button className="customColorButton">Show Hue / Luminosity</button>
    </div>
  );
}

export default CustomColor;
