import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const url = "https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last";


function App() {
  const [data, setData] = useState();

  const getRandomValue = () => {
    axios.get(url).then((res) => {
      console.log(res.data.pulse.outputValue)
      setData(res.data.pulse.outputValue)
    })
  }


  const onClickeHandler = () => {
    getRandomValue();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test for Datanow
        </p>
        <button className='button' onClick={onClickeHandler}>
          <label htmlFor="text">Show me the last random value</label>
        </button>
        <p style={{width: '500px'}}> {data} </p>
        
        
      </header>
    </div>
  );
}

export default App;
