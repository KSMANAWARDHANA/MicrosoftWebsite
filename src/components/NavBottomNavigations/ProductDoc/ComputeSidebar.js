/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/fa';



export default function ComputeSidebar() {
    const [showSidebar, setShowSidebar] = useState('');
    return (
        <>
           <div className={`h-1/2 mt-4 f md:left-2  ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-gray-200 w-60 z-10 py-4 px-6 transition-all duration-300`}>
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">

                        
               
                    <div className="flex flex-col">
                    <h6 className="text-sm font-semibold">All</h6>
                        <ul className="mt-2 flex-col min-w-full flex list-none space-y-4">
                            <li className="rounded-lg ">
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    AI + Machine Learning
                                </a>
                            </li>

                            <li className="rounded-lg ">
                                <a
                                    href="/profile"
                                    exact
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    Analytics
                                </a>
                            </li>

                            <li className="rounded-lg ">
                                <a
                                    href="/projects"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Azure Virtual Desktop
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/sdk"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Blockchain
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/status"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Compute
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Containers
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Databases
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Developer Tools
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   DevOps
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Hybrid
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Identity
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Integration
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Internet Of Things(Iot)
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Management and Governance
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Media
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Migration
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                   Mixed Reality
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >Mobile
                                </a>
                            </li>

                            <li className="rounded-lg  ">
                                <a
                                    href="/support"
                                    className="flex items-center gap-4 text-sm hover:bg-gray-100 hover:underline font-semibold text-gray-700 font-light  rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >Networking
                                </a>
                            </li>


                           
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
