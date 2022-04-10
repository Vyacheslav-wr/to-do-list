import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const Body = ({ todos, handleAddTodo, handleChangeStatus, handleDeleteTodo, status}) => {
  const [inputField, setInputField] = useState("Create new Item");
  
  const handleSave = () => {
    var el = document.getElementById("add_input")
    handleAddTodo(el.value);
    el.value=""
  };
  const handleChange = (event) => {
    setInputField(event.target.value);
  };

  const isActive = status === "active"

  const style = {
    display: isActive ? "flex" : "none"
  }

  const handleOutFocus = (event) => {
    setInputField("Create New Item")
    event.target.placeholder = "Create New Item"
  }

  const disableInput = (event) => {
    event.target.placeholder = ""
  }

  return (
    <div>
      <Todolist handleChangeStatus={handleChangeStatus} handleDeleteTodo={handleDeleteTodo} todos={todos} />
      <div className="container" style={style}>
        <button className="addbutton" onClick={handleSave}>+</button>
        <input id="add_input" className="input" placeholder={inputField} onBlur={handleOutFocus} onFocus={disableInput}/>
      </div>
    </div>
  );
};

export default Body;
