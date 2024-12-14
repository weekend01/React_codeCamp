import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {id} = useParams(); //Extracts the dyanamic parameter
  return (
    <div className='bg-orange-200 p-2 font-bold text-lg items-center '>
       User Id : {id}
    </div>
  )
}

export default User
