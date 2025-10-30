'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const Logout = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/login' });
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout