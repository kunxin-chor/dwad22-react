import React from "react";  // const React = require('react')
import MessageBox from "./MessageBox";
import ImageBorderedFrame from "./ImageBorderedFrame";

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
      <ImageBorderedFrame/>
    </React.Fragment>
  );
}

export default App;
