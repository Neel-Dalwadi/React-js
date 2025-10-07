import React, { use, useEffect } from 'react'
import { useState } from 'react'
import { MdDeleteForever, MdCheck, MdTaskAlt } from 'react-icons/md';


function Todo() {

    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])
    const [dateTime, setDateTime] = useState("");

    const handleInputChange = (value) => {
        setInputValue(value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }

        setTask((prev) => {
            return [...prev, inputValue]
        })
        setInputValue("");
    }
    const handleDeleteTask = (index) => {
        const updatedTask = task.filter((curTask) => {
            return curTask !== task[index]
        })
        setTask(updatedTask)
    }

    const handleDeleteAllTasks = () => {
        setTask([])
    }
    const handleCheckTask = (index) => {
        const updatedTasks = [...task];
        updatedTasks[index] = (
            <span className="line-through text-gray-400">{task[index]}</span>
        );
        setTask(updatedTasks);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="h-screen flex items-center justify-center bg-[#0a2a36]">
            <div className="w-full max-w-md p-8 bg-[#102d3a] rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-white text-center mb-2">Todo List</h1>
                <h2 className='text-xl font-bold text-white text-center  mb-6'>{dateTime}</h2>
                <form onSubmit={handleFormSubmit} className="flex flex-row items-center justify-center gap-3">
                    <input
                        type="text"
                        placeholder="Add a task"
                        className="flex-1 p-3 rounded-md border text-white border-gray-400 focus:outline-none  focus:ring-blue-400"
                        value={inputValue}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-5 py-3 rounded-md transition-all duration-300"
                    >
                        Add Task
                    </button>
                </form>
                <div className="mt-10 flex justify-center">
                    <ul className="w-full max-w-md list-none space-y-3">
                        {task.map((item, index) => (
                            <li
                                key={index}
                                className="bg-[#143b49] flex items-center justify-between text-white text-lg font-medium py-3 rounded-md text-center border border-[#1e4d5d] shadow-md hover:bg-[#1a4755] transition-all duration-300"
                            >
                                <span
                                    className={`flex-1 text-center ${item.completed ? "line-through text-gray-400" : ""
                                        }`}
                                >{item}</span>
                                <button
                                    onClick={() => handleCheckTask(index)}
                                    
                                    className={`mr-4 ${item.completed
                                        ? "text-green-700 cursor-not-allowed"
                                        : "text-green-400 hover:text-green-600"
                                        }`}
                                    title={
                                        item.completed ? "Task Completed" : "Mark as Completed"
                                    }
                                >
                                    <MdCheck size={24} />
                                </button>
                                <button
                                    onClick={() => handleDeleteTask(index)}
                                    className='flex-1 flex justify-end'>
                                    <MdDeleteForever
                                        className="text-red-400 mr-10 cursor-pointer hover:text-red-600 transition-colors duration-200"
                                        title='Delete Task' />
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>

                <button
                    onClick={() => handleDeleteAllTasks()}
                    className='bg-red-500 hover:bg-red-600  ml-35 mt-5 hover:cursor-pointer text-white px-5 py-3 rounded-md transition-all duration-300'>
                    Clear All
                </button>

            </div>

        </div>
    )
}

export default Todo