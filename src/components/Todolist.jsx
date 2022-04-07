import React from 'react'
import TodoItem from './TodoItem'

const Todolist = ({todos}) => {
  return (
    <div>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default Todolist