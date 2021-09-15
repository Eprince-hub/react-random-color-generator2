import './App.css';
import LeftColorBox from './Components/LeftColorBox';
import RightColorBox from './Components/RightColorBox';

function App() {
  // state here
  return (
    <div className="App">
      {/* Render all my Components here */}

      <h1>REACT RANDOM COLOR GENERATOR</h1>

      <div className="colorBoxes">
        <LeftColorBox />
        <RightColorBox />
      </div>

      <button className="bottomButton">Generate Random Color</button>
    </div>
  );
}

export default App;
