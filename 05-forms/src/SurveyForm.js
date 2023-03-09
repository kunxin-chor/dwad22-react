import React from "react";

export default class SurveyForm extends React.Component {

    // when you create a component the first thing is to do is to think
    // about what state it will have
    // a variable or a piece of data should be in the state if it meets one or the following criteria
    // 1. it changes according to user interaction
    // 2. it controls any visual part of the component
    // 3. it is something that the component must 'remember' or 'keep track of', then use state
    state = {
        "firstName": "",
        "colour": "blue",
        "country": "sg",
        "fruits": []
    }

    // the render() function must return JSX
    // it is called when an instance of component is created
    render() {
        return (
            <React.Fragment>
                {/* hello this is a comment */}
                {/* The correct way to assign a class to a component in React is via the `className` */}
                <div className="container">
                    <h1>Survey Form</h1>
                    <div>
                        <label>First Name:</label>
                        <input type="text" className="form-control" 
                               value={this.state.firstName} 
                               onChange={this.updateFirstName} />
                    </div>
                    <div>
                        <label>Favorite Colour:</label>

                        <input type="radio"
                               value="red" 
                               name="color"
                               className="form-check-input" 
                               checked={this.state.colour === "red"}
                               onChange={this.updateColour}   
                            />
                        <label className="form-check-label">Red</label>

                                         
                        <input type="radio"
                               value="blue" 
                               name="color"
                               className="form-check-input" 
                               checked={this.state.colour === "blue"}
                               onChange={this.updateColour}
                        />
                        <label>Blue</label>

                        <input type="radio"
                               value="green" 
                               name="color"
                               className="form-check-input"
                               checked={this.state.colour === "green"}
                               onChange={this.updateColour}
                        />
                        <label>Green</label>
                        
                    </div>
                    <div>
                        <label>Country:</label>
                        <select className="form-control" value={this.state.country} onChange={this.updateCountry}>
                            <option value="sg">Singapore</option>
                            <option value="my">Malaysia</option>
                            <option value="th">Thailand</option>
                        </select>
                    </div>
                    <div>
                        <label>Favourite Fruits:</label>

                        <input type="checkbox" name="fruits" value="apple" onChange={this.updateFruits}/>
                        <label>Apple</label>

                        <input type="checkbox" name="fruits" value="orange" onChange={this.updateFruits}/>
                        <label>Orange</label>

                        <input type="checkbox" name="fruits" value="bananas" onChange={this.updateFruits}/>
                        <label>Bananas</label>

                        <input type="checkbox" name="fruits" value="durians" onChange={this.updateFruits}/>
                        <label>Durians</label>

                    </div>  
                </div>
            </React.Fragment>
        );
    }

    // ALL FUNCTIONS FOR EVENT HANDLERS (like onClick, onChange etc.) MUST BE ARROW FUNCTIONS
    // the event handler will ALWAYS recieve as first parameter an event object
    // this event object will contain data about the event (like where is the mouse cursor, which key is pressed etc.)
    // the most important one is event.target.value --> that will contain what the NEW value should be due to change
    updateFirstName = (event) => {
        this.setState({
            "firstName": event.target.value   // change the firstName state to be what the new value should be
        })
    }

    updateColour = (event) => {

         this.setState({
            "colour": event.target.value  // event.target.value will store the value of the newly checked radio button
                                          // update the colour state to newly checked radio button  
        })
    }

    updateCountry = (event) => {
        this.setState({
            "country": event.target.value
        })
    }

    updateFruits = (event) => {

        if (this.state.fruits.includes(event.target.value)) {

            // UNCHECKING

            // CLONE THE EXISTING STATE
            // const clone = this.state.fruits.slice();

            // // MODIFY THE CLONE
            // // a) know the index of which element to change
            // const indexToDelete = this.state.fruits.findIndex(function(el){
            //     return el === event.target.value;
            // })
            // clone.splice(indexToDelete, 1);

            // // REPLACE
            // this.setState({
            //     "fruits": clone
            // })

             const indexToDelete = this.state.fruits.findIndex(function(el){
                return el === event.target.value;
            })

            const modified = [ ...this.state.fruits.slice(0, indexToDelete), ...this.state.fruits.slice(indexToDelete + 1)];
            this.setState({
                "fruits": modified
            })

        } else {
             // React does not detect a push to an array as a change to state
        // the only way React knows that the state has been changed is via setState
     
        // // 1. CLONE THE ARRAY THAT YOU WANT TO CHANGE
        // const clone = this.state.fruits.slice();  // when we call slice without any parameters, we will get back a clone of array

        // // 2. UPDATE THE CLONE ARRAY
        // clone.push(event.target.value);

        // // 3. REPLACE THE ORIGINAL ARRAY IN THE STATE WITH THE CLONE
        // this.setState({
        //     "fruits": clone
        // })
        

        const modified = [...this.state.fruits, event.target.value];
        this.setState({
            "fruits": modified
        })
        }
       
    }
}