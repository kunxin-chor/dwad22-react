import React from "react";
import Listing from "./pages/Listing";
import AddNew from "./pages/AddNew";

export default class RecipeBook extends React.Component {
    state = {
        "activePage": "listing"
    }

    renderPage() {
        switch (this.state.activePage) {
            case "listing":
                return <Listing switchPage={this.switchPage}/>
            case "add-new":
                return <AddNew switchPage={this.switchPage}/>
            default:
                return <div>Error. Page not found</div>
        }
    }

    switchPage = (newPage) => {
        this.setState({
            "activePage": newPage
        })
    }

    render() {
        return <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.switchPage("listing")
                            }}>All Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={()=>{
                                this.switchPage("add-new")
                            }}>Add New</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <h1>Recipe Book</h1>
            {this.renderPage()}
        </React.Fragment>
    }
}