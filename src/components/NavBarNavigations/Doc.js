/* eslint-disable react/style-prop-object */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import FooterSmall from './FooterSmall';
import { GrDocumentText } from "react-icons/gr";
import { BsCodeSquare } from "react-icons/bs";



export default function DocOne() {
    return (
        <div>

            <NavBar/>
              <div className="py-16 bg-red-600" >
                <div className=" px-4">
                    
                        <h2 className="text-3xl font-bold mb-2 text-white">Bethel Technical Documentation</h2>
                        <h3 className="text-xl mb-4 text-gray-200">The home for Bethel documentation and learning for developers and technology professionals.</h3>
                        <div class="flex w-full ">
                                <div class="flex  rounded">
                                    <input type="text" class="px-48 py-2 w-80" placeholder="Search..."/>
                                    <button class="ml-2 px-4 text-white bg-gray-600 ">
                                        Search
                                    </button>
                        </div>
                        </div>
                    </div>
                </div>

        <div className="mt-8  mb-10 bg-transparent px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            {/*card 01*/}
            <div class=" rounded shadow-2xl bg-white rounded-lg flex items-center justify-center bg-red-200">
                <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                  <GrDocumentText width="48" height="48" className="text-4xl" />
                </div>
                <div class="w-3/4 bg-white h-32 flex flex-col justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-red-600  ml-2">Bethel Documentation</h2>
                    <p class="ml-2 text-sm text-gray-800 font-semibold">
                    Get end user support for Office, Windows, Surface, and more. Visit our Bethel support site for assistance.
                    </p>
                </div>
            </div>
             {/*card 02*/}

             <div class=" rounded shadow-2xl bg-white rounded-lg flex items-center justify-center bg-red-200">
                <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                <BsCodeSquare width="48" height="48" className="text-4xl" />
                </div>
                <div class="w-3/4 bg-gray-100 h-32 flex flex-col justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-red-600  ml-2">Bethel CodeSamples</h2>
                    <p class="ml-2 text-sm text-gray-800 font-semibold">
                    End user Questions, issues, discussions, and knowledge sharing. Visit our Bethel answers community to begin.
                    </p>
                </div>
            </div>
        </div>

    <h6 className="uppercase font-normal text-sm ml-8 mt-4 tracking-widest">Index</h6>
    <h3 className="font-semibold text-4xl ml-8 -mt-1 text-gray-700">Product Directory</h3>


    <div className="mb-24 mt-8 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-12">
            {/*card 01*/}
            <div className="rounded overflow-hidden shadow-lg ml-12">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/doc/net"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   .NET
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/aspnet"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                  >
                                   ASP.NET
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/azure"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Azure
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/doc/azurecenter"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Azure Architecture Center
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/devops"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Azure DevOps
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/c++"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   C++
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/c#"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   C#
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/dynamics"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Dynamics 365
                                </a>

                      </li>
                    </ul>
                </div>
            </div>

             {/*card 02*/}

             <div className="rounded overflow-hidden shadow-lg ml-12">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/doc/gaming"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Gaming
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/bethel365"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                  >
                                   Bethel 365
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/betheledge"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Bethel Edge
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/doc/bethelsecurity"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Bethel Security
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/bethelTeams"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Bethel Teams
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/oneDrive"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   OneDrive
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/bethelPower"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Power Apps
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/powerBI"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Power BI
                                </a>

                      </li>
                    </ul>
                </div>
            </div>


            {/*card 03*/}

            <div className="rounded overflow-hidden shadow-lg ml-12">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/doc/powerPlatform"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Power Platform
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/powershell"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                  >
                                   PowerShell
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/doc/sharepoint"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   SharePoint
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/doc/sqlServer"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   SQL Server
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/visual"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Visual Basic
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/vscode"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Visual Studio
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/windows"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Windows
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/doc/xamarin"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-red-800 font-light  rounded-lg"
                                >
                                   Xamarin
                                </a>

                      </li>
                    </ul>
                </div>
            </div>
            </div>

           
           

          <FooterSmall/>
          

</div>
            
       
    )
}
