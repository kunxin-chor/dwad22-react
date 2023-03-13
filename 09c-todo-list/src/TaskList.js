import React from "react";
import Task from "./components/Task";
import AddNewTask from "./components/AddNewTask";
import EditTask from "./components/EditTask";

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
            },
            {
                "_id": 4,
                "description":"Take out the trash",
                "done": false
            }
        ],
        newTaskName:"",
        taskBeingEdited: null,
        updatedTaskName: ""
    }

    renderTasks() {
        const jsx = [];
        for (let t of this.state.tasks) {
            // for each task, create a <Task> component instance
            // and add it to the array
            if (this.state.taskBeingEdited?._id !== t._id) {
                jsx.push(<Task task={t} 
                    key={t._id} 
                    onDelete={this.deleteTask}
                    onEdit={this.beginEdit}       
             />)
            } else {
                jsx.push(<EditTask key={t._id}
                                   updatedTaskName={this.state.updatedTaskName}
                                   onUpdateFormField={this.updateFormField}
                                   onConfirm={this.confirmEdit} 
                                   />)
            }
           
        }
        return jsx;
    }

    render() {
        return <React.Fragment>
            <h1>Task List</h1>
            {this.renderTasks()}

            <h1>Add New Task</h1>
            <AddNewTask newTaskName={this.state.newTaskName}
                       onUpdateFormField={this.updateFormField}
                       onAddTask={this.addTask}
                       
                        />
        </React.Fragment>
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTask = () => {
        const newTask = {
            "_id": Math.floor(Math.random() * 10000 + 1),
            "description": this.state.newTaskName,
            "done": false
        }

        this.setState({
            "tasks": [...this.state.tasks, newTask]
        })
    }

    deleteTask = (task) => {
        const indexToDelete = this.state.tasks.findIndex(function(t){
            return t._id === task._id;
        })

        this.setState({
            "tasks": [
                ...this.state.tasks.slice(0, indexToDelete),
                ...this.state.tasks.slice(indexToDelete + 1)

            ]
        })
    }

    beginEdit = (task) => {
        this.setState({
            "taskBeingEdited": task,
            "updatedTaskName": task.description
        })
    }

    confirmEdit = () => {
        const modifiedTask = {
            "_id": this.state.taskBeingEdited._id,
            "description": this.state.updatedTaskName,
            "done": this.state.taskBeingEdited.done
        }

        const indexToModify = this.state.tasks.findIndex((t)=>{
           return t._id === this.state.taskBeingEdited._id;
        })

        this.setState({
            "tasks": [
                ...this.state.tasks.slice(0, indexToModify ),
                modifiedTask,
                ...this.state.tasks.slice(indexToModify+1)
            ],
            "taskBeingEdited": null
        });
    }

}