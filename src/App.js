import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Exchange from './components/ExchangeCalc/Exchange';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Exchange />
      <Charts />
    </div>
  );
}

export default App;
