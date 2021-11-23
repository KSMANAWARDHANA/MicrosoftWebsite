import React from "react";
import { createPopper } from "@popperjs/core";
import {FaRegShareSquare} from "react-icons/fa";
import {FaTwitter,FaFacebookF,FaLinkedinIn} from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const ShareDrop = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
   
        <a className="px-3 py-2 flex items-center text-sm  font-semibold leading-snug text-black hover:opacity-75"
        href="/navlast/share"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}>
        <FaRegShareSquare className="text-lg leading-lg text-black opacity-75" /><span class="ml-1">Share</span>
      </a>

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
         <a
          href="/product/compute"
          className={
            "flex items-center hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
           <FaTwitter className="text-lg leading-lg text-blue-700 opacity-75" /><span className="ml-1">Twitter</span>
        </a>


        <a
          href="/product/compute"
          className={
            "flex items-center hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
           <FaFacebookF className="text-lg leading-lg text-blue-700 opacity-75" /><span className="ml-1">Facebook</span>
        </a>


        <a
          href="/product/compute"
          className={
            "flex items-center hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
           <FaLinkedinIn className="text-lg leading-lg text-blue-700 opacity-75" /><span className="ml-1">LinkedIn</span>
        </a>

        
        <a
          href="/product/compute"
          className={
            "flex items-center hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
           <MdEmail className="text-lg leading-lg text-blue-700 opacity-75" /><span className="ml-1">Email</span>
        </a>

        </div>
   
    </>
  );
};

export default ShareDrop;
