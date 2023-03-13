import React from "react"

export default function AddNewTask(props) {
    return (<React.Fragment>
        <div>
            <label>Task Name:</label>
            <input type="text"
                   className="form-control"
                   name="newTaskName"
                   value={props.newTaskName}
                   onChange={props.onUpdateFormField}
            />
        </div>
        <button className="mt-3" onClick={props.onAddTask}>Add New</button>
    </React.Fragment>)
}