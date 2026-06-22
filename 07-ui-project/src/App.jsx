import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    { 
      img:'https://i.pinimg.com/736x/b4/be/c1/b4bec14165ebdcc0cbac5fb0ecdb843e.jpg',
      color:'royalblue',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://i.pinimg.com/736x/e1/f0/99/e1f099e945a8dd32336bf82552552649.jpg',
      color:'lightseagreen',
      intro:'',
      tag:'UnderServed'
    },
    {
      img:'https://i.pinimg.com/736x/eb/71/27/eb712743b181b32879f994796751de5d.jpg',
      color:'orange',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
