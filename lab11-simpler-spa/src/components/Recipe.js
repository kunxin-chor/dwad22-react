import React from "react"
// a managed component is one which data and behaviour
// depends on the parent
export default function Recipe(props) {
    return <React.Fragment>
        <div className="card" style={{"width":"18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.recipe.title}</h5>
                    <div className="card-text">
                        <h6>Ingredients</h6>
                        <ul>
                            {props.recipe.ingredients.map( (i, index) => <li key={index}>{i}</li>)}
                        </ul>
                    </div>

                </div>
        </div>
    </React.Fragment>
}