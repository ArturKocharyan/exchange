import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Exchange from './components/ExchangeCalc/Exchange';
import Charts from './components/Charts/Charts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Exchange />
      <Charts />
      <Footer />
    </div>
  );
}

export default App;
