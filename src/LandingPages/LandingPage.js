/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LandingFooter from './LandingFooter';
import LandingNav from './LandingNav';
//import { MdKeyboardArrowRight } from "react-icons/md";

export default function LandingPage(){
    return(
        <>
      
      <LandingNav/>
        <div className="py-16  mt-4 grid grid-cols-2" >
            <div class="mt-12 text-3xl font-bold text-left ml-12">
                        {/* <img src="https://www.aalpha.net/wp-content/uploads/2021/02/decentralized.gif" rounded raised  /> */}
                        <h1 className="text-red-600">Technology that is efficient and essential<br/></h1>
                        <h1 className="text-red-600">Blockchain is transforming the world at a <br/>rapid rate!</h1>
                        <p className="text-lg font-semibold text-gray-800">With BETHEL, developers can now enjoy unparalleled ease with this technology,<br/> as it supports a number of programming languages for them to work with.</p>
            </div>

            <div class="flex w-full">
                <form class="">
                        <h5 className="mb-4 text-left font-semibold">Welcome to BETHEL.Sign Up to get Started.</h5>

                        <div class="">
                            <input class="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                            <input class="mt-2 shadow  border  rounded-lg w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                            <input class=" shadow  border  rounded-lg w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                        </div>

                        <div class="flex items-center justify-between">
                            <button class="mt-6 bg-red-600 w-full hover:bg-red-500 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline" type="button">
                                Deploy in seconds
                            </button>
                        </div>

                        <h5 className="mt-4 text-left font-normal mt-2">By signin up you agree to the <a href="#ghj" className="underline">Terms Of Service</a></h5>
                </form>
            </div>
        </div>



        <div className="w-full bg-red-100 grid grid-cols-3 py-12">
            <div className="px-12 text-left space-y-4 col-span-3">
                <p className="text-3xl font-semibold text-gray-700"> Simplifying blockchain development with BETHEL Blockchain Development Kit (BDK)! </p> 
                <p className="text-xl font-semibold text-red-800" >
                BETHEL Blockchain Development Kit (BDK) aims to lower barriers to blockchain development and empower developers, with an unmatched range of tools to work on their projects, easily! 
                </p>

            </div>

        </div>

         <div className="bg-red-100 flex  rounded mb-8 h-24 mb-4">
                {/* <div className="w-1/3 mt-8">
                    <h3 className="font-bold text-2xl text-black text-center">
                    <img className= "fill-current h-24 w-24 mr-2 ml-2" alt="" src="https://cdn-icons-png.flaticon.com/512/1388/1388519.png" />
                    <span className="font-semibold text-2xl tracking-wider text-red-600 uppercase">
                    <a href="/">Agility</a></span>
                    </h3>
                   
                </div> */}

                <div className="flex items-right text-black mr-6 px-12 ml-8">
                    <img className= "fill-current h-12 w-12 mr-2 ml-12" alt="" src="https://cdn-icons-png.flaticon.com/512/1388/1388519.png" />
                    <span className="font-semibold text-xl tracking-wider text-red-600 uppercase">
                    <a href="/">Agility</a></span>
                </div>

                

                <div className="flex items-right flex-shrink-0 text-black mr-6 ml-12">
                    <img className= "fill-current h-12 w-12 mr-2 ml-12" alt="" src="https://cdn3.iconfinder.com/data/icons/market-research-navy-vol-1/512/Convenience_Sample-512.png" />
                    <span className="font-semibold text-xl tracking-wider text-red-600 uppercase">
                    <a href="/">Convenience</a></span>
                </div>

                <div className="flex items-right flex-shrink-0 text-black mr-6 ml-12">
                    <img className= "fill-current h-12 w-12 mr-2 ml-12" alt="" src="https://www.clipartmax.com/png/middle/170-1702236_translation-scalability-achieved-icon-alle.png" />
                    <span className="font-semibold text-xl tracking-wider text-red-600 uppercase">
                    <a href="/">Scalability</a></span>
                </div>

                <div className="flex items-right flex-shrink-0 text-black mr-6 ml-12">
                    <img className= "fill-current h-12 w-12 mr-2 ml-12" alt="" src="https://cdn-icons-png.flaticon.com/512/4371/4371462.png" />
                    <span className="font-semibold text-xl tracking-wider text-red-600 uppercase">
                    <a href="/">Efficiency</a></span>
                </div>
              
        </div> 
        <div className="mt-8  mb-10 bg-transparent px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/*card 01*/}
            <div class=" rounded shadow-2xl bg-gray-100 rounded-lg flex items-center justify-center bg-white">
                {/* <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                  
                </div> */}
                <div class="w-3/4 bg-gray-100 h-48 flex flex-col justify-center px-1 py-4 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-red-600  ml-2">Simplifying blockchain development with BETHEL Blockchain Development Kit (BDK)!</h2>
                    <p class="ml-2 text-sm text-gray-800 font-semibold">
                    BETHEL Blockchain Development Kit (BDK) aims to lower barriers to blockchain development and empower developers, with an unmatched range of tools to work on their projects, easily! 
                    </p>
                </div>
            </div>
             {/*card 02*/}

             <div class=" rounded shadow-2xl bg-gray-100 rounded-lg flex items-center justify-center bg-white">
                {/* <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                  
                </div> */}
                <div class="w-3/4 bg-gray-100 h-48 flex flex-col justify-center px-1 py-4 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-red-600  ml-2">Scale Up With Confidence</h2>
                    <p class="ml-2 text-sm text-gray-800 font-semibold">
                    BETHEL with its enhanced scalability and increased engagement which allows the developer to easily 
                    scale and allocate resources with high flexibility within the BETHEL Blockchain ecosystem. 
                    </p>
                </div>
            </div>
        </div>



        {/* <div className="ml-12 mr-12 bg-gray-200 rounded px-4 pt-8 grid grid-cols-1 mt-12">

                <div className="">
                    <h1 className="text-3xl text-gray-800 mr-auto ml-auto font-bold">Scale Up With Confidence</h1>
                    <h4 className="text-xl text-gray-700 font-semibold">
                    BETHEL with its enhanced scalability and increased engagement which allows the developer to easily 
                    scale and allocate resources with high flexibility within the BETHEL Blockchain ecosystem. 
                    </h4>
                    <a href="/pricing" className="mt-4 font-semibold text-red-600 text-lg">View Pricing</a>
                </div>
                <div className=""></div>

        </div> */}

        {/* <div className="bg-gray-200 flex ml-12 mr-12 rounded mb-8 h-48 mb-4">
                <div className="w-1/3 mt-8">
                    <h3 className="font-bold text-2xl text-black text-center">598k</h3>
                    <h4 className="font-semibold text-lg text-gray-700 text-right mt-4">Customers building on DigitalOcean.</h4>
                </div>

                <div className="w-1/3 mt-8">
                    <h3 className="font-bold text-2xl text-black text-center">598k</h3>
                    <h4 className="font-semibold text-lg text-gray-700 text-right mt-4">Customers building on DigitalOcean.</h4>
                </div>

                <div className="w-1/3 mt-8">
                    <h3 className="font-bold text-2xl text-black text-center">598k</h3>
                    <h4 className="font-semibold text-lg text-gray-700 text-right mt-4">Customers building on DigitalOcean.</h4>
                </div>

                <div className="w-1/3 mt-8">
                    <h3 className="font-bold text-2xl text-black text-center">598k</h3>
                    <h4 className="font-semibold text-lg text-gray-700 text-right mt-4">Customers building on DigitalOcean.</h4>
                </div>
              
        </div> */}

{/* <div className="w-full bg-red-100 grid grid-cols-3 py-24 mb-12">
            <div className="px-8 text-left">
                <p className="text-4xl font-semibold"> See What You Can Save</p> 
                <p className="text-xl font-semibold" >
                DigitalOcean consistently outperforms other cloud providers on price, while delivering the same performance you need to succeed.
                </p>
                <a href="#fggy" className="mt-4 text-red-600 font-semibold text-md">Calculate Your Savings </a>
            </div>

            <div className="bg-white px-4  rounded-lg text-left">
               <p className="text-xl text-left font-semibold text-gray-700  mt-4">Basic VMs</p>
               <p className="text-sm font-semibold">Easy, fast, and flexible compute built for a range of needs.</p>

                <table>
                <tr>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <td>CPU</td>
                    <td>4</td>
                </tr>

                <tr>
                    <td>Memory</td>
                    <td>8GB</td>
                </tr>

                <tr>
                    <td>Storage</td>
                    <td>180GB</td>
                </tr>

                <tr>
                    <td>Transfer</td>
                    <td>5TB</td>
                </tr>
                </table>
            </div>

            <div className=""></div>

        </div> */}

        
        <div className="w-full bg-red-100 grid grid-cols-3 py-24 mb-4">
            <div className="px-12 text-left space-y-4 col-span-3">
                <p className="text-3xl font-semibold text-gray-700"> Working with Blockchain doesn’t need to be hard</p> 
                <p className="text-xl font-semibold text-red-800" >
                BETHEL Blockchain Development Kit (BDK) aims to lower barriers to blockchain development and empower developers, with an unmatched range of tools to work on their projects, easily! 
                </p>

            </div>

        </div>

       
 <LandingFooter/>  
        
</>
    )
}