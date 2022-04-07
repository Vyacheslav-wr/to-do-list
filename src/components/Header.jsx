 import React from 'react'
 
 const Header = ({status, setStatus}) => {
  const date = new Date().toDateString();

  const changeStatus = (event) => {
    setStatus(event.target.value)
  }
   return (
      <header>
        <div>{date}</div>
        <div>
          <select value={status} onChange = {changeStatus}>
            <option value="active">active</option>
            <option value="deleted">deleted</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </header>
   )
 }
 
 export default Header