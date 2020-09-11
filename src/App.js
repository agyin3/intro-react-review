import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Breweries from './components/Breweries';

// Make your axios call to https://api.openbrewerydb.org/breweries

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    Axios.get('https://api.openbrewerydb.org/breweries')
      .then(res => {
        setState(res.data)
      })
      .catch(err => console.log(err))
  },[] )  

  return (
    <div className="App">
      <h1>Brewery Fun</h1>
      <div className='main-wrapper'>
        {state.map(brewery => <Breweries brewery={brewery} />)}
      </div>
    </div>
  );
}

export default App;
