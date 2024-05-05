import { createSlice } from "@reduxjs/toolkit";

// Load todos from local storage or use initial state if no data is stored
const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [
    {
        id: 1,
        title: "Do some Coding",
        completed: false,
    },
    {
        id: 2,
        title: "Complete assignment",
        completed: false,
    }
];

export const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: new Date().getTime(), // Use timestamp as id
                title: action.payload.title,
                completed: false
            };
            state.push(todo);
            localStorage.setItem('todos', JSON.stringify(state)); // Save todos to local storage
        },
        deletetodo: (state, action) => {
            const newState = state.filter((item) => item.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(newState)); // Save todos to local storage
            return newState;
        },
        toggleComplete: (state, action) => {
            const todoToUpdate = state.find(todo => todo.id === action.payload.id);
            if (todoToUpdate) {
                todoToUpdate.completed = !todoToUpdate.completed;
                localStorage.setItem('todos', JSON.stringify(state)); // Save todos to local storage
            }
        }
    }
});

export const { addtodo, deletetodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
