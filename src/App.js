import './App.css';
import LeftColorBox from './componentsss/LeftColorBox';
import RightColorBox from './componentsss/RightColorBox';

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
