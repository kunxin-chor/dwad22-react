import React from "react"

export default function Reservation(props) {

    return (
        <React.Fragment>
            <div>
                <label>First Name</label>
                <input type="text"
                    value={props.firstName}
                    className="form-control"
                    name="firstName"
                    onChange={props.onUpdateFormField}
                    />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={props.lastName}
                    className="form-control"
                    name="lastName"
                    onChange={props.onUpdateFormField}
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" value={props.phoneNumber}
                    className="form-control"
                    name="phoneNumber"
                    placeholder={props.examplePhoneNumber}
                    onChange={props.onUpdateFormField}
                />
            </div>

            <button className="mt-3 btn btn-primary"
                   onClick={props.onButtonPressed} >Place Reservation</button>
        </React.Fragment>);



}