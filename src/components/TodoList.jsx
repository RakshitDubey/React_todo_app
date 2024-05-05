import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletetodo } from '../redux/todoSlice';
import { toggleComplete } from '../redux/todoSlice';

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletetodo({ id }));
    };

    const handleCheck = (id, completed) => {
        dispatch(toggleComplete({ id, completed}));
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            {todos.length ? (
                <ul className="divide-y divide-gray-300">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between py-4">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" checked={todo.completed} onChange={() => handleCheck(todo.id, todo.completed)} />
                            <span className={`ml-3 text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                {todo.title}
                            </span>
                            <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => handleDelete(todo.id)}>
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M15.293 4.293a1 1 0 011.414 1.414L11.414 10l5.293 5.293a1 1 0 11-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 11-1.414-1.414L8.586 10 3.293 4.707a1 1 0 111.414-1.414L10 8.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500 text-center">No todos found.</p>
            )}
        </div>
    );
}

export default TodoList;
