import React from 'react'

export default function ButtonSimple(props) {
    console.log(props.bg)
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click Me
    <i className="fa-solid fa-book"></i>
    </button>
  )
}
export  function ButtonSimple1(props) {
    console.log(props.bg)
  return (
    <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'    >Off Day
    <i className="fa-regular fa-bell"></i>
    </button>
  )
}
