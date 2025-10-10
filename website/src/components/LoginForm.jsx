import React, { useState } from 'react'

function LoginForm() {
    const [userName , setUserName]  = useState("")
    const [password , setPassword]  = useState("")


    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold text-center mb-4'>Login Form</h1>
                <form
                    className='flex flex-col space-y-4'
                    onSubmit={(e)=>{
                        e.preventDefault();
                        console.log("Submitted");
                    }}
                >
                    <label htmlFor="username" className='text-gray-500'>Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        placeholder='Enter your username'
                        required
                        autoComplete='off'
                        onChange={(e)=>setUserName(e.target.value)}
                        value={userName}
                    />
                    <label htmlFor="password" className='text-gray-500'>Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                        placeholder='Enter your password'
                        required
                        autoComplete='off'
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm