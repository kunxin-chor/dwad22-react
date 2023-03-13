export default function Task(props) {
  return (
    <div className="card mt-2" style={{
      "width": "18rem"
    }}>
      <div className="card-body">
        <h5 className="card-title">
          {props.task.description}
          <input className="ms-3" type="checkbox" value={props.task.done}/>  
        </h5>
        
        <button onClick={()=>{
          props.onDelete(props.task);
        }}>Delete</button>

        <button onClick={()=>{
          props.onEdit(props.task);
        }}className="ms-3">Edit</button>
      </div>
    </div>
  )
}