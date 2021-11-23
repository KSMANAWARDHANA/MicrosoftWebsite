import React from "react";
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { createPopper } from "@popperjs/core";

const ArchiDrop = () => {
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
    <Router>
    <a
        className="hover:underline lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-sm font-normal"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Architecture
      </a>

      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link
          to="/product/compute"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Get started
        </Link>

        <Link
          to="/product/networking"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Reference architectures
        </Link>
        <Link
          to="/product/storage"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Cloud Adoption Framework for Azure
        </Link>
        <Link
          to="/product/web"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Azure Well-Architected Framework
        </Link>
        

        <Link
          to="/product/mobile"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Design patterns
        </Link>
        <Link
          to="/product/containers"
          className={
            "hover:underline text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          Assessments
        </Link>
        
      </div>
    </Router>
      
    </>
  );
};

export default ArchiDrop;
