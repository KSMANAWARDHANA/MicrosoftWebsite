/* eslint-disable jsx-a11y/anchor-is-valid */

//import { BsDot } from "react-icons/bs";
//import { FaCheck } from "react-icons/fa";
import Wrapper from "../../components/NavBar/Wrapper";

function Linux() {
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
                   <h1 className="font-semibold text-3xl mt-1">Bethel Overview</h1>
                   </div>

                  
                     {/* <ul class="flex flex-col lg:flex-row list-none ml-auto">

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
                   </ul> */}

                   {/* <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a> */}
                       <p className="mt-2 text-black leading-relaxed">
                       As Bethel, a containerized, decentralized, multi-language blockchain development platform, encourages software developers to move their existing solutions to blockchain technology and utilize its robust capabilities when it comes to transparency, security, 


            BETHEL 

          Bethel, a containerized, decentralized, multi-language blockchain development platform, encourages software developers to move their existing solutions to blockchain technology and utilize its robust capabilities. It is one of the best creations so far, which enables users to satisfy all their blockchain development needs with advanced technology. With BETHEL, users can now effortlessly integrate blockchain technology into their projects without having to worry about getting used to the environment. With multi-language support and enhanced scalability, developers can seamlessly use and customize this blockchain development platform to fit their needs accordingly. A highly innovative blockchain development kit that provides the basis to all other projects under the FutureCX umbrella, BETHEL assists and supports all blockchain-driven innovations and projects, reiterating our commitment towards blockchain development.
                            {/* 
                             <ul className="mt-4 ml-10 list-none md:list-disc font-semibold">
                               <li >Development and test</li> 
                               <li >Applications in the cloud</li>
                               <li >Extended datacenter</li>
                             </ul> */}

                         </p>

                       <p className="mt-4 text-black leading-relaxed">
                             The number of VMs that your application uses can scale up and out to whatever is required to meet your needs.
                       </p>

                       {/*Paragraph Two*/}
                       <h1 className="font-semibold text-3xl mt-1">For Developers</h1>

                     <p className="mt-4 text-black leading-relaxed">
                       There are always a multitude of <a href="#" className="font-normal text-blue-600 hover:underline">design considerations</a>when you build out an application infrastructure in Azure. These aspects of a VM are important to think about before you start:

                             <ul className="mt-4 ml-10 list-none md:list-disc font-semibold">
                               <li > The names of your application resources</li> 
                               <li >The location where the resources are stored</li>
                               <li >The size of the VM</li>
                               <li >The maximum number of VMs that can be created</li>
                               <li >The operating system that the VM runs</li>
                               <li >The configuration of the VM after it starts</li>
                               <li >The related resources that the VM needs</li>
                             </ul>
                       </p>

                        {/*Paragraph Three*/}

                        <h1 className="font-semibold text-3xl mt-1">Locations</h1>
                        <p className="mt-4 text-black leading-relaxed">

                        There are multiple <a href="#" className="font-normal text-blue-600 hover:underline">geographical regions</a> around the world where you can create Azure resources. Usually, the region is called location when you create a VM. For a VM, the location specifies where the virtual hard disks will be stored.

                         This table shows some of the ways you can get a list of available locations.
                          
                        </p>

                        {/*Paragraph Four*/}

                        <h1 className="font-semibold text-3xl mt-1">Availability</h1>
                        <p>Azure announced an industry leading single instance virtual machine Service Level Agreement of 99.9% provided you deploy the VM with premium storage for all disks. In order for your deployment to qualify for the standard 99.95% VM Service Level Agreement, you still need to deploy two or more VMs running your workload inside of an availability set. An availability set ensures that your VMs are distributed across multiple fault domains in the Azure data centers as well as deployed onto hosts with different maintenance windows. The full Azure SLA explains the guaranteed availability of Azure as a whole.</p>

                       {/*Paragraph Five*/}
                       <h1 className="font-semibold text-3xl mt-1">VM Size</h1>
                       <p className="mt-4 text-black leading-relaxed">
                       The size of the VM that you use is determined by the workload that you want to run. The size that you choose then determines factors such as processing power, memory, and storage capacity. Azure offers a wide variety of sizes to support many types of uses.
                       Azure charges an hourly price based on the VM’s size and operating system. For partial hours, Azure charges only for the minutes used. Storage is priced and charged separately.
                       </p>



                 </div>
           </div>
     </div>
     
    
 </div>
     </Wrapper>
      
     
    </>
    
  );
}

export default Linux;
