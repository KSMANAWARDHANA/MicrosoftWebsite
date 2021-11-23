import React from 'react';
import NavBar from '../NavBar/NavBar';
import ComputeSidebar from './../NavBottomNavigations/ProductDoc/ComputeSidebar';

export default function CodeSamples() {
    return (
        <div>
        <NavBar/>
           <div className="py-6 bg-white" >
                <div className=" px-4">
                    <h2 className="text-4xl font-semibold mb-2 text-Black tracking-wider"> Browse code samples</h2>
                    <h3 className="text-lg mb-4 text-gray-800">
                    Get started with Microsoft developer tools and technologies. Explore our samples and discover the things you can build.
                    </h3>
                </div>
            </div>


        {/*gray grid */}


        <div className="-mt-2 bg-gray-300 grid grid-cols-6 gap-2 h-1/2 ">
        
            <div className="bg-transparent p-3 rounded-lg mt-4 row-span-6 mb-4 ml-4">
               <ComputeSidebar/>
            </div>
             <div className="bg-transparent p-3 rounded-xl mt-8 col-span-4 mr-4 mb-4 h-20">
                
                        <div class="flex w-full ">
                                <div class="flex  rounded">
                                    <input type="text" class="px-48 py-2 w-80" placeholder="Search..."/>
                                    <button class="ml-2 px-4 text-white bg-blue-600 ">
                                        Search
                                    </button>
                                </div>
                        </div>
               
             </div>
            <div className="bg-transparent p-3 rounded-xl -mt-24 col-span-2 mr-4 mb-4 h-20"></div>
            <div className="bg-transparent p-3 rounded-xl mt-48 col-span-2 mr-4 mb-4 h-20"></div>
            <div className="bg-transparent p-3 rounded-xl mt-48  col-span-2 mr-4 mb-4 h-20"></div>
        </div>


    </div>
    )
}
