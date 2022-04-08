import React from 'react'
import TodoItem from './TodoItem'

const Todolist = ({todos, handleChangeStatus}) => {
  return (
    <div className='todolist'>
        {todos.map((todo) => (
            <TodoItem handleChangeStatus={handleChangeStatus} key={todo.id} todo={todo}/>
        ))}
    </div>
  )
}

export default Todolist