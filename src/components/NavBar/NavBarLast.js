/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {BiMessageDetail} from "react-icons/bi";
import {BsPencil} from "react-icons/bs";
//import {FaRegShareSquare} from "react-icons/fa";
import ShareDrop from './../DropDowns/ShareDrop';


export default function NavBarLast(){
    return(
        <>
          <nav className="flex items-center justify-between flex-wrap bg-white py-1">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-normal text-sm tracking-tight text-indigo-500 hover:underline">Azure</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-indigo-500 hover:underline">Virtual Machines</span><h6 className="text-gray-800 ml-4">/</h6>
                    <span className="ml-5 font-normal text-sm tracking-tight text-indigo-500 hover:underline">Linux</span>
                </div>

                <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">

                          <li className="">
                              <a className="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" 
                              href="/navlast/save">
                                <AiOutlinePlusCircle className="text-lg leading-lg text-blue-800" /><span class="ml-1">Save</span>
                              </a>
                          </li>

                          <li class="">
                          <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" 
                          href="/navlast/feedback">
                              <BiMessageDetail className="text-lg leading-lg text-black opacity-75" /><span class="ml-1">Feedback</span>
                            </a>
                          </li>
       
                          <li class="">
                          <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75"
                           href="/navlast/edit">
                              <BsPencil className="text-lg leading-lg text-black opacity-75" /><span class="ml-1">Edit</span>
                            </a>
                          
                          </li>

                          <li class="">
                            {/* <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75"
                             href="/navlast/share">
                              <FaRegShareSquare className="text-lg leading-lg text-black opacity-75" /><span class="ml-1">Share</span>
                            </a> */}
                            <ShareDrop/>
                          </li>
                    </ul>
                </div>
          </nav>
    </>
    )
}