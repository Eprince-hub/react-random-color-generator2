import './App.css';
import { useState } from 'react';
import LeftColorBox from './components/LeftColorBox';
import RightColorBox from './components/RightColorBox';

function App() {
  // state here
  const [showBox, setShowBox] = useState('none');
  return (
    <div className="App">
      {/* Render all my Components here */}

      <h1>REACT RANDOM COLOR GENERATOR</h1>

      <div className="colorBoxes">
        <LeftColorBox style={{ display: showBox }} />
        <RightColorBox />
      </div>

      <button className="bottomButton">Generate Random Color</button>
    </div>
  );
}

export default App;
