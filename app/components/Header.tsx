import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className='flex items-center space-x-5'>
        <Link href='/'>
          <img className='w-44 object-contain cursor-pointer' src='/images/medium_logo.png' alt='medium-logo' />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5 pt-3'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600 pt-3'>
        <h3 className=''>Sign in</h3>
        <h3 className='border px-4 py-1 rounded-full border-green-600'>Get started</h3>
      </div>
    </header>
  )
}
