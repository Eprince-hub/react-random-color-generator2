import React from 'react';
import ColorValueDisplay from './ColorValueDisplay';
import CustomBoxDisplay from './CustomBoxDisplay';

function RightColorBox() {
  return (
    <div className="rightColorBox">
      <h4>On development</h4>
      <ColorValueDisplay />
      <CustomBoxDisplay />
    </div>
  );
}

export default RightColorBox;
