// const React = require('react');
import React from 'react';
import "./style.css";

// starting point of all React applications
function App() {
  return (
    <React.Fragment>
      <h1 style={{
        "color":"white",
        "backgroundColor":"pink"
      }}>Welcome to my website</h1>
      <h2>Here a photo of a golden retriever puppy</h2>
      <img src={require("./puppy.jpg")}/>
    </React.Fragment>
  );
}

export default App;
