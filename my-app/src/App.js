import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComp from './Components/ClassComp';
import FunctionComp from './Components/FunctionComp';
import Click from './Components/Click';

function App() {
  return (
    <div>
      <ClassComp/>
      <FunctionComp/>
      <Click/>
    </div>
  );
}

export default App;
