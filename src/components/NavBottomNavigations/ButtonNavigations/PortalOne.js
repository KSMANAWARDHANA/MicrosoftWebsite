/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function PortalOne() {
    return (
        <div>
        
           <div class="flex items-center justify-center min-h-screen bg-blue-600 -mt-8">
          
                <div class="px-32 py-12 mt-4 text-left bg-white shadow-lg">
                        <div className="flex items-center flex-shrink-0 text-black mr-24">
                            <img className= "fill-current h-8 w-8 mr-2 -ml-24"  width="54" height="54" alt="" src="https://i.pinimg.com/originals/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.png" />
                            <span className="font-semibold text-xl tracking-tight text-gray-800">Microsoft</span>
                        </div>

                        <h4 className="mt-2 font-semibold text-2xl tracking-tight text-black -ml-24">Sign In</h4>
                        <form action="w-full">
                            <div class="mt-4 space-y-4">
                                <div class="flex items-center border-b border-blue-600 py-2 -ml-24">
                                <input class="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email,Phone or Skype" aria-label="Full name"/>
                                </div>

                                <div class="mt-2 -ml-24">
                                <a
                                className='w-full max-w-xs font-normal shadow-sm rounded-lg py-1'
                                href='/register'
                                target='_self'
                                >
                                <h5 className='leading-none inline-block text-sm text-gray-600 tracking-wide font-normal bg-white transform translate-y-1/2'>New on our platform? <span className='ml-0 text-blue-500'>Create one !</span></h5>
                                </a>
                                </div>

                                <div class="mt-2 -ml-24">
                                <a
                                className='w-full max-w-xs font-normal shadow-sm rounded-lg py-1'
                                href='/register'
                                target='_self'
                                >
                                <span className='w-full ml-0 text-blue-500 text-sm font-normal'>Can't access Your Account!</span>
                                </a>
                                </div>
                                
                                <div class="flex-auto flex flex-row-reverse ml-12 mt-4">
               
                <button class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2  font-semibold cursor-pointer 
                    hover:bg-blue-600  
                    bg-blue-600 
                    text-white 
                    border duration-200 ease-in-out 
                    transition">Next
                </button>

                
            </div>

                                
                            </div>
                        </form> 
                </div>
            </div>
        </div>
    )
}


