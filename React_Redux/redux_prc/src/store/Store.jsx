import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASKS = "task/fetch";
const SET_TASKS = "task/set";

const initialState = {
    task: [],
    isLoading: false,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            };

        case DELETE_TASK:
            const updatedTask = state.task.filter((_, index) => index !== action.payload);
            return {
                ...state,
                task: updatedTask,
            };

        case FETCH_TASKS:
            return {
                ...state,
                isLoading: true
            }

        case SET_TASKS:
            return {
                ...state,
                task: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export const store = createStore(taskReducer, applyMiddleware(thunk));

export const fetchTasks = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TASKS });
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
            const data = await response.json();
            const tasks = data.map((t) => t.title);
            console.log(tasks)
            dispatch({
                type: SET_TASKS,
                payload: tasks,
            });
        } catch (error) {
            console.error("Error fetching tasks:", error);
            dispatch({ type: SET_TASKS, payload: [] });
        }
    }
};