import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/todoSlice';
const TodoInput= () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch=useDispatch()


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to server or updating state
        if(inputValue){
            dispatch(addtodo({title:inputValue}))
            setInputValue('')
            
        }
        
    };

    return (
        <>       
        <h2 className='text-center text-blue-800 text-3xl mt-20'>Welcome to Todo App</h2>
         <form onSubmit={handleSubmit} className="flex items-center justify-center mt-8">
           
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter something..."
                className="border border-gray-400 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r focus:outline-none focus:ring focus:ring-blue-300  m-20"
            >
            Add
            </button>
        </form>
        </>

    );
};

export default TodoInput;
