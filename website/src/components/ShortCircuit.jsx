import React, { useState } from 'react'

function ShortCircuit() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user,setUser] = useState("")

    return (
        <div className='flex flex-col items-center justify-center h-screen space-y-6'>
            <h1 className='text-3xl font-bold'>Welcome to Short Circuit Evaluation</h1>

            { isLoggedIn && <p className='text-xl'>You are logged in!</p> }
            { user ? `Hello, ${user}!` : "No user logged in." }

            <div className='space-x-4'>
                <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
                    Toggle Login State
                </button>
                <button
                    onClick={() => setUser("Neel Dalwadi")}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
                    Set User</button>
                <button
                    onClick={() => setUser("")}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'>
                    Clear User
                </button>
            </div>
        </div>
    )
}

export default ShortCircuit