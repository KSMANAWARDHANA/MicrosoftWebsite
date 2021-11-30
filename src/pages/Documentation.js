/* eslint-disable jsx-a11y/anchor-is-valid */
import Wrapper from "../components/NavBar/Wrapper";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { VscRocket } from "react-icons/vsc";
import { RiComputerLine } from "react-icons/ri";
import { BiBookReader } from "react-icons/bi";
//import { GiNewspaper } from "react-icons/gi";
import FooterSmall from "../components/NavBarNavigations/FooterSmall";

function Doc() {
  return (
    <>
      <Wrapper>

      <h1 className="ml-48 font-semibold text-3xl  px-48 -mt-4 text-red-800">Bethel Deployment Documentation</h1>
      <h5 className="ml-48 font-normal mt-1 px-48">Documentation for creating and managing virtual machines in bethel</h5>
      
      <div className="mt-4 ml-48 px-48 grid grid-cols-1/ sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {/*card 01*/}
            <div className="rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Latest features</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <HiOutlineSpeakerphone className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">WHAT'S NEW</span>
                        </li>
                        <li className="hover:underline"><a href="/features/spotVM">Spot VMs</a></li>
                        <li className="hover:underline"><a href="/features/host">Dedicated hosts</a></li>
                        <li className="hover:underline"><a href="/features/placement">Proximity placement groups</a></li>
                        <li className="hover:underline"><a href="/features/VMscaleMode">Virtual Machine Scale Sets Orchestration modes</a></li>
                        <li className="hover:underline"><a href="/features/VMscaleSets">Flexible orchestration for virtual machine scale sets</a></li>
                    </ul>
                </div>
            </div>

             {/*card 02*/}

             <div className="ml-8 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Quickstarts</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <VscRocket className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">QUICKSTART</span>
                        </li>
                      
                        <li className="hover:underline"><a href="/Bethel/Quickstart/BethelPortal">Bethel Portal</a></li>
                        <li className="hover:underline"><a href="/linuxQuick/azureCli">Bethel CLI</a></li>
                       
                    </ul>
                </div>
            </div>

            {/*card 03*/}

            {/* <div className="ml-8 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Windows Quickstarts</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <VscRocket className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">QUICKSTART</span>
                        </li>
                        <li className="hover:underline"><a href="/windowsQuick/azPortal">Azure portal</a></li>
                        <li className="hover:underline"><a href="/windowsQuick/azPowershell">Azure PowerShell</a></li>
                        <li className="hover:underline"><a href="/windowsQuick/azCLI">Azure CLI</a></li>
                    </ul>
                </div>
            </div> */}

            {/*card 04*/}

            <div className=" rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Self-paced training</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <RiComputerLine className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">LEARN</span>
                        </li>
                        <li className="hover:underline"><a href="./selfpaced/linux">Create a Linux virtual machine in bethel</a></li>
                        <li className="hover:underline"><a href="./selfpaced/windows">Create a Windows virtual machine in bethel</a></li>
                    </ul>
                </div>
            </div>

            {/*card 05*/}

            <div className=" rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Troubleshooting</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <BiBookReader className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">HOW-TO-GUIDE</span>
                        </li>
                        <li className="hover:underline"><a href="./troubleshooting/guide">Troubleshooting Guides</a></li>
                        <li className="hover:underline"><a href="./troubleshooting/deployment">Troubleshoot deployment issues</a></li>
                        <li className="hover:underline"><a href="./troubleshooting/allocation">Troubleshoot allocation failures</a></li>
                        <li className="hover:underline"><a href="./troubleshooting/unexpected">Troubleshoot unexpected reboots</a></li>
                        <li className="hover:underline"><a href="./troubleshooting/qa">Microsoft Q&A</a></li>
                    </ul>
                </div>
            </div>

            {/*card 05*/}

            {/* <div className="ml-8 rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-semibold text-lg mb-2 ">Resources</div><hr/>
                   
                   
                    <ul className="mt-2 text-red-600 text-sm space-y-4 cursor-pointer">
                        <li class="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black">
                        <GiNewspaper className="-ml-2 text-lg leading-lg text-red-600" /><span className="ml-1 text-gray-700 text-sm font-semibold">OVERVIEW</span>
                        </li>
                        <li className="hover:underline"><a href="./resources/cloud">Cloud adoption framework</a></li>
                        <li className="hover:underline"><a href="./resources/bethelArchi">bethel architecture center</a></li>
                        <li className="hover:underline"><a href="./resources/azureQuick">Azure Quickstart templates</a></li>
                        <li className="hover:underline"><a href="./resources/pricing">Pricing</a></li>
                        <li className="hover:underline"><a href="./resources/regional">Regional availability</a></li>
                        <li className="hover:underline"><a href="./resources/selector">Virtual machines selector tool</a></li>
                    </ul>
                </div>
            </div> */}
        </div>

      </Wrapper>
      <FooterSmall/> 
    </>
    
  );
}

export default Doc;
