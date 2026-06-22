import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero magni impedit cum repudiandae! Pariatur?</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className='text-white font-medium px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
