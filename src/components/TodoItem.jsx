import React from "react";

const TodoItem = ({ todo, handleChangeStatus, handleDeleteTodo }) => {
  const handleStatus = (event) => {
    if (event.target.checked) {
      todo.status = "completed";
    } else {
      todo.status = "active";
    }
    handleChangeStatus(todo);
  };

  const isCompleted = todo.status === "completed"
  const isDeleted = todo.status === "deleted"

  const style = {
    textDecorationLine: isDeleted ? "line-through" : "none"
  }

  const handleDelete = () => {
    if (todo.status === "deleted") {
      handleDeleteTodo(todo)
    }
    else {
      todo.status = "deleted"
      handleChangeStatus(todo);
    }
  }

  const showDelete = (event) => {
    const delBtn = event.target.querySelector('input')
    delBtn.style.dislat = "flex"
  }

  const hideDelete = (event) => {
    var delBtn = event.target.querySelector('input')
    delBtn.style.visibility = "none"
  }

  return (
    <div class="todoitem" onMouseEnter={showDelete} onMouseLeave={hideDelete}>
      <div className="todoitem__left">
        <div className="round">
          <input type="checkbox" id="checkbox" onChange={handleStatus} checked={isCompleted || isDeleted}  />
          <label for="checkbox" ></label>
        </div>
        <div className="todoitem__text" style={style}>{todo.name}</div>
      </div>
      <input className="delete" onClick={handleDelete} type="button" value='x' />
    </div>
  );
};

export default TodoItem;