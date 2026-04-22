import React, { useState } from 'react'
import { getData } from '../api/mediaAPI';
import { setError, setLoading, setresult } from '../features/SearchSlice';
import { useDispatch, useSelector } from 'react-redux';

import homeIcon from '../assets/home.png'
import { setHome } from '../features/HomeSlice';



function SearchBar() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    
    const handelSubmit = async (e) => {
        e.preventDefault();

        dispatch(setHome(true));
        dispatch(setLoading());
        dispatch(setError(null));

        const data = await getData(text);
        (data) ?  dispatch(setresult(data)) : dispatch(setError('Something Went Wrong'))
        setText('');
    }

    const handelHome = () => {
        dispatch(setHome(false));
        dispatch(setresult([]));
        dispatch(setError(null));
    }

    return ( 
        <div className='flex items-center justify-center gap-5 max-w-4xl mx-5 md:mx-auto mt-4 md:px-10 lg:px-20'>
            <div className='font-medium w-12'>
                <img onClick={handelHome} className='cursor-pointer active:scale-95' src={homeIcon} alt="" />
            </div>
            <form
                onSubmit={handelSubmit}
                className="md:w-2xl w-full"
            >
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>

                <div className="relative">
                    <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>

                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Photos..."
                        required
                    />

                    <button
                        type="submit"
                        className="text-white absolute inset-e-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 active:scale-95 cursor-pointer"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar