import React, { useState } from 'react';

function CustomBox() {
  // declaring state variable
  const [displayBox, setSetdisplayBox] = useState(0);
  const [hideDisplayBox, setHideDisplayBox] = useState(true);

  // jsx starts
  return (
    <div className="customBoxWrapper">
      <div className="customBox" style={{ opacity: displayBox }}>
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

      <button
        className="customBoxButton"
        // onClick={() => setSetdisplayBox((previousState) => !previousState)}
        onClick={() => {
          hideDisplayBox === true ? setSetdisplayBox(1) : setSetdisplayBox(0);
          setHideDisplayBox((previousState) => !previousState);
        }}
      >
        Show Height / Width
      </button>
    </div>
  );
}

export default CustomBox;
