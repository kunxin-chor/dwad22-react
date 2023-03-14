import React from "react";

export default function Listing(props) {
    return <React.Fragment>
        <div id="all-recipe">
            <h1>All Recipes</h1>
            {
                // first argument is one item from the array
                // second argument is the index of that item
                // third argument is the entire array being mapped
                props.data.map((recipe, index, arr) => {
                    return (
                        <div className="card mt-3" style={{"width":"18rem"}} key={recipe._id}>
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title}</h5>
                                <div className="card-text">
                                    <h1>Ingredients</h1>
                                    <ul>
                                        {recipe.ingredients.map( (i,index)=> <li key={index}>{i}</li>)}
                                    </ul>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
}