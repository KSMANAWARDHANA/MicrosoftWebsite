/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router-dom';


export default function NavBarLast(){
    const location = useLocation().pathname;
    return(
        <>
          <nav className="flex items-center justify-between flex-wrap bg-white py-3">

                <h4 className="text-red-600 text-sm font-semibold tracking-wider mt-1 ml-4">
                        {location === '/'
                            ? 'Bethel'
                            : location.replace('/', '')}
                    </h4>
                {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Azure</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Virtual Machines</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Linux</span>
                </div> */}

                <div class="lg:flex flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    {/* <li class="">
                    <a href="http://20.115.6.19/login"
                    >
                        <button className="rounded-sm text-sm bg-transparent hover:underline hover:bg-red-100 text-red-600 font-semibold hover:text-black py-1 px-4 border border-red-500 hover:border-transparent ">Bethel Portal</button>
                    </a>
                    
                    </li> */}
                    <li class="ml-2 ">
                    <a href="http://20.115.6.19/register">
                    <button className="mr-2 rounded-sm text-sm bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-4  hover:underline">Bethel Account</button>
                    </a>
                    </li>
                    
                </ul>
            </div>
           
          </nav>
          {/* <hr className="border-red-300"/> */}
    </>
    )
}