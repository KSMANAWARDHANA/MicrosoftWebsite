
import { Routes, Route } from 'react-router-dom';
import Doc from './../pages/Documentation';

//overview Tab
import Linux from './../pages/Overview/Linux';
import Windows from '../pages/Overview/Windows';

//Quickstart Tab
import LinuxVM from '../pages/QuickStart/LinuxVM';
import WindowsVM from '../pages/QuickStart/WindowsVM';

export default function SideBarRoutes() {
    return (
        <>
            <Routes>
        
                <Route path='/' element={<Doc/>}/>
                
                {/*Overview tab routes */}
                <Route path='/overview/aboutlinux' element={<Linux/>}/>
                <Route path='/overview/aboutwin' element={<Windows/>}/>

                {/*QuickStart tab routes */}
                <Route path='/quickstart/linuxVM' element={<LinuxVM/>}/>
                <Route path='/quickstart/windowsVM' element={<WindowsVM/>}/>
       
         
            </Routes>
            
        </>
    )
}
