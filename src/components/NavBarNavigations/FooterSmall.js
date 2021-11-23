import React from 'react';
import { GrLanguage } from "react-icons/gr";
import { BsBrightnessHigh } from "react-icons/bs";
import {AiOutlineCopyrightCircle} from "react-icons/ai"

export default function FooterSmall() {
    return (
        <div>
          <nav id="footer" className="bg-gray-300 mt-12 flex items-center justify-between flex-wrap bg-white py-12">
                
              <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <GrLanguage className="ml-4 text-sm text-black"/><span className="ml-1 font-semibold text-sm tracking-tight text-black hover:underline">English(United States)</span>
                    <BsBrightnessHigh className="ml-4 text-sm text-black"/><span className="ml-1 font-semibold text-sm tracking-tight text-black hover:underline">Theme</span>
              </div>

              <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                <ul className="flex flex-col lg:flex-row list-none ml-auto">

                  <li className="">
                        <a className="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                          <span class="ml-1">Previous Version Docs</span>
                        </a>
                  </li>

                  <li class="">
                  <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                      <span class="ml-1">Blog</span>
                    </a>
                  </li>
       
                  <li class="">
                  <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                      <span class="ml-1">Contribute</span>
                    </a>
                  </li>

                  <li class="">
                  <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                      <span class="ml-1">Privacy & Cookies</span>
                    </a>
                  </li>

                <li class="">
                <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                    <span class="ml-1">Terms of Use</span>
                  </a>
                </li>

                <li class="">
                  <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                      <span class="ml-1">Trademarks</span>
                  </a>
                </li>

                <li class="">
                <a class="px-3 py-2 flex items-center text-sm  font-normal leading-snug text-black hover:opacity-75" href="#pablo">
                    <AiOutlineCopyrightCircle className="text-sm font-normal text-black"/><span class="ml-1">Microsoft 2021</span>
                  </a>
                </li>
              </ul>
          </div>
        </nav>
    </div>
    )
}
