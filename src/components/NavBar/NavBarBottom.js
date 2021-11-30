/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export default function NavBarBottom(){
    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-white py-2">

            <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-semibold text-xl tracking-tight text-red-600"></span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

            </div>

            <div class="lg:flex flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="">
                    <a href="http://20.115.6.19/login"
                    >
                        <button className="rounded-sm text-sm bg-transparent hover:underline hover:bg-red-100 text-red-600 font-semibold hover:text-black py-1 px-4 border border-red-500 hover:border-transparent ">Portal</button>
                    </a>
                    
                    </li>
                    <li class="ml-2 ">
                    <a href="http://20.115.6.19/register">
                    <button className="rounded-sm text-sm bg-red-600 hover:bg-blue-700 text-white font-bold py-1 px-4  hover:underline">Free Account</button>
                    </a>
                    </li>
                    
                </ul>
            </div>
    </nav>

    <hr className="border-red-300"/>
    </>
    )
}