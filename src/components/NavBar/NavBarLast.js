/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import {AiOutlinePlusCircle} from "react-icons/ai";
//import {BiMessageDetail} from "react-icons/bi";
//import {BsPencil} from "react-icons/bs";
//import {FaRegShareSquare} from "react-icons/fa";
//import ShareDrop from './../DropDowns/ShareDrop';


export default function NavBarLast(){
    return(
        <>
          <nav className="flex items-center justify-between flex-wrap bg-white py-3">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Azure</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Virtual Machines</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-red-600 hover:underline">Linux</span>
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
    </>
    )
}