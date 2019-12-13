import React from 'react';
import './App.css';

import Advice from "./components/Advice"
import axios from "axios"

function App() {

  return (
    <div className="App">
      <h1>Advice of the Day 💌</h1>
      <Advice />
    </div>
  );
}

export default App;
