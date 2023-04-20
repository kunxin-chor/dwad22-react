import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useCallback} from 'react'
function App() {

    console.log("App");
    const [todos, setTodos] = useState([
        {
            "id": 101,
            "name": "Walk the dog",
            "done": false
        },
        {
            "id": 102,
            "name": "Clean the toilet",
            "done": false
        },
        {
            "id": 103,
            "name": "Do the laundry",
            "done": false
        }
    ]);
    
    const [newTodoName, setNewTodoName] = useState("");

    // everytime we re-render we are creating a new version
    // of the `addNewTodo` function. This may lead to inefficienct because
    // for large components may have a lot of arrow functions

    // this version of addNewTodo is not a callback, so everytime
    // the <App> re-renders, React will recreate the function
    // const addNewTodo = () => {
    //     setTodos([...todos, {
    //         id: Math.floor(Math.random() * 10000 + 1),
    //         name: newTodoName,
    //         done: false
    //     }])
    // }

    // when we useCallback to create the event handler, it is not recreated
    // unless something changes
    // the first argument is the function
    // the second argument is the dependency array (when should we recreate the callback)
    const addNewTodo = useCallback(
        () => {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 10000 + 1),
                name: newTodoName,
                done: false
            }])
        }, [todos, newTodoName]  // <-- dependncy array. Only recreate addNewTodo if either the todos state
                                 // changes or if the newTodoName state changes
    )

    const toggleTodo = useCallback( (taskIndex)=>{
        const clonedTask = {...todos[taskIndex]};
        clonedTask.done = !clonedTask.done;
        setTodos([...todos.slice(0, taskIndex), clonedTask, ...todos.slice(taskIndex+1)]);
    }, [todos])
    
    return (
        <div className="container">
            <h1>My Todos</h1>

            <div className="mb-3">
                <input type="text" className="form-control" value={newTodoName} onChange={(e)=>{
                    setNewTodoName(e.target.value);
                }}/>
                <button className="btn btn-success mt-2" onClick={addNewTodo}>Add</button>
            </div>

            <ul className="list-group">
                {
                    todos.map( (t,index) => <li className="list-group-item">
                        {t.name}
                        <input type="checkbox" checked={t.done} onChange={()=>{
                            toggleTodo(index);
                        }}className="ms-3 form-check-inline"/>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default App;