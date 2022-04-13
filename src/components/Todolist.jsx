import React from 'react'
import TodoItem from './TodoItem'

const Todolist = ({todos, handleChangeStatus, handleDeleteTodo}) => {
  return (
    <div className='todolist'>
        {todos.map((todo) => (
            <TodoItem handleChangeStatus={handleChangeStatus} handleDeleteTodo={handleDeleteTodo} key={todo._id} todo={todo}/>
        ))}
    </div>
  )
}

export default Todolist