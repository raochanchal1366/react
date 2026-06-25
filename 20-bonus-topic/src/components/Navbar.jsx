import React from 'react'

const Navbar = (props) => {

  function changeTheme(){
    props.setTheme('dark')
  }

  return (
    <div>
      <p>{props.theme}</p>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
