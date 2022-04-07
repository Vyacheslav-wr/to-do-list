import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {id: '1', name:'leha', status: 'active'},
    {id: '2', name:'gay', status:'deleted'},
    {id: '3', name:'shish', status:'completed'},
  ])

 const [finalTodos, setFinalTodos] = useState([]) 

  const [status, setStatus] = useState("deleted")

  useEffect(() => {
      
      const realniykal = todos.filter((todo) => {
        return todo.status === status }
      
      )
      setFinalTodos(realniykal)
      
  }, [status, todos])
  
  const handleAddTodo = (todoName) => {
    setTodos([
      ...todos, 
      {id: Date.now(), name: todoName, status: 'active'}
    ])
  } 
    return (
      <div className='wrapper'>
        <div className="app">
          <Header setStatus={setStatus} status={status}/>
          <Body  handleAddTodo={handleAddTodo} todos={finalTodos} />
        </div>
      </div>
    );
  }

export default App;
