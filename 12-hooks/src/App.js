import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useCallback, useEffect, useMemo } from 'react'
function App() {


    const [todos, setTodos] = useState([

    ]);

    const [newTodoName, setNewTodoName] = useState("");
    const [filter, setFilter] = useState("all");

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

    const toggleTodo = useCallback((taskIndex) => {
        const clonedTask = { ...todos[taskIndex] };
        clonedTask.done = !clonedTask.done;
        setTodos([...todos.slice(0, taskIndex), clonedTask, ...todos.slice(taskIndex + 1)]);
    }, [todos]);

   

    // useEffect allows us to create a "side effect"
    // two arguments
    // argument 1 - the function to run
    // argument 2 - when is the function in argumen 1 ran
    //   null --> the function is ran after EVERY re-render
    //   [] --> the function is ran ONCE after the first render
    //   [dependecies] --< the function is ran WHEN a dependency changes
    useEffect(() => {
        // once the component renders ONCE
        // read in all the todos in a local storage
        // and display it
        // usually a side effect will make use of something outside of React

        // retrieve all the tasks from our localstorage
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        setTodos(storedTodos);
    }, []);

    const saveTodos = useCallback(() => {
        // we'll always have access to localstorage as long
        // our React app is running on a browser
        // first argument is the key to save to
        // second argument is the data
        localStorage.setItem('todos', JSON.stringify(todos)); // <--convert an array or object to a JSON string
    }, [todos]);

    const handleSelectFilter = useCallback((e) => {
        setFilter(e.target.value);
    }, [])

    useEffect(()=>{
        saveTodos();
    }, [saveTodos])

    let filteredTodos = useMemo(() => {
        let results;
        if (filter === "all") {
            results = [...todos];
        } else if (filter === "completed") {
            results = todos.filter(t => t.done);
        } else if (filter === "incomplete") {
            results = todos.filter(t => !t.done);
        }
        return results;
    }, [todos, filter]);




    return (
        <div className="container">
            <h1>My Todos</h1>

            <div className="mb-3">
                <input type="text" className="form-control" value={newTodoName} onChange={(e) => {
                    setNewTodoName(e.target.value);
                }} />
                <button className="btn btn-success mt-2" onClick={addNewTodo}>Add</button>
            </div>

            <div>
                <button className="btn btn-primary mb-3" onClick={saveTodos}>Save</button>
            </div>
            <div>
                <h2>Filters</h2>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="filterOptions" id="filterAll" value="all" onClick={handleSelectFilter} checked={filter === "all"} />
                    <label className="form-check-label" htmlFor="filterAll">All</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="filterOptions" id="filterIncomplete" value="incomplete" onClick={handleSelectFilter} checked={filter === "incomplete"} />
                    <label className="form-check-label" htmlFor="filterIncomplete">Incomplete</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="filterOptions" id="filterCompleted" value="completed" onClick={handleSelectFilter} checked={filter === "completed"} />
                    <label className="form-check-label" htmlFor="filterCompleted">Completed</label>
                </div>
            </div>
            <ul className="list-group">
                {
                    filteredTodos.map((t, index) => <li className="list-group-item">
                        {t.name}
                        <input type="checkbox" checked={t.done} onChange={() => {
                            toggleTodo(index);
                        }} className="ms-3 form-check-inline" />
                    </li>)
                }
            </ul>
        </div>
    )
}

export default App;