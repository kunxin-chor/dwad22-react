import React from "react";  // const React = require('react')
import MessageBox from "./MessageBox";
import ImageBorderedFrame from "./ImageBorderedFrame";
import AlertBox from "./AlertBox";

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
  const secretOfLife = 123;
  return (
    <React.Fragment>
      <AlertBox msg="AWAS! Danger!" bgcolor="pink"/>
      <AlertBox msg="Success!" bgcolor="green"/>
      <AlertBox msg={secretOfLife} bgcolor="green"/>
      <h1>Hello World</h1>
      <Goodbye/>
      <MessageBox/>
      <ImageBorderedFrame/>
    </React.Fragment>
  );
}

export default App;
