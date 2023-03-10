import React from "react";

export default class TaskList extends React.Component {
    state = {
        "tasks":[
            {
                "_id": 1,
                "description":"Walk the dog",
                "done": false
            },
            {
                "_id": 2,
                "description":"Water the plants",
                "done": true
            },
            {
                "_id": 3,
                "description":"Pay the bills",
                "done": false
            }
        ],
        newTaskName: "",
        taskBeingModified: null,
        modifiedTaskName: ""
    }

    renderTasks() {
        let jsx = [];

        for (let t of this.state.tasks) {

            // if the task that we are displaying (that is in `t`)
            // is not the same as task being modified, then display the task normally
            if (!this.state.taskBeingModified || t._id !== this.state.taskBeingModified._id) {
                jsx.push(<li className="list-group-item" key={t._id}>
                    {t.description}
                    <input type="checkbox" 
                        className="ms-3"
                        checked={t.done === true}
                        onChange={()=>{
                            this.toggleCheckbox(t._id)
                        }}/>
                    <button className="ms-3 btn btn-primary btn-sm"
                        onClick={()=>{
                            // begin the editing of task
                            this.beginEditTask(t);
                        }}
                >Edit</button>
            </li>)
            } else {
                jsx.push(<li className="list-group-item" key = {t._id}>
                    <input type="text"
                        value={this.state.modifiedTaskName}
                        onChange={this.updateModifiedTaskName}
                        />
                    <button className="ms-3 btn btn-primary btn-sm" onClick={this.confirmEdit}>Confirm</button>

                </li>)
            }
          
        }

        return jsx;
    }

    beginEditTask(task) {
        this.setState({
            "taskBeingModified":task,
            "modifiedTaskName": task.description
        })
    }

    confirmEdit = () => {
        // clone the existing task
        const modifiedTask = { ...this.state.taskBeingModified, "description": this.state.modifiedTaskName };
        // modifiedTask.description = this.state.modifiedTaskName;

        const indexBeingModified = this.state.tasks.findIndex(function(t){
            return t._id === modifiedTask._id;
        })

        // find the left side of the modified task
        const left = this.state.tasks.slice(0, indexBeingModified);
        const right = this.state.tasks.slice(indexBeingModified+ 1);

        const modified = [...left, modifiedTask, ...right];
        this.setState({
            "tasks": modified,
            "taskBeingModified": null
        })
    }

    toggleCheckbox(taskId) {
        // // 1. clone the array
        // const clone = [...this.state.tasks];

        // // 2. modify the task
        // const indexToChange = this.state.tasks.findIndex(function(task){
        //     return task._id === taskId;
        // });
        // const taskToChange = this.state.tasks[indexToChange];

        // // 2b clone the task
        // const clonedTask = {...taskToChange};
        // clonedTask.done = !clonedTask.done;

        // // 2c modify the clone array
        // clone[indexToChange] = clonedTask;

        // // 3. replace into the state
        // this.setState({
        //     "tasks": clone
        // })

        // Step 1: find the index of the task we are changing
        const indexToChange = this.state.tasks.findIndex(function(task){
            return task._id === taskId;
        });
        // Step 2: find the task that we want to change
        const taskToChange = this.state.tasks[indexToChange];
        
        // Step 3: clone the task
        const clonedTask = {...taskToChange};

        // Step 4: update the done
        clonedTask.done = !clonedTask.done;

        // Step 5: find the left and the right
        const left = this.state.tasks.slice(0, indexToChange);
        const right = this.state.tasks.slice(indexToChange + 1);

        // Step 6: Build the new array
        const modifiedTasks = [
            ...left, clonedTask, ...right
        ]

        this.setState({
            "tasks": modifiedTasks
        })

    }

    updateNewTaskName = (event) => {
        this.setState({
            "newTaskName": event.target.value
        })
    }

    updateModifiedTaskName = (event) => {
        this.setState({
            "modifiedTaskName": event.target.value
        })
    }

    addNewTask = () => {

        const newTask = {
            "_id": Math.floor(Math.random() * 100000 + 1),
            "description": this.state.newTaskName,
            "done": false
        }

        // 1. clone the array
        const cloned = this.state.tasks.slice();

        // 2. modify the cloned
        cloned.push(newTask);

        // 3. replace the original with the cloned
        this.setState({
            "tasks": cloned
        })
    }

    render() {
        return <React.Fragment>
            <h1>Todo List</h1>
            <ul className="list-group">
                {this.renderTasks()}
            </ul>
            <h1 className="mt-3">Add New Task</h1>
            <div>
                <label>Task Name:</label>
                <input type="text" 
                       value={this.state.newTaskName}
                       onChange={this.updateNewTaskName}
                />
                <button className="btn btn-primary btn-sm"
                    onClick={this.addNewTask}
                >Add</button>
            </div>
        </React.Fragment>
    }
}