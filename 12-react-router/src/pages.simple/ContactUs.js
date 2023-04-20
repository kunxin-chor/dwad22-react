import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
// the `useNavigate` hook allows us to change the current path

export default function ContactUs() {

    const [email, setEmail] = useState("");
    const [fullName, setFullname] = useState("");
    const [comments, setComments] = useState("");

    // useNavigate is a function that returns a function that can be used for navigation
    const navigate = useNavigate();

    const submitForm = () => {
        // navigate takes in more than one argument
        // the second argument will be an object that you want to send the other route
        navigate("/submitted",{
            "state":{
                fullName, email, comments
            }
        })
    }

    return (<>
        <h1>Contact Us</h1>
        <div>
            <label>Email:</label>
            <input type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                className="form-control"
                />
        </div>
        <div>
            <label>Full Name:</label>
            <input type="text"
                value={fullName}
                onChange={e => setFullname(e.target.value)}
                className="form-control"
            />
        </div>
        <div>
            <label>Comments:</label>
            <textarea value={comments} 
                onChange={e => setComments(e.target.value)}
                className="form-control"
                />
        </div>
        <button className="btn btn-primary mt-3" onClick={submitForm}>Submit</button>
    </>);
}