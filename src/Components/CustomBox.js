import React from 'react';

function CustomBox() {
  return (
    <div className="customBoxWrapper">
      <div className="customBox">
        <h2>Custom Box</h2>
        <div className="heightWrap">
          <label htmlFor="height">Height:</label>
          <input type="number" name="height" id="height" />
        </div>
        <div className="widthWrap">
          <label htmlFor="width">Width:</label>
          <input type="number" name="width" id="width" />
        </div>
      </div>

      <button className="customBoxButton">Show Height / Width</button>
    </div>
  );
}

export default CustomBox;
