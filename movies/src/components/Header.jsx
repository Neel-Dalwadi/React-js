import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="w-full shadow-sm">
            <div className="bg-gray-900 flex justify-between items-center px-8  text-gray-200 text-sm py-2 text-center">
                Get Dalwadi Membership. 30-day return or refund guarantee.
                <div className="flex items-center space-x-4">
                    <NavLink
                        to="/signin"
                        className="text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                        SIGN IN
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="text-blue-600 font-medium hover:text-blue-800 transition"
                    >
                        SIGN UP
                    </NavLink>
                </div>
            </div>

            <div className="bg-white text-gray-800 flex justify-between items-center px-8 py-4 shadow-md">
                <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
                    Dalwadi<span className="text-gray-800">Flix</span>
                </h1>

                <nav className="hidden md:flex space-x-10 text-sm font-medium">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive
                                ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                                : 'text-gray-600 hover:text-blue-600'
                            }`
                        }
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive
                                ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                                : 'text-gray-600 hover:text-blue-600'
                            }`
                        }
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive
                                ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                                : 'text-gray-600 hover:text-blue-600'
                            }`
                        }
                    >
                        MOVIES
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `transition-colors duration-300 ${isActive
                                ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                                : 'text-gray-600 hover:text-blue-600'
                            }`
                        }
                    >
                        CONTACT
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
