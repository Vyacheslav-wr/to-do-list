import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("store")) || []
  );

  const [finalTodos, setFinalTodos] = useState([]);

  const [status, setStatus] = useState("active");

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(todos))
    const filtered = todos.filter((todo) => {
      return todo.status === status;
    });
    setFinalTodos(filtered);
  }, [status, todos]);

  const handleAddTodo = (todoName) => {
    
    if (todoName === "") {
      alert("Cannot be blank")
    }
    else {
      setTodos([
        ...todos, 
        { id: Date.now(), name: todoName, status: "active" }
      ]);
    }
  };

  const handleChangeStatus = (mainTodo) => {
    
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== mainTodo.id;
    });
    
    setTodos([
      ...filteredTodos, 
      mainTodo
    ]);
  };

  return (
    <div className="wrapper">
      <div className="app">
        <Header setStatus={setStatus} status={status} />
        <Body handleAddTodo={handleAddTodo} handleChangeStatus={handleChangeStatus} todos={finalTodos} status={status}/>
      </div>
    </div>
  );
};

export default App;
