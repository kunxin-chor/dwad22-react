import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
// the `useNavigate` hook allows us to change the current path

export default function ContactUs() {

    const [formState, setFormState] = useState({
        "fullName":"",
        "email":"",
        "comments":""
    })

    // useNavigate is a function that returns a function that can be used for navigation
    const navigate = useNavigate();

  
    const updateFormField = useCallback((e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }, [formState])

    const submitForm = useCallback(() => {
        // navigate takes in more than one argument
        // the second argument will be an object that you want to send the other route
        navigate("/submitted",{
            "state":{
                formState
            }
        })
    },[formState, navigate]);

    return (<>
        <h1>Contact Us</h1>
        <div>
            <label>Email:</label>
            <input type="text"
                value={formState.email}
                onChange={ e=>{
                    setFormState({
                        ...formState,
                        "email": e.target.value
                    })
                }}
                className="form-control"
                />
        </div>
        <div>
            <label>Full Name:</label>
            <input type="text"
                value={formState.fullName}
                name="fullName"
                className="form-control"
                onChange={updateFormField}
            />
        </div>
        <div>
            <label>Comments:</label>
            <textarea value={formState.comments} 
                name="comments"
                className="form-control"
                onChange={updateFormField}
                />
        </div>
        <button className="btn btn-primary mt-3" onClick={submitForm}>Submit</button>
    </>);
}