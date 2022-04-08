 import React from 'react'
 
 const Header = ({status, setStatus}) => {
 const date = new Date();
 
  

  const changeStatus = (event) => {
    setStatus(event.target.value)
  }
   return (
      <header>
        <div className='header__left'>
          <div className='calendar'>
            <div className='calendar__header'>April</div>
            <div className='calendar__body'>{date.getDate()}</div>
          </div>
          <span className='header__title'>Today</span>
        </div>
        <div>
          <select class='ellipsis' value={status} onChange={changeStatus}>
            <option value="active">active</option>
            <option value="completed">completed</option>
            <option value="deleted">deleted</option>
          </select>
        </div>
      </header>
   )
 }
 
 export default Header