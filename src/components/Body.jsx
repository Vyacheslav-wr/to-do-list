import React from "react";
import { useState } from "react";
import Todolist from "./Todolist";

const Body = ({ todos, handleAddTodo, handleChangeStatus, status}) => {
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

  const handleFocus = () => {
    setInputField("New Item")
  }

  const handleOutFocus = () => {
    setInputField("Create New Item")
  }

  const disableInput = {
    outline: "blur"
  }

  return (
    <div>
      <Todolist handleChangeStatus={handleChangeStatus} todos={todos} />

      <div className="container" style={style} onMouseEnter={handleFocus} onMouseLeave={handleOutFocus}>
        <button className="addbutton" onClick={handleSave}>+</button>
        <input id="add_input" className="input" placeholder={inputField}/>
      </div>
    </div>
  );
};

export default Body;
