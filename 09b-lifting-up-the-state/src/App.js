import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./Navbar";
import Reservation from "./Reservation";
import Confirmation from "./Confirmation";
class App extends React.Component {

  state = {
    "firstName": "",
    "lastName": "",
    "phoneNumber": "",
    "wasButtonPressed": false
  }

  renderConfirmation() {
    if (this.state.wasButtonPressed) {
      return <Confirmation firstName={this.state.firstName}
                           lastName={this.state.lastName} 
                           phoneNumber={this.state.phoneNumber}/>
    } else {
      return null;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
            <Navbar link1="Home"
                    link2="Our Products"
                    link3="Contact Us"/>
  
  
          <h1>Salad Bar</h1>

          {
            this.state.wasButtonPressed ? null : <Reservation
              examplePhoneNumber="+65 777 7777"
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              phoneNumber={this.state.phoneNumber}
              onUpdateFormField={this.updateFormField}
              onButtonPressed={this.reservationSubmitted}
            />
          } 
 

          {this.renderConfirmation()}
        </div>
      </React.Fragment>
    );   
  }

  reservationSubmitted = () => {
    this.setState({
      "wasButtonPressed": true,
      "firstName": "",
      "lastName": "",
      "phoneNumber": ""
    })
  }

  updateFormField = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
}

export default App;
