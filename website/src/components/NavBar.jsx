import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="text-2xl font-bold">Shopping App</Link>
                <div className="space-x-6">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar