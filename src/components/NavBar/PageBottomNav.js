/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
export default function PageBottomNav(){
    
    return(
        <>
        <nav className="flex items-center justify-between flex-wrap bg-gray-300 py-4">

                 <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="ml-5 font-normal text-sm tracking-tight text-black hover:underline">English(United States)</span>
                    <span className="ml-5 font-normal text-sm tracking-tight text-black hover:underline">Linux</span>
                </div>

            <div class="lg:flex flex-grow items-center" id="example-navbar-warning">

              <ul class="flex flex-col lg:flex-row list-none ml-auto">

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1 ">Previous Version Docs</span>
                </a>
                </li>

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Blog</span>
                </a>
                </li>
            
                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Contribute</span>
                </a>
                
                </li>

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Privacy & Cookies</span>
                </a>
                
                </li>

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Terms of Use</span>
                </a>
                
                </li>

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Trademarks</span>
                </a>
                
                </li>

                <li class="nav-item">
                <a class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">&copy Microsoft 2021</span>
                </a>
                
                </li>
            </ul>
        </div>
   </nav>
    </>
    )
}