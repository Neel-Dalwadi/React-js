import React, { useState } from 'react'

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => {
        setIsOn(!isOn)
    }

    return (
        <div className="flex flex-col items-center gap-3 p-6">
            <div
                onClick={toggleSwitch}
                className={`relative w-24 h-12 flex items-center justify-between px-2 rounded-full cursor-pointer transition-all duration-300 shadow-md ${
                    isOn ? 'bg-green-500' : 'bg-red-500'
                }`}
            >
                <div
                    className={`absolute top-1 left-1 w-10 h-10 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        isOn ? 'translate-x-12' : 'translate-x-0'
                    }`}
                ></div>
                <span
                    className={`absolute left-4 text-sm font-bold text-white transition-opacity duration-300 ${
                        isOn ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    OFF
                </span>
                <span
                    className={`absolute right-4 text-sm font-bold text-white transition-opacity duration-300 ${
                        isOn ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    ON
                </span>
            </div>
            <p className="font-semibold text-gray-700">
                Switch is{' '}
                <span className={isOn ? 'text-green-600' : 'text-red-600'}>
                    {isOn ? 'ON' : 'OFF'}
                </span>
            </p>
        </div>


    )
}

export default ToggleSwitch