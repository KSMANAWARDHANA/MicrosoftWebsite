import React from 'react';
//import NavbarBottom from './NavBarBottom';
import SideBarOne from './SideBarOne';
import NavBarLast from './NavBarLast';
import NavBar from './NavBar';
//import Footer from './Footer';

export default function NavMain() {
    return (
        <div>
            <NavBar/>
            {/* <NavbarBottom/> */}
            <NavBarLast/>
            <SideBarOne/>
            {/* <Footer/> */}
        </div>
    )
}
