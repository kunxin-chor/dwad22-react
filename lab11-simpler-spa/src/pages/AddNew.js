import React from "react"
import axios from "axios"

export default class AddNew extends React.Component {
 
    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeap-t7quy0r7iul.ws-us90.gitpod.io/"
 
    // the AddNew is to display the form
    // to add a new recipe
    // so later all the variables to store
    // the content of the form fields
    // will be in the state
    state = {
        "title":"",
        "ingredients":""
    }

    updateFormField = e => this.setState({
        [e.target.name] : e.target.value
    })

    confirm = async (e) => {
        const newRecipe = {
            "title": this.state.title,
            "ingredients": this.state.ingredients.split(',')
                                .map(i => i.trim())
        }

       await axios.post(this.BASE_API_URL + "recipes", newRecipe);
       this.props.switchPage("listing");

        
    }

    render() {
        return <React.Fragment>
            <h1>Add new recipe</h1>
            <div>
                <label>Title</label>
                <input type="text" 
                       name="title"
                       className="form-control"
                       value={this.state.title}
                       onChange={ this.updateFormField}
                />
            </div>
            <div>
                <label>Ingredients</label>
                <input type="text" 
                       name="ingredients" 
                       className="form-control"
                       value={this.state.ingredients}
                       onChange={this.updateFormField}
                />
            </div>
            <button onClick={this.confirm} className="btn btn-primary mt-3">Confirm</button>
        </React.Fragment>
    }
}