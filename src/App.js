import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Parent from './Parent';
import valueContext from './valueContext';

function App() {
  let [number,setnumber] = useState(23);
  let value =useState(48);
  return (
    <valueContext.provider value={value}>
    <div className="App">
      App Number = {number};
      <br/>
    <Parent num={number}></Parent>
    </div>
    </valueContext.provider>
  );
}

export default App;
