 import React from 'react'
 
 const Header = ({status, setStatus}) => {
 const date = new Date();
 
  const changeStatus = (event) => {
    const options = document.getElementsByClassName("option")
    for (var i = 0; i < options.length; i++) {
     options[i].style.color = "#a7a7a7";
    }
    handleDotsClick()
    event.target.style.color='#0965dd'
    setStatus(event.target.innerText)
  }

  const handleDotsClick = (event) => {
    let content = document.getElementsByClassName("dropdown-content")[0]
    let dots = document.getElementsByClassName("three-dots")[0]
    if (content.style.display === "block") {
      content.style.display = "none"
      dots.style.boxShadow = "none"
    }
    else {
      content.style.display = "block"
      dots.style.boxShadow = "0px 0px 16px rgba(0,0,0,0.2)"
    }
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
          <input type="button" className='three-dots' value="..." onClick={handleDotsClick}/>
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