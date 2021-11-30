/* eslint-disable jsx-a11y/anchor-is-valid */
import Wrapper from "../../components/NavBar/Wrapper";

function LinuxVM() {
  return (
    <>
      <Wrapper>
      <div className="Overview ml-32">
       
       <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-4xl">
           <div className="md:flex">
               <div className="md:flex-shrink-0"> </div>
                 <div className="p-8">
                   <div className="-mt-8 tracking-wide text-sm text-Black font-semibold">
                   
                   {/*Paragraph One*/}
                   <h1 className="font-semibold text-3xl text-red-800 -mt-4">Quickstart: Create a Project And Deploy Nodes</h1>
                   </div>

                   <p className="mt-2 text-black leading-relaxed">
                   Azure virtual machines (VMs) can be created through 
                   the Azure portal. The Azure portal is a browser-based user interface to create Azure resources. This quickstart shows you how to use the Azure portal to deploy a Linux virtual machine (VM) running Ubuntu 18.04 LTS. To see your VM in action, 
                   you also SSH to the VM and install the NGINX web server.
                  </p>

                  <p className="mt-2 text-black leading-relaxed">
                  Bethel Nodes can be created through the Bethel Portal,
                  the Bethel Portal is a browser-based user interface 
                  to create Bethel resources. This quickstart shows you
                  how to use the Bethel portal to deploy a blockchain 
                  with a minimum of two nodes equipped with all the necessary tools for you to carry out development
                  aspects of your blockchain based application.
                  </p>

                  <h1 className="font-semibold text-2xl text-red-800 mt-4">Create Project</h1> 
                        <ul className="leading-9 ml-8 list-decimal mt-4 text-black text-md  font-normal">
                          <li>Go to the <a className="font-semibold">Projects</a> tab.</li>
                          <li>Click on the <a className="font-semibold">Add New Project</a> button, a panel will open on the left.</li>
                          <li>Under Create New Project, select <a className="font-semibold">Provider</a>.</li>
                          <li>Enter a <a className="font-semibold">Project name</a>. (The name should be in lowercase letters, and no special characters apart from hyphens.)</li>
                          <li>And Click <a className="font-semibold">Create project</a>.</li>
                        </ul>

                  <h1 className="font-semibold text-2xl text-red-800 mt-4">Add Nodes and Deploy Blockchain Network to Project</h1> 
                        <ul className="leading-9 ml-8 list-decimal mt-4 text-black text-md  font-normal">
                          <li>Go to the <a className="font-semibold">Nodes</a> tab.</li>
                          <li>Click on the <a className="font-semibold">Add New Nodes</a> button, a panel will open on the left.</li>
                          <li>Under Create New Project, select <a className="font-semibold">Project</a>.</li>
                          <li>Enter the<a className="font-semibold">Node Count</a>. (The minimum node count should be two nodes.)</li>
                          <li>And Click <a className="font-semibold">Create Nodes</a>.</li>
                        </ul>

                  <h1 className="font-semibold text-2xl text-red-800 mt-4">View Node Status</h1> 
                        <ul className="leading-9 ml-8 list-decimal mt-4 text-black text-md  font-normal">
                          <li>Go to the <a className="font-semibold">Status</a> tab.</li>
                          <li>All Projects will be listed down with their respective information.</li>
                          <li>Click on a <a className="font-semibold">Project</a>to view the number of <a className="font-semibold">Nodes</a> under it and respective information and actions.</li>
                          
                        </ul>

                  <h1 className="font-semibold text-2xl text-red-800 mt-4">SDK Development - Github Deployment</h1> 
                        <ul className="leading-9 ml-8 list-decimal mt-4 text-black text-md  font-normal">
                         <li>Go to the <a className="font-semibold">SDK Development</a> tab.</li>
                         <li>Under select <a className="font-semibold">Project Name,</a>select<a className="font-semibold">Project</a></li>
                         <li>Under<a className="font-semibold">Application Port,</a>enter teh communication port of your application.</li>
                         <li>Under <a className="font-semibold">Select SDK,</a> select SDK Language.</li>
                         <li>Under <a className="font-semibold">Executable File Name,</a> enter the name of the main file of your source code.
                         E.g: helloworld or helloworld.go or main or main.go etc
                        </li>
                        <li>Under Sample code, enter the source of your quick deployment application.</li>
                         
                        </ul>

                  <h1 className="font-semibold text-2xl text-red-800 mt-4">Support</h1> 
                        <ul className="leading-9 ml-8 list-decimal mt-4 text-black text-md  font-normal">
                         <li>Go to the <a className="font-semibold">Support</a> tab.</li>
                         <li>Under <a className="font-semibold">Search For Support,</a></li>
                         <li>Under <a className="font-semibold">Getting Started,</a>you will find navigation information of the portal functions.</li>
                         <li>Under <a className="font-semibold">SDK Support,</a>you will find information on how to use the SDKs and sample applications and code.</li>
                         <li>Under <a className="font-semibold">User Guides,</a> you will find information on how to use the functions of the portal.</li>
                         <li>Under <a className="font-semibold">Sales Support,</a> you will find information on sales related issues and frequently asked questions.</li>
                         <li>Under <a className="font-semibold">Submit Ticket,</a>you can submit your queries and a response would be sent to you on your registered email.</li>
                       
                         
                        </ul>
                        

                    

                       
                       
                </div>
           </div>
     </div>
    </div>
      </Wrapper>
    </>
    
  );
}

export default LinuxVM;
