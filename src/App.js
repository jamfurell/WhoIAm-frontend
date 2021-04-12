import React from 'react'
import Routes from './config/routes'
import Navbar from './components/Navbar'


import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
