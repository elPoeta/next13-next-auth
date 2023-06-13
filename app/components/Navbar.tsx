
import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'

export const Navbar = () => {
  return (
      <nav className='flex items-center justify-between w-full h-12 bg-slate-800 px-3'>
        <div className='flex gap-4'>
        <Link className="transition-colors hover:text-blue-500"  href={"/"}>Next-auth</Link>
        <Link className="transition-colors hover:text-blue-500" href={"/posts"}>Posts</Link>
        </div>
        <LoginButton />
      </nav>
  )
}
