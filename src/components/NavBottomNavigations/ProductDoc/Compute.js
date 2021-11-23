/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NavBar from '../../NavBar/NavBar';
import NavBarBottom from '../../NavBar/NavBarBottom';
//import ComputeSidebar from './ComputeSidebar';

export default function Compute() {
    return (
        <div>
        <NavBar/>
            <NavBarBottom/>
           

            <div className="py-10 bg-blue-800" >
                <div className=" px-4">
                    <h2 className="text-3xl font-bold mb-2 text-white">Azure Documentation</h2>
                    <h3 className="text-lg mb-4 text-gray-200">
                    Learn how to build and manage powerful applications using Microsoft Azure cloud services. Get documentation, example code, tutorials, and more
                    </h3>
                </div>
            </div>


            <div className="mt-8 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/*card 01*/}
            <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                <h5 className="font-normal text-black uppercase">Get Started</h5>
                   <a className="px-3 py-2 flex items-center text-lg  font-semibold leading-snug text-blue-700 hover:opacity-75 mb-2" href="#j">
                        Get Started guide for Azure developers
                     </a>
                </div>
            </div>

             {/*card 02*/}

             <div className="rounded overflow-hidden shadow-lg px-6 py-4">
             <h5 className="font-normal text-black uppercase">Architecture</h5>
                <div className="">
                   <a className="px-3 py-2 flex items-center text-lg  font-semibold leading-snug text-blue-700 hover:opacity-75 mb-2" href="#j">
                        Design Your app using the Azure Architecture Center
                     </a>
                </div>
            </div>

            {/*card 03*/}

            <div className="rounded overflow-hidden shadow-lg px-6 py-4">
             <h5 className="font-normal text-black uppercase">Overview</h5>
                <div className="">
                   <a className="px-3 py-2 flex items-center text-lg  font-semibold leading-snug text-blue-700 hover:opacity-75 mb-2" href="#j">
                        Prepare your org with the Cloud Adoption Framework
                     </a>
                </div>
            </div>

            {/*card 04*/}

            <div className="rounded overflow-hidden shadow-lg px-6 py-4">
             <h5 className="font-normal text-black uppercase">Learn</h5>
                <div className="">
                   <a className="px-3 py-2 flex items-center text-lg  font-semibold leading-snug text-blue-700 hover:opacity-75 mb-2" href="#j">
                        Build your skills with Microsoft Learn
                     </a>
                </div>
            </div>
        </div>

        {/*gray grid */}


        {/* <div className="mt-8 bg-gray-300 grid ">
        
            <div className="mt-8 bg-gray-300 grid grid-cols-6 gap-2 h-1/2  bg-transparent p-3 rounded-lg mt-4 row-span-6 mb-4 ml-4">
               <ComputeSidebar/>
            </div>
        </div> */}

        <div className=" my-12 mx-auto px-4 md:px-12  bg-gray-300">
            <div className="flex flex-1 -mx-1 lg:-mx-4">
            {/*flex-wrap*/}

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg bg-white">
                
            </article>
        </div>

       
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden shadow-lg bg-white px-3 py-4">
                
                <img alt="Placeholder" className="block h-auto mt-2 ml-2  h-8 w-12" src="https://icon-library.com/images/global-icon-png/global-icon-png-15.jpg"/>
                
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            App Service
                        </a>
                    </h1>
                </header>
                <p className="ml-2 text-sm font-normal mb-4">
                           Quickly create Powerful cloud apps for web and mobile
                </p>
            </article>
        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden shadow-lg bg-white px-3 py-4">
                
                <img alt="Placeholder" className="block h-auto mt-2 ml-2  h-8 w-12" src="https://icon-library.com/images/global-icon-png/global-icon-png-15.jpg"/>
                
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            App Service
                        </a>
                    </h1>
                </header>
                <p className="ml-2 text-sm font-normal mb-4">
                           Quickly create Powerful cloud apps for web and mobile
                </p>
            </article>
        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden shadow-lg bg-white px-3 py-4">
                
                <img alt="Placeholder" className="block h-auto mt-2 ml-2  h-8 w-12" src="https://icon-library.com/images/global-icon-png/global-icon-png-15.jpg"/>
                
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            App Service
                        </a>
                    </h1>
                </header>
                <p className="ml-2 text-sm font-normal mb-4">
                           Quickly create Powerful cloud apps for web and mobile
                </p>
            </article>
        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden shadow-lg bg-white px-3 py-4">
                
                <img alt="Placeholder" className="block h-auto mt-2 ml-2  h-8 w-12" src="https://icon-library.com/images/global-icon-png/global-icon-png-15.jpg"/>
                
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            App Service
                        </a>
                    </h1>
                </header>
                <p className="ml-2 text-sm font-normal mb-4">
                           Quickly create Powerful cloud apps for web and mobile
                </p>
            </article>
        </div>

        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden shadow-lg bg-white px-3 py-4">
                
                <img alt="Placeholder" className="block h-auto mt-2 ml-2  h-8 w-12" src="https://icon-library.com/images/global-icon-png/global-icon-png-15.jpg"/>
                
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            App Service
                        </a>
                    </h1>
                </header>
                <p className="ml-2 text-sm font-normal mb-4">
                           Quickly create Powerful cloud apps for web and mobile
                </p>
            </article>
        </div>


        

        
       

       

        

        
    
        
       

    </div>
</div>


    </div>
    )
}
