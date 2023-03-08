import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <h2>Welcome to my website</h2>
      <h3>Today your lucky number is {Math.floor(Math.random() * 100 + 1)}</h3>
      <img src={require("./apples.jpg")}/>
    </React.Fragment> 

  );
}

export default App;
