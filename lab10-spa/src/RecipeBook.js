import React from "react"
import Listing from "./pages/Listing"
import AddNew from "./pages/AddNew"
import axios from "axios"

export default class RecipeBook extends React.Component {

    BASE_API_URL="https://8888-kunxinchor-dwadrecipeap-t7quy0r7iul.ws-us90.gitpod.io/";

    state = {
        "activePage": "listing",
        "data":[
          
        ],
        "newRecipeTitle":"",
        "newIngredients":""
    }

    componentDidMount = async () => {
        const response = await axios.get(this.BASE_API_URL + "recipes");
        this.setState({
            "data": response.data
        })
    }

    renderPage() {
        if (this.state.activePage === "listing") {
            return <Listing data={this.state.data}/>
        } else if (this.state.activePage === "add-new") {
            return <AddNew newRecipeTitle={this.state.newRecipeTitle}
                           newIngredients={this.state.newIngredients}
                           onUpdateFormField={this.updateFormField}
                           onConfirm={this.addNewRecipe}
                           />
        }
    }

    setActive = (page) => {
        this.setState({
            "activePage": page
        })
    }

    updateFormField = e => this.setState({[e.target.name] : e.target.value})
    
    addNewRecipe = async () => {

        // straightfoward manner from removing space
        // let ingredients = this.state.newIngredients.split(",");
        // for (let i = 0; i < ingredients.length; i++) {
        //     ingredients[i] = ingredients[i].trim();
        // }

        const newRecipe = {
            "title": this.state.newRecipeTitle,
            "ingredients": this.state.newIngredients.split(",")
                                .map(i => i.trim())
        }
       

        // consume the endpoint to add a new recipe
        const response = await axios.post(this.BASE_API_URL + "recipes", newRecipe);

        // create a new key named "_id"
        newRecipe._id = response.data.insertedId;

        // clone, modify, replace
        this.setState({
            "data": [...this.state.data, newRecipe],
            "activePage":"listing"
        });

    }

    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    {/* Links */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.setActive("listing")
                            }}>All Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.setActive("add-new")
                            }}>Add New</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {this.renderPage()}
        </React.Fragment>
    }
}