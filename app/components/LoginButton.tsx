'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  const { data: session } = useSession();

  if(session && session.user) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-500'>{session.user.name}</p>  
        <button className='text-gray-300' onClick={() => signOut()}>Logout</button>
      </div>
    )
  }
  return (
    <button className='text-rose-300 ml-auto' onClick={() => signIn()}>
     Login
    </button>
  )
}

export default LoginButton