import React from 'react'
import { useState } from 'react'
import Todolist from './Todolist'

const Body = ({todos, handleAddTodo}) => {
    const [inputField, setInputField] = useState("");

    const handleSave = () => {
        handleAddTodo(inputField);
        setInputField("");
    }
    const handleChange = (event) => {
        setInputField(event.target.value);
    } 
  return (
    <div>
        <Todolist todos={todos}/>
        <input onChange = {handleChange} value={inputField}></input>
        <button onClick={handleSave}>Add</button>
    </div>
  )
}

export default Body