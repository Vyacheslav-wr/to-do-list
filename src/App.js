import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  let i = 1;

  const getTodos = () => {
    i = 0;
    var config = {
      method: "get",
      url: "https://backend-todo-labashinskiy.herokuapp.com/get-all",
      headers: {
        "Access-Control-Allow-Origin": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested, Content-Type, Accept Authorization",
        "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE"
      }
    };
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'true';
    axios(config)
      .then(function (response) {
        localStorage.setItem("store", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    return localStorage.getItem("store");
  };

  const todosStorage = i ? getTodos() : todosStorage;

  const [todos, setTodos] = useState(JSON.parse(todosStorage) || []);

  const [finalTodos, setFinalTodos] = useState([]);

  const [status, setStatus] = useState("active");

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(todos));
    const filtered = todos.filter((todo) => {
      return todo.status === status;
    });
    setFinalTodos(filtered);
  }, [status, todos]);

  const handleAddTodo = (todoName) => {
    if (todoName === "") {
      alert("Cannot be blank");
    } else {
      const cur_id = Date.now();

      fetch("https://backend-todo-labashinskiy.herokuapp.com/save", {
        mode: "no-cors",
        method: "POST",

        body: JSON.stringify({
          _id: cur_id,
          name: todoName,
          status: "active",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(console.log);

      setTodos([...todos, { _id: cur_id, name: todoName, status: "active" }]);
    }
  };

  const handleDeleteTodo = (mainTodo) => {
    fetch("https://backend-todo-labashinskiy.herokuapp.com/delete-by-id", {
      mode: "no-cors",
      method: "POST",

      body: JSON.stringify({
        _id: mainTodo._id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(console.log);

    const filteredTodos = todos.filter((todo) => {
      return todo._id !== mainTodo._id;
    });
    setTodos([...filteredTodos]);
  };

  const handleChangeStatus = (mainTodo) => {
    console.log(mainTodo);
    fetch("https://backend-todo-labashinskiy.herokuapp.com/update", {
      method: "POST",

      body: JSON.stringify({
        _id: mainTodo._id,
        name: mainTodo.name,
        status: mainTodo.status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(console.log);

    const filteredTodos = todos.filter((todo) => {
      return todo._id !== mainTodo._id;
    });

    setTodos([...filteredTodos, mainTodo]);
  };

  return (
    <div className="wrapper">
      <div className="app">
        <Header setStatus={setStatus} status={status} />
        <Body
          handleAddTodo={handleAddTodo}
          handleChangeStatus={handleChangeStatus}
          handleDeleteTodo={handleDeleteTodo}
          todos={finalTodos}
          status={status}
        />
      </div>
    </div>
  );
};

export default App;
