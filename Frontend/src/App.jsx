import React, { useEffect, useState } from 'react'
import List from './components/List';
import axios from 'axios'
import { baseUrl } from './utils/constant';

const App = () => {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    axios.get(`${baseUrl}/get`)
    .then(res => {
      setTasks(res.data)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[updateUI]);

  // Add task

  const addTask = () => {
    axios.post(`${baseUrl}/post`, {task:input})
    .then(res => {
      console.log(res.data)
      setInput('')
      setUpdateUI(prev => !prev)
    })
    .then(err => {
      console.log(err)
    })
  }

  // update mode
  const updateMode = (id, text) => {
     setUpdateId(id)
     setInput(text)  
  }

  // updateTask task
const updateTask = () => {
  axios.put(`${baseUrl}/update/${updateId}`, {task:input})
  .then(res => {
    console.log(res.data)
    setUpdateUI(prev => !prev)
    setUpdateId(null)
    setInput('')
  })
}
  
  return (
    <main>
      <h1>CRUD Operation</h1>
      <label>Input Task:</label> <br/>
      <input type='text' placeholder='enter task here'
        value={input} 
        onChange={e => setInput(e.target.value)}
      />

      <button type='submit' onClick={updateId? updateTask: addTask}>
       {updateId? 'Update task':' Add Task'}
      </button>

      <ul >
        {tasks.map(task => (
           <List key={task._id} id={task._id} task={task.task} 
           setUpdateUI={setUpdateUI} updateMode={updateMode} />
        ))}
       
      </ul>
    </main>
  )
}

export default App
