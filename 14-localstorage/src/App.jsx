import React from 'react'

const App = () => {

  // const user = {
  //   username:'Chanchal',
  //   age:18,
  //   city:'Bhopal'
  // }
  // localStorage.setItem('user',JSON.stringify(user))

  // const get = localStorage.getItem('user')
  // console.log(get)
  // console.log(typeof get);

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user);
  return (
    <div>
      App
    </div>
  )
}

export default App
