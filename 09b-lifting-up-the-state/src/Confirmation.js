import React from "react";

export default function Confirmation(props) {
    return <React.Fragment>
        <div class="alert alert-success">
            Thank you for your reservation. Here are the details:
            <ul>
                <li>First Name: {props.firstName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Mobile Number:{props.phoneNumber}</li>
            </ul>
        </div>
    </React.Fragment>
}