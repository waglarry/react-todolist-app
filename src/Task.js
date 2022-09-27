export const Task = (props) => {
    return (
        <div className="taskBox">
            <div className='task'
            style={{backgroundColor: props.completed ? "green" : "dodgerblue"}}
            >
            <h3>{props.taskName}</h3> 
            <div>
            <button className="completeBtn" onClick={() => props.completedTask(props.id)}>{props.completed ? "Completed" : "Complete"}</button>
            <button className="deleteBtn" onClick={() => props.deleteTask(props.id)}>X</button>
            </div>
            </div>
        </div>
      )
}