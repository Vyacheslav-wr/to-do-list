import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const Body = ({ todos, handleAddTodo, handleChangeStatus, status}) => {
  const [inputField, setInputField] = useState("Create new Item");
  
  const handleSave = () => {
    handleAddTodo(inputField);
    setInputField("");
  };
  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const isActive = status === "active"

  const style = {
    display: isActive ? "flex" : "none"
  }

  const handleFocus = () => {
    setInputField("")
  }

  const handleOutFocus = () => {
    setInputField("Create new Item")
  }

  const disableInput = {
    outline: "blur"
  }

  return (
    <div>
      <Todolist handleChangeStatus={handleChangeStatus} todos={todos} />

      <div className="container" style={style} onMouseEnter={handleFocus} onMouseLeave={handleOutFocus}>
        <button className="addbutton" onClick={handleSave}>+</button>
        <input className="input" onChange={handleChange} value={inputField} placeholder="New item"></input>
      </div>
    </div>
  );
};

export default Body;
