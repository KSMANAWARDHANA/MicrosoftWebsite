/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PagesDropdown from './../DropDowns/ProductDoc';
import ArchiDrop from './../DropDowns/ArchitectureDrop';
import LearnAzDrop from './../DropDowns/LearnAzureDrop';
import MoreDrop from '../DropDowns/MoreDrop';
export default function NavBarBottom(){
    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-white py-2">

            <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-semibold text-xl tracking-tight text-gray-800">Azure</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm ml-4" >
                   
                    <PagesDropdown  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 mr-4"/>
                </div>
                <div className="text-sm" >
                   
                    <ArchiDrop  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 mr-4"/>
                </div>
                <div className="text-sm" >
                   
                    <LearnAzDrop  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 mr-4"/>
                </div>
                <div className="text-sm" >
                   
                    <MoreDrop  className="hover:underline block mt-4 lg:inline-block lg:mt-0 text-black hover:text-blue-800 mr-4"/>
                </div>
            </div>

            <div class="lg:flex flex-grow items-center">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                    <li class="">
                    <a href="./portal/one"
                    >
                        <button className="rounded-sm text-sm bg-transparent hover:underline hover:bg-blue-100 text-blue-700 font-semibold hover:text-black py-1 px-4 border border-blue-500 hover:border-transparent ">Portal</button>
                    </a>
                    
                    </li>
                    <li class="ml-2 ">
                    <a href="./freeAccount">
                    <button className="rounded-sm text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4  hover:underline">Free Account</button>
                    </a>
                    </li>
                    
                </ul>
            </div>
    </nav>

    <hr/>
    </>
    )
}