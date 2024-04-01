import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Exchange from './components/ExchangeCalc/Exchange';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Exchange />
    </div>
  );
}

export default App;
