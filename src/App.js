import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <label htmlFor="water">Water temperature</label>
          <input type="range" id="water" min={0} max={25}></input>
        </li>
        <li>
          <label htmlFor="air">Air temperature</label>
          <input type="range" id="air" min={0} max={25}></input>
        </li>
      </ul>

      <ul>
        <li>
          <p>Ventilator</p>
          <button>on/off</button>
        </li>
        <li>
          <p>Day light</p>
          <button>on/off</button>
        </li>
        <li>
          <p>Night light</p>
          <button>on/off</button>
        </li>
        <li>
          <p>Heating</p>
          <button>on/off</button>
        </li>
        <li>
          <p>Filter</p>
          <button>on/off</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
