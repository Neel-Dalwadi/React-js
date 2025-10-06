import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className='text-3xl font-bold underline'>Welcome to Shop</h1>
            <p className='text-gray-600'>Your one-stop shop for all your needs.</p>
            <Link to="/products" className="text-blue-600 hover:underline">Shop Now</Link>
        </div>
    )
}

export default Home