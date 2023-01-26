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
        <div>Youva KADJI</div>
        <img className='logo' src="https://uploads-ssl.webflow.com/630335ca97908437a5a45c62/630335ca9790840713a45c9c_Logo.svg" alt="logo_datanow" width={300} height={150} />
        <button className='button' onClick={onClickeHandler}>
          <label htmlFor="text">Show me the last random value</label>
        </button>
        <p className="data"> {data} </p>
        
        
      </header>
    </div>
  );
}

export default App;
