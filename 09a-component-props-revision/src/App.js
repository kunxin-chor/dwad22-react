import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Navbar";
import Reservation from "./Reservation";
function App() {
  return (
    <React.Fragment>
      <div className="container">
          <Navbar link1="Home"
                  link2="Our Products"
                  link3="Contact Us"/>


        <h1>Salad Bar</h1>
        <Reservation
          examplePhoneNumber="+65 777 7777"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
