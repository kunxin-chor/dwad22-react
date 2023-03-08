import React from "react";  // const React = require('react')
import MessageBox from "./MessageBox";


// function sayGoodbye() {
//   return (<React.Fragment>
//     <p>Say Goodbye</p>
//     <p>Goodnight</p>
//   </React.Fragment>);
// }

function Goodbye() {
  return (<React.Fragment>
     <p>Say Goodbye</p>
     <p>Goodnight</p>
  </React.Fragment>)
}

function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <Goodbye/>
      <MessageBox/>
    </React.Fragment>
  );
}

export default App;
