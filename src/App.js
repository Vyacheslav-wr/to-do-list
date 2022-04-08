import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: "1", name: "leha", status: "active" },
    { id: "2", name: "chelik", status: "deleted" },
    { id: "3", name: "shish", status: "completed" },
  ]);

  const [finalTodos, setFinalTodos] = useState([]);

  const [status, setStatus] = useState("active");

  useEffect(() => {
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
