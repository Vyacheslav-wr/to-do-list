import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const Body = ({ todos, handleAddTodo, handleChangeStatus, status}) => {
  const [inputField, setInputField] = useState("");
  
  const handleSave = () => {
    handleAddTodo(inputField);
    setInputField("");
  };
  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const isActive = status === "active"

  const style = {
    display: isActive ? "block" : "none"
  }

  return (
    <div>
      <Todolist handleChangeStatus={handleChangeStatus} todos={todos} />
      <div className="container" style={style}>
        <input className="addinput" onChange={handleChange} value={inputField} placeholder="New item"></input>
        <button className="addbutton" onClick={handleSave} disabled={!isActive} hidden={!isActive}>Add</button>
      </div>
    </div>
  );
};

export default Body;
