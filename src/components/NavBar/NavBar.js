/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import bethel from './bethel.png';
export default function NavBar(){
    return(
        <>
      
        <nav className="flex items-center justify-between flex-wrap bg-red-100 py-4 divide-x-2 divide-red-600">

                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <img className= "fill-current h-8 w-8 mr-2 ml-2"  width="54" height="54" alt="" src={bethel} />
                    
                    <span className="font-semibold text-2xl tracking-wider text-red-600 uppercase">
                    <a href="/">Bethel</a></span>
                </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md ml-6">
                <a href="/navbar/doc" className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-red-800 mr-4 text-md font-semibold">
                    Documentation
                </a>
               
               
                <a href="/navbar/codeSample" className="hover:underline mr-4 block mt-4 lg:inline-block lg:mt-0 text-red-600 font-semibold hover:text-red-800">
                    CodeSamples
                </a>
               
            </div>

            <div class="lg:flex flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <div class="flex">
                            <span class="items-center font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-red-300 rounded text-sm bg-white items-center rounded-r-none pl-2 py-1 text-gray-600 border-r-0 placeholder-gray-300">
                                <i class="fas fa-search text-red-600"></i>
                            </span>
                            <input type="text" class="px-2 py-1 h-8 border border-solid  border-red-300 rounded text-sm leading-snug text-gray-700 bg-white shadow-none outline-none focus:outline w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-800" placeholder="Search.." />
                        </div>
                    </li>

                    {/* <li class="nav-item ">
                        <button className="ml-4 text-blue-600  px-2 text-sm hover:underline mr-4 block mt-4 lg:inline-block lg:mt-0 text-black hover:text-red-800 hover:bg-gray-300 hover:underline">Sign In</button>
                    </li> */}

                    <a
                    href='http://20.115.6.19/login'
                    target='_self'
                    >
                    <li class="nav-item text-bold">
                        <button className="ml-4 text-red-600 text-bold  px-2  hover:underline mr-4 block mt-4 lg:inline-block lg:mt-0  hover:text-red-800 hover:bg-red-300 hover:underline">Sign In</button>
                    </li>
                    </a>
                </ul>
            </div>
        </div>
    </nav>
    {/* <hr className="border-red-300"/> */}
</>
    )
}