import './App.css';
import { useState , useRef } from 'react';
import { Task } from './Task';

function App() {

  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewtask] = useState("")

  const inputBox = useRef()

  const handleChange = (event) => {
    event.target.value !== "" ? setNewtask(event.target.value) : alert("Enter a task") 
    inputBox.value = ""
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    setToDoList([...toDoList, task])
  }
  
  const deleteTask = (id) => {
    setToDoList(toDoList.filter((task) => task.id !== id))
  }

  const completedTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if(task.id === id){
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
        <div className='ControlBox'>
          <input className='inputBox' onChange={handleChange} ref={inputBox} />
          <button className='addBtn' onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {toDoList.map((task) => {
            return (
              <Task 
                taskName={task.taskName} 
                id={task.id} 
                deleteTask={deleteTask}
                completed={task.completed}
                completedTask={completedTask}
                />
            )
          })}
        </div>
    </div>
  );
}

export default App;
