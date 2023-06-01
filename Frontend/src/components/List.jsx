import axios from 'axios'
import React from 'react' 
import { baseUrl } from '../utils/constant'

const List = ({id, task, setUpdateUI, updateMode}) => {

    const removeTask =() => {
        axios.delete(`${baseUrl}/delete/${id}`)
        alert('deleted')
        setUpdateUI((prev) => !prev)   
    };


  return (
    <li style={{display:'flex', alignItems:'center', gap:'10px'}}>
        {task}
        <div style={{display:'flex', gap:'10px', cursor:"pointer"}} >
            <p onClick={() => updateMode(id, task)} >edit</p>
           <p onClick={removeTask}>delete</p>
        </div>
    </li>
  )
}

export default List
