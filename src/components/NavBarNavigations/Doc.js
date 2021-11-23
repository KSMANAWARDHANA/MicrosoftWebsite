/* eslint-disable react/style-prop-object */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import FooterSmall from './FooterSmall';



export default function DocOne() {
    return (
        <div>

            <NavBar/>
              <div className="py-16 bg-blue-800" >
                <div className=" px-4">
                    
                        <h2 className="text-3xl font-bold mb-2 text-white">Microsoft Technical Documentation</h2>
                        <h3 className="text-xl mb-4 text-gray-200">The home for Microsoft documentation and learning for developers and technology professionals.</h3>
                        <div class="flex w-full ">
                                <div class="flex  rounded">
                                    <input type="text" class="px-48 py-2 w-80" placeholder="Search..."/>
                                    <button class="ml-2 px-4 text-white bg-blue-600 ">
                                        Search
                                    </button>
                        </div>
                        </div>
                    </div>
                </div>

          <div className="-mt-8  bg-transparent px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/*card 01*/}
            <div class=" rounded shadow-2xl bg-blue-600 rounded-lg flex items-center justify-center ">
                <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
                </div>
                <div class="w-2/3 bg-gray-200 h-32 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-blue-600">Documentation</h2>
                    <p class="text-xs text-gray-600">
                        Just your personal information
                    </p>
                </div>
            </div>
             {/*card 02*/}

             <div class=" rounded shadow-2xl bg-blue-600 rounded-lg flex items-center justify-center ">
                <div class="w-1/3 bg-transparent h-42 flex items-center justify-center icon-step" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
                </div>
                <div class="w-2/3 bg-gray-200 h-32 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-blue-600">Learn</h2>
                    <p class="text-xs text-gray-600">
                        Just your personal information
                    </p>
                </div>
            </div>

             

            {/*card 03*/}

            <div class=" rounded shadow-lg bg-blue-500 rounded-lg flex items-center justify-center ">
                <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
                </div>
                <div class="w-2/3 bg-gray-200 h-32 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-blue-600">Q&A</h2>
                    <p class="text-xs text-gray-600">
                        Just your personal information
                    </p>
                </div>
            </div>

            {/*card 04*/}
            <div class=" rounded shadow-lg bg-blue-500 rounded-lg flex items-center justify-center ">
                <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z"/></svg>
                </div>
                <div class="w-2/3 bg-gray-200 h-32 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                    <h2 class="font-semibold text-lg text-blue-600">Code Samples</h2>
                    <p class="text-xs text-gray-600">
                        Just your personal information
                    </p>
                </div>
            </div>
    </div>

    <h6 className="uppercase font-normal text-sm ml-8 mt-4 tracking-widest">Index</h6>
    <h3 className="font-semibold text-4xl ml-8 -mt-1">Product Directory</h3>


    <div className="mt-8 px-12 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-12">
            {/*card 01*/}
            <div className="rounded overflow-hidden shadow-lg ">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   .NET
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                  >
                                   ASP.NET
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Azure
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Azure Architecture Center
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Azure DevOps
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   C++
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   C#
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Dynamics 365
                                </a>

                      </li>
                    </ul>
                </div>
            </div>

             {/*card 02*/}

             <div className="rounded overflow-hidden shadow-lg ">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Gaming
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                  >
                                   Microsoft 365
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Microsoft Edge
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Microsoft Security
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Microsoft Teams
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   OneDrive
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Power Apps
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Power BI
                                </a>

                      </li>
                    </ul>
                </div>
            </div>


            {/*card 03*/}

            <div className="rounded overflow-hidden shadow-lg ">
                <div className="px-12 py-1">
                    <ul className="-ml-4 space-y-4">
                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Power Platform
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                  >
                                   PowerShell
                                </a>
                      </li>

                      <li>
                                <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   SharePoint
                                </a>
                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   SQL Server
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Visual Basic
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Visual Studio
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Windows
                                </a>

                      </li>

                      <li>
                                  <a
                                    href="/admin/dashboard"
                                    exact
                                    className="flex items-left gap-4 text-lg hover:bg-gray-100 hover:underline font-semibold text-blue-700 font-light  rounded-lg"
                                >
                                   Xamarin
                                </a>

                      </li>
                    </ul>
                </div>
            </div>
            </div>

            <h6 className="mt-4 ml-8">Don't see what you're looking for?
            <a
            href="#dfg"
            className="ml-2 text-indigo-600 font-semibold text-md">
              View Entire directory
            </a></h6>
            <h6 className="mt-8 uppercase font-normal text-sm ml-8 mt-4 text-black tracking-widest">Featured</h6>
            <h3 className="font-semibold text-4xl ml-8 -mt-1">Microsoft Learn</h3>
            <h6 className="ml-8 mt-2  text-gray-800 text-xl font-normal">Whether you're just starting or an experienced professional, our hands-on approach helps you arrive at your goals faster, with more confidence and at your own pace. </h6>

          
            <div className="mt-6 bg-transparent px-16  grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">

            {/*vertical card 01 */}
                <div class="max-w-lg rounded-lg overflow-hidden shadow-lg">
                
                <img className= "w-full" alt="" src="https://www.testpreptraining.com/blog/wp-content/uploads/2020/10/Microsoft-Azure-Fundamentals-AZ-900.png" />
                <h6 className="mt-8 uppercase font-normal text-sm ml-8 mt-4 text-black tracking-widest">Learning Paths</h6>
                  <div class="px-6 py-4">
                    <div class="font-semibold text-xl mb-2 text-blue-700">Learn on your own schedule</div>
                    <p class="text-black text-base">
                    Explore a topic in-depth through guided paths or learn how to accomplish a specific task through individual modules.
                    </p>
                </div>
                <a
                href="#fgf"
                className="ml-6 mb-4 mt-4 text-sm font-semibold text-blue-700">Browse all learning options</a>
              </div>

               {/*vertical card 02*/}
              <div class="max-w-lg rounded-lg overflow-hidden shadow-lg ml-4">
              
                <img className= "w-full2" alt="" src="https://papo.cloud/wp-content/uploads/2020/03/pc060-destaque.jpg" />
                <h6 className="mt-8 uppercase font-normal text-sm ml-8 mt-4 text-black tracking-widest">Certifications</h6>
                  <div class="px-6 py-4">
                    <div class="font-semibold text-xl mb-2 text-blue-700">Become Microsoft certified</div>
                    <p class="text-black text-base">
                    Jump-start your career and demonstrate your achievements through industry-recognized Microsoft certifications.
                    </p>
                </div>
                <a
                href="#fgf"
                className="ml-6 mt-8 text-sm text-blue-700 font-semibold">
                  Explore Certifications
                </a>
              </div>
              
               {/*vertical card 03*/}
              <div class="max-w-lg rounded-lg overflow-hidden shadow-lg ml-4">
              
                <img className= "w-full2" alt="" src="https://sec.ch9.ms/ch9/d6f8/41dd7d2b-a501-4ddb-a357-504b794fd6f8/onnet20170125publicspeaking_960.jpg" />
                <h6 className="mt-8 uppercase font-normal text-sm ml-6 mt-4 text-black tracking-widest">Learn tv</h6>
                  <div class="px-6 py-4">
                    <div class="font-semibold text-xl mb-2 text-blue-700">Watch live and recorded events</div>
                    <p class="text-black text-base">
                    View streaming technical content about Microsoft products from the experts that build and use it every day.
                    </p>
                </div>
                <a
                href="#df"
                className="ml-4 mb-4 mt-8  text-blue-700 text-sm font-semibold">
                  Start watching now
                </a>
              </div>
            </div>

            <FooterSmall/>
          

</div>
            
       
    )
}
