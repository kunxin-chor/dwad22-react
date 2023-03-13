import React from "react"

export default class Reservation extends React.Component {
    state = {
        "firstName": "",
        "lastName": "",
        "phoneNumber": ""
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name</label>
                    <input type="text" value={this.state.firstName} 
                           className="form-control"
                           name="firstName"
                           onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" value={this.state.lastName}
                           className="form-control"
                           name="lastName"  
                           onChange={this.updateFormField}
                    />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" value={this.state.phoneNumber}
                           className="form-control"
                           name="phoneNumber"
                           placeholder={this.props.examplePhoneNumber}
                           onChange={this.updateFormField}
                    />
                </div>

                <button className="mt-3 btn btn-primary" >Place Reservation</button>
            </React.Fragment>);
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}