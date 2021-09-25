import { prependOnceListener } from 'process';
import React from 'react';
import ColorValueDisplay from './ColorValueDisplay';
import CustomBoxDisplay from './CustomBoxDisplay';

function RightColorBox(props) {
  return (
    <div
      className="rightColorBox"
      style={{ backgroundColor: props.rightBoxBackground }}
    >
      {props.children}
    </div>
  );
}

export default RightColorBox;
