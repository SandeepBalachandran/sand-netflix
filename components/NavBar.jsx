import Link from 'next/link'
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router';

const NavBar = () => {
    const { user, logOut } = UserAuth();
    const router = useRouter();
    console.log(user)

    const handleLogout = async () => {
        try {
            await logOut()
            router.push('Login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
                <Link href="/Home"><h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1></Link>
                {user?.email ? (<div>
                    <button className='text-white pr-4' onClick={handleLogout}>Log Out</button>
                    <Link href="/Account"><button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Account</button></Link>
                </div>) :

                    (<div>
                        <Link href="/Login"><button className='text-white pr-4'> Sign In</button></Link>
                        <Link href="/Signup"><button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Up</button></Link>
                    </div>)}
            </div>
        </>
    )
}

export default NavBar