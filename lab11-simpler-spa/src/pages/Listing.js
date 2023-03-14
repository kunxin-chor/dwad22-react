import React from "react";
import axios from "axios";
import Recipe from "../components/Recipe";

export default class Listing extends React.Component {

    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeap-t7quy0r7iul.ws-us90.gitpod.io/"

    // Listing is to display all the recipes,
    // in its state will be all the recipes
    state = {
        data:[],
        hasLoaded: false
    }

    // componentDidMount happens after the first render
    async componentDidMount() {
        const response = await axios.get(this.BASE_API_URL + "recipes");
        this.setState({
            "data": response.data,
            "hasLoaded": true
        })
    }

    render() {
        return <React.Fragment>
            <h1>All Recipes</h1>
            {
                this.state.hasLoaded ?
                    this.state.data.map(r => <Recipe recipe={r} key={r._id}/>) :
                    <p>Loading, please wait</p>
            //     this.state.data.map(function(r){
            //         return <Recipe recipe={r}/>
            //     })
             }

        </React.Fragment>
    }
}