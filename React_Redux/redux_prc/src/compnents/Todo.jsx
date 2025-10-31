import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../store/Store.jsx";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

function Todo() {
    const [taskInput, setTaskInput] = useState("");
    const tasks = useSelector((state) => state.task);
    const isLoading = useSelector((state) => state.isLoading);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskInput.trim() === "") return;

        dispatch({
            type: ADD_TASK,
            payload: taskInput,
        });

        setTaskInput("");
    };

    const handleDelete = (index) => {
        dispatch({
            type: DELETE_TASK,
            payload: index,
        });
    };

    const handlefetchTasks = () => {
        dispatch(fetchTasks()); 
    };

    return (
        <div className="min-h-screen bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center px-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
                    <i className="fas fa-list-check mr-2"></i> To-Do List
                </h1>
                <p className="text-gray-100 mt-2 text-sm">
                    Stay organized and boost productivity ✨
                </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <div className="flex justify-end">
                    <button
                        onClick={handlefetchTasks} 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium mb-6 transition-all disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? "Fetching..." : "Fetch Tasks"}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex gap-3">
                    <input
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        className="grow border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                        placeholder="Add a new task..."
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
                    >
                        <i className="fas fa-plus mr-1"></i> Add
                    </button>
                </form>

                <ul className="mt-6 space-y-3">
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                            >
                                <span className="text-gray-800">{task}</span>
                                <button
                                    className="bg-transparent hover:bg-red-600 hover:text-white px-3 py-1 rounded-lg font-medium transition-all transform hover:scale-110 focus:outline-none"
                                    onClick={() => handleDelete(index)}
                                >
                                    ❌
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No tasks yet 😴</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Todo;