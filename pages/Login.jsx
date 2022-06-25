import React, { useState } from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth()


  const logInHandler = async (event) => {
    event.preventDefault()
    setError('')
    try {
      console.log(email, password)
      await logIn(email, password)
      console.log(router)
      router.push('home')
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  const router = useRouter();
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Log In</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
              <form className='w-full flex flex-col py-4' onSubmit={logInHandler}>
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input type='checkbox' className='mr-2' />Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-4'><span className='text-gray-600'>New to Netflix ? </span><Link href='/signup'> Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login