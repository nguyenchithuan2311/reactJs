import './Task.css'
function Task(props){
    return(
        <div className="container-row">
            <h3>{props.name}</h3>
            <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onEdit}>Edit</button>
        </div>
    )
}

export default Task;