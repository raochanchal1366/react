 import React, { useState } from 'react'
 import { X } from 'lucide-react'
 
 const App = () => {

   const [title, setTitle] = useState('');
   const [details, setDetails] = useState('');

   const [task, setTask] = useState([]);

   const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,details});
    setTask(copyTask);

     setTitle('');
     setDetails('');
   }

   const deleteNote = (idx) => {
     const copyTask = [...task];
     copyTask.splice(idx,1);
     setTask(copyTask);
   }


   return (
     <div className='lg:flex h-screen bg-black text-white'>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }} 
        className='flex lg:w-1/2 gap-4 flex-col items-start p-10'>
          
        <h1 className='text-4xl font-bold'>Add Notes</h1>
         
     {/* PEHLA INPUT FOR HEADING */}
        <input 
          type="text" 
          placeholder='Enter Notes Heading' 
          className='w-full font-medium px-5 py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
          
       {/* DETAILED VALA INPUT */}
        <textarea
          type="text" 
          placeholder='Write Details here' 
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row outline-none border-2 rounded' 
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
          
        <button 
        className='bg-white active:scale-95 text-black font-medium outline-none w-full px-5 py-2 rounded'>
        Add Notes
        </button>

        </form>

        <div className='lg:w-1/2 lg:border-l-2 p-10'>
          <h1 className='text-4xl font-bold'>Recent Notes</h1>

          <div className='flex gap-5 flex-wrap items-start justify-start mt-5 h-[90%] overflow-auto'>
            {task.map(function(elem, idx){
              return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover text-black py-6 pt-4 px-4 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/694/small/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold'>Delete</button>
          </div>
            })}
          </div>
        </div>
     </div>
   )
 }
 
 export default App
 