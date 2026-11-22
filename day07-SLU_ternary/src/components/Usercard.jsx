import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='p-4 flex flex-col gap-4 border-gray-300 border rounded bg-white'>
        <div className='w-50 h-50 rounded overflow-hidden'>
            <img className='h-full w-full' src="{user.image}" alt="" />
        </div>
      <div className='h-full w-full'>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <button>delete</button>
      </div>
    </div>
  )
}

export default Usercard
