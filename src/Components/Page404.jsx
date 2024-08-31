import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='h-screen flex justify-center items-center bg-black text-blue-400 w-full'>

<div className="flex flex-col items-center justify-center text-center h-screen">
  <div className="border-1 border-orange">
    <img className="w-[10rem]" src="/nuh-uh.gif" alt="Nuh-uh" />
  </div>
        <h1 className='text-[10rem]'>404</h1>
        <button className='text-[1rem] font-nav text-black bg-blue-500 p-[0.5rem_1rem] font-bold rounded-[0.4rem]' ><Link to="/docs">BACK TO DOCS</Link></button>
      </div>
    </div>
  )
}
