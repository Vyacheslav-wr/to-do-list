 import React from 'react'
 
 const Header = ({status, setStatus}) => {
 const date = new Date();
 
  

  const changeStatus = (event) => {
    const options = document.getElementsByClassName("option")
    for (var i = 0; i < options.length; i++) {
     options[i].style.color = "#a7a7a7";
    }
    event.target.style.color='#0965dd'
    setStatus(event.target.innerText)
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
        <div className='dropdown'>
          <div className='three-dots'></div>
          <div className='dropdown-content'>
            <span className='option' value="active" onClick={changeStatus}>active</span>
            <span className='option' value="completed" onClick={changeStatus}>completed</span>
            <span className='option' value="deleted" onClick={changeStatus}>deleted</span>
          </div>
        </div>
      </header>
   )
 }
 
 export default Header