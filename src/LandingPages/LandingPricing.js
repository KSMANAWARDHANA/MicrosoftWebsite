/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LandingFooter from './LandingFooter'
import LandingNav from './LandingNav'


export default function LandingPricing() {
    return (
        <div>
            <LandingNav/>

            <div className="py-12  mt-4 grid grid-cols-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700" >
                <div className="items-center ml-24 mt-16">
                    <h2 className="text-4xl text-white font-bold text-center">Pricing to fit your needs! </h2>

                    <h5 className="text-2xl text-white font-semibold text-center">
                    With simple and flexible pricing, innovation is made easy with BETHEL Blockchain Development Kit (BDK)! 
                    </h5>
                </div>

                <div class="w-full max-w-xs flex ml-48">
                    
                        <form class="bg-white shadow-md rounded px-8 pb-8 mb-4 ">
                            
                        <div className="width-full bg-gray-100 h-12 font-semibold mt-2"> Deploy in seconds</div>
                            <div class="mb-4">
                            <input class="shadow appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="First Name"/>
                            </div>

                            <div class="">
                            <input class="shadow appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Address"/>
                            </div>

                            <div class="">
                            <input class="shadow appearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                            </div>

                            <button className="bg-red-600 rounded-xl text-white font-semifold w-full py-3 mt-8">Sign Up With Email</button>
                        </form>
                </div>
            </div>


    <div className="mt-12  px-48 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-24">
            {/*card 01*/}
            <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

             {/*card 02*/}
             <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

         
            {/*card 03*/}
            <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

           {/*card 04*/}
           <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

             {/*card 05*/}
           <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

             {/*card 06*/}
           <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

             {/*card 07*/}
           <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

             {/*card 08*/}
           <div className="rounded overflow-hidden shadow-xl text-left">
                <div className="px-4 py-4">
                    <div className="font-semibold text-2xl mb-2 text-gray-700">Droplets</div>
                        <h6 className="text-gray-600 font-semibold">(Virtual machines)</h6>

                        <h6 className="mt-4 text-gray-600 font-normal">Starts At</h6>
                    <div className="font-bold text-black text-xl mb-2 ">$5</div>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                     
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Deploy in seconds</a></li>
                        <li className="hover:underline"><a href="/features/host">Scale up on demand</a></li>
                        <li className="hover:underline"><a href="/features/placement">Run any workload-from mission critical apps to low traffic sites</a></li>
                        
                    </ul>
                </div>
            </div>

          
        </div>


        <LandingFooter/>
            
    </div>
    )
}
