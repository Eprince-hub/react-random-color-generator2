import React from 'react';

function ColorValueDisplay(props) {
  return (
    <div>
      <h2 className="valueDescription" style={{ border: props.border }}>
        {props.hexColorValue}
      </h2>
      <h2 className="valueDescription" style={{ border: props.border }}>
        {props.rgbColorValue}
      </h2>
    </div>
  );
}

export default ColorValueDisplay;
