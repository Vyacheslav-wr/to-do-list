import React from "react";

const TodoItem = ({ todo, handleChangeStatus }) => {
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

  const styleButton = {
    visibility: isDeleted ? "hidden" : "block"
  }

  const handleDelete = () => {
    todo.status = "deleted"
    handleChangeStatus(todo);
  }

  return (
    <div class="todoitem">
      <div className="todoitem__left">
        <input className="todocheckbox" onChange={handleStatus} checked={isCompleted} disabled={isDeleted} hidden={isDeleted} type="checkbox" />
        <div className="todoitem__text" style={style}>{todo.name}</div>
      </div>
      <input className="delete" style={styleButton} onClick={handleDelete} disabled={isDeleted} hidden={isDeleted} type="button" value='X' />
    </div>
  );
};

export default TodoItem;
