import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent';

function App() {
  let [number,setnumber] = useState(23);
  return (
    <div className="App">
      App Number = {number};
      <br/>
    <Parent num={number}></Parent>
    </div>
  );
}

export default App;
