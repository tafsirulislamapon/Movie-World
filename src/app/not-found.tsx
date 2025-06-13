import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gray-200 '>
      <h1 className='text-[32px] text-red-500 font-bold'>404 -Page Not Found</h1>
      <p>The page you are looking for does not exist. <Link href={"/"} className='text-blue-500 hover:text-blue-900 font-bold'> Home</Link></p>
    </div>
  )
}

export default NotFound
