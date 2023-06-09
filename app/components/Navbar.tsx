
import React from 'react'
import LoginButton from './LoginButton'

export const Navbar = () => {
  return (
      <nav className='flex items-center justify-between w-full h-12 bg-slate-800 px-3'>
        <h1>Next-auth</h1>
        <LoginButton />
      </nav>
  )
}
