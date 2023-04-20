import { useLocation } from "react-router-dom";

// the `useLocation` hook allows us to access location data
// the `location` is not your latlng, it refers to the URL in the address bar

export default function SubmittedForm(){

    // the `location` object can contain state which is set by other routes
    const location = useLocation();
    // const fullName = location.state.fullName;
    // const email = location.state.email;
    // const comments = location.state.comments;

    const {fullName, email, comments} = location.state.formState;

    return (
        <>
            <div className="alert alert-success mb-3">
                Thank you for your enquiry and/or feedback?
            </div>
            <div>
                Here are your details
                <ul className="list-group">
                    <li className="list-group-item">
                        Email: {email}
                    </li>
                    <li className="list-group-item">
                        Full Name: {fullName}
                    </li>
                    <li className="list-group-item">
                        Comments: {comments}
                    </li>
                </ul>
            </div>
        </>
    )
}