/* eslint-disable no-sequences */
import React, { useState } from 'react';
import styled from 'styled-components';
import {AiOutlineFilter} from "react-icons/ai";
import { SideData } from './SideData';
import SubMenuOne from './SubMenuOne';
import { IconContext } from 'react-icons/lib';

const SidebarNav = styled.nav`

  background: white;
  width: 350px;
  height: 480px;
  display: flex;
  justify-content: center;
  position: absolute;
  top:10;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: all 500ms linear;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
 
  width: 100%;
  overflow-y: scroll;
  
`;

const SideBarOne = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <ul className="flex flex-col lg:flex-row list-none ml-2 mt-2">
                    <li className="nav-item">
                        <div className="flex ml-5 w-full shadow-inner">
                            <span className="items-center font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-gray-300 rounded text-sm bg-white items-center rounded-r-none pl-2 py-1 text-gray-600 border-r-0 placeholder-gray-300">
                                <AiOutlineFilter className="text-blue-800"/>
                            </span>
                            <input type="text" className="px-2 py-1 h-8 border border-solid  border-gray-300 rounded text-sm leading-snug text-gray-700 bg-white shadow-none outline-none focus:outline w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-800" 
                            placeholder="Filter by title" />
                        </div>
                    </li>
      </ul>
      <IconContext.Provider value={{ color: 'black' }}>
        <SidebarNav sidebar={sidebar , showSidebar}  className="mt-2">
          <SidebarWrap>
           
            
            {SideData.map((item, index) => {
              return <SubMenuOne item={item} key={index} />;
            })}
          </SidebarWrap>


        </SidebarNav>
      </IconContext.Provider>


    </>
  );
};

export default SideBarOne;
