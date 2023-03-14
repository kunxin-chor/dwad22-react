import React from "react"

export default function AddNew(props) {
    return <React.Fragment>
        <h1>Add New Recipe</h1>
        <div>
            <label>Title</label>
            <input type="text" name="newRecipeTitle" 
                className="form-control"
                value={props.newRecipeTitle}
                onChange={props.onUpdateFormField}
                />
        </div>
        <div>
            <label>Ingredients</label>
            <input type="text" name="newIngredients"
               className="form-control"
               value={props.newIngredient}
                onChange={props.onUpdateFormField}               />
        </div>
        <button className="btn btn-primary mt-3"
            onClick={props.onConfirm}
        >Confirm</button>
    </React.Fragment>
}