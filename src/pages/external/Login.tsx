import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
  return (
    <>
    <div className='flex flex-col'>
        <button onClick={() => navigate(-1)} className='bg-blue-200 cursor-pointer'>Go Back</button>
        Login
    </div>
    </>
    
  )
}

export default Login