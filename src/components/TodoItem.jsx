import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>{`name: ${todo.name}`}</div>
  )
}

export default TodoItem