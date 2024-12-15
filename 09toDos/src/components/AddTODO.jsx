import React from 'react'
import { useState } from 'react'

const AddTODO = ({task,handleCancel}) => {

    const [edit,setEdit] = useState(false);

  return (

    <div className='flex mx-auto w-[50%] bg-slate-300 p-2 rounded-md mt-4 justify-between'>
      <div className='flex items-center text-gray-800 space-x-2'>
      <input type="checkbox" name="" />
       
      </div>
      
      <div className='space-x-2'>
      <button 
      className='bg-yellow-400 p-1 px-2 text-white font-bold rounded'>Edit</button>
      <button 
      onClick={() => handleCancel(task.id)}
      className='bg-red-500 p-1 px-2 text-white font-bold rounded'>Cancel</button>
      </div>
    </div>
  )
}

export default AddTODO
