/* eslint-disable jsx-a11y/anchor-is-valid */
import Wrapper from "../../components/NavBar/Wrapper";
//import { BsDot } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

function Windows() {
  return (
    <>
      <Wrapper>
      <div className="Overview ml-18">
       
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
              <div className="md:flex">
                  <div className="md:flex-shrink-0"> </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-Black font-semibold">
                      
                      {/*Paragraph One*/}
                      <h1 className="font-semibold text-3xl mt-1">Windows</h1>
                      </div>

                     
                        <ul class="flex flex-col lg:flex-row list-none ml-auto">

                            <li class="nav-item">
                            <span class="ml-1">10/22/2021</span>
                            </li>

                            <li class="nav-item">
                              <span class="ml-2">6 minutes to read</span>
                            </li>
                        </ul>

                      <ul class="flex flex-col lg:flex-row list-none ml-auto">

                          <li class="nav-item">
                            <span class="ml-1 font-semibold text-sm mt-1">Applies to:</span>
                          </li>

                          <li class="nav-item">
                          <FaCheck className="text-sm leading-sm text-green-700 mt-2 ml-2" />
                          </li>

                          <li class="nav-item">
                            <span class="ml-1 font-normal text-sm mt-1">Linux VMs</span>
                          </li>

                          <li class="nav-item">
                          <FaCheck className="text-sm leading-sm text-green-700 mt-2 ml-2" />
                          </li>

                          <li class="nav-item">
                            <span class="ml-1 font-normal text-sm mt-1">Flexible Scale Sets</span>
                          </li>
                      </ul>

                      {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a> */}
                          <p className="mt-2 text-black leading-relaxed">
                                  Azure Virtual Machines (VM) is one of several types of <a href="#" className="font-normal text-blue-600 hover:underline">on-demand, scalable computing resources</a> that Azure offers. Typically, you choose a VM when you need more control over the computing environment than the other choices offer. This article gives you information about what you should consider before you create a VM, how you create it, and how you manage it.
                                  An Azure VM gives you the flexibility of virtualization without having to buy and maintain the physical hardware that runs it. However, you still need to maintain the VM by performing tasks, such as configuring, patching, and installing the software that runs on it.
                                  Azure virtual machines can be used in various ways. Some examples are:

                                <ul className="mt-4 ml-10 list-none md:list-disc font-semibold">
                                  <li >Development and test</li> 
                                  <li >Applications in the cloud</li>
                                  <li >Extended datacenter</li>
                                </ul>

                            </p>

                          <p className="mt-4 text-black leading-relaxed">
                                The number of VMs that your application uses can scale up and out to whatever is required to meet your needs.
                          </p>

                          {/*Paragraph Two*/}
                          <h1 className="font-semibold text-3xl mt-1">What do I need to think about before creating a VM?</h1>

                        



                    </div>
              </div>
        </div>
        
       
    </div>
      </Wrapper>
    </>
    
  );
}

export default Windows;
