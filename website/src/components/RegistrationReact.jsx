import React from 'react'
import { useState } from 'react';

function RegistrationReact() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            phone: user.phone,
        };
        console.log("User Data Submitted:", userData);
        alert("Registration Successful!");
    }

    return (
        <div className='max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg'>
            <p className='mb-6 text-gray-700'>
                Hello , my name is <span className='font-bold text-blue-500'>{user.firstName} {user.lastName}</span>.
                .my email is <span className='font-bold text-blue-500'>{user.email}</span>
                ,my password is <span className='font-bold text-blue-500'>{user.password}</span>
                and my phone number is <span className='font-bold text-blue-500'>{user.phone}</span>.
            </p>
            <form
                onSubmit={handleSubmitForm}
                className='flex flex-col space-y-4'
            >
                <h1 className='text-2xl font-bold text-center mb-4'>Sign Up</h1>
                <p className='text-center mb-4 text-gray-500'>Please fill in this form to create an account.</p>

                <label htmlFor="FirstName" className='text-gray-500'><b>First Name</b></label>
                <input
                    type="text"
                    name="firstName"
                    placeholder='Enter First Name'
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    required
                    value={user.firstName}
                    onChange={handleInputChange}
                />
                <label htmlFor="lastName" className='text-gray-500'><b>Last Name</b></label>
                <input
                    type="text"
                    name="lastName"
                    placeholder='Enter Last Name'
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    required
                    value={user.lastName}
                    onChange={handleInputChange}
                />
                <label htmlFor="email" className='text-gray-500'><b>Email</b></label>
                <input
                    type="text"
                    name="email"
                    placeholder='Enter Email'
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    required
                    value={user.email}
                    onChange={handleInputChange}
                />
                <label htmlFor="password" className='text-gray-500'><b>Password</b></label>
                <input
                    type="password"
                    name="password"
                    placeholder='Enter Password'
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    required
                    value={user.password}
                    onChange={handleInputChange}
                />
                <label htmlFor="phone" className='text-gray-500'><b>Phone</b></label>
                <input
                    type="text"
                    name="phone"
                    placeholder='Enter Phone'
                    className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                    required
                    value={user.phone}
                    onChange={handleInputChange}
                />
                <p className='text-sm text-gray-500 text-center mb-4'>
                    By creating an account you agree to our
                    <a href="#" className='text-blue-500 hover:underline'>Terms & Privacy</a>.
                </p>

                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationReact