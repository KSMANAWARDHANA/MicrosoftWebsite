/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Save() {
    return (
        <div>
           <div className="flex items-center justify-center min-h-screen bg-gray-300">
                <div className="px-32 py-12 mt-4 text-left bg-white shadow-lg">
                        
                        <h4 className="mt-2 font-semibold text-2xl tracking-tight text-black -ml-24">Please SignIn to add this to your Collection</h4>
                       
                        <div className="flex-auto flex flex-row-reverse ml-12 mt-4">
               
                        <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  font-semibold cursor-pointer 
                            hover:bg-blue-600  
                            bg-blue-600 
                            text-white 
                            border duration-200 ease-in-out 
                            transition">Next
                        </button>

                        <button className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  font-semibold cursor-pointer 
                            hover:bg-gray-300  
                            bg-gray-300 
                            text-black
                            border duration-200 ease-in-out 
                            border transition">Back
                        </button>

                        </div>
                </div>
            </div>
        </div>
    )
}


