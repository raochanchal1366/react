import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('button is clicked');
  // }

  // function mouseEnter(){
  //   console.log('Mouse Entered')
  // }

  //  function inputChanging(val){
  //       console.log(val)
  //     }


  // const pageScrolling = (elem) => {
  //   if(elem>0){
  //     console.log('Seedha scrolling')
  //   } else{
  //     console.log('ulta scrolling')
  //   }
  // }


  function btnClicked(){
    console.log('hello');
  }

  
  return (
    <div>
      {/* <h1>Hello, Sarthak</h1>
      <button onClick={btnClicked}>Change user</button>
      <button onClick={() => {
        console.log('Hello guys')
      }}>Click Here</button> */}

      {/* <input 
      onChange={function(elem){
        inputChanging(elem.target.value)
      }} 
      type="text" placeholder='Enter Name'/> */}


    {/* <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div> */}

    <button onClick={btnClicked}>Click</button>
  </div>
  )
}

export default App
