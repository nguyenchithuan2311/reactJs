import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Task.jsx'
import Task from './Task.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([])
  const [nameTask, setNameTask] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const handleDelete = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  const handleEdit = (index) => {
    setNameTask(items[index])
    setEditIndex(index) // Set the index of the task being edited
  }
  const handAdd = () => 
  {
    if (editIndex !== null) {
      // Update the task if editing
      const updatedItems = [...items]
      updatedItems[editIndex] = nameTask
      setItems(updatedItems)
      setEditIndex(null)  // Reset edit index after updating
    } else {
      // Add a new task if not editing
      setItems(prevItems => [...prevItems, nameTask])
    }
    setNameTask('')  // Clear the input after adding/updating
    console.log(items)
  }

  return (
    <>
      <div className='container'>
        <h1>TODO LIST</h1>
        <hr className="line" />
        <input placeholder='add item...' className='input-name-task' value={nameTask} onChange={(e)=>
          {setNameTask(e.target.value)}}></input>
        <button onClick= {()=>{handAdd(nameTask)}}>ADD</button>
        <div>
        {items.map((item,index)=>{
          return <Task 
          key={index} 
          name={item} 
          onDelete={() => handleDelete(index)} 
          onEdit={() => handleEdit(index)}></Task>
        })}
        </div>
      </div>
    </>
  )
}

export default App
