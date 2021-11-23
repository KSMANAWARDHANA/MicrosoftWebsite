import './App.css';
import { Routes, Route } from 'react-router-dom';
import Doc from './pages/Documentation';
import Login from './pages/login';
import Register from './pages/Register';
//import Footer from './components/NavBar/Footer';

//sidebar subnav pages
import Linux from './pages/Overview/Linux';
import Windows from './pages/Overview/Windows';
import LinuxVM from './pages/QuickStart/LinuxVM';
import WindowsVM from './pages/QuickStart/WindowsVM';

//Top Navbar imports
import Documentation from './components/NavBarNavigations/Documentation';
import DocOne from './components/NavBarNavigations/Doc';
import CodeSamples from './components/NavBarNavigations/CodeSamples';
import Shows from './components/NavBarNavigations/Shows';

//Middle Navbar imports

//Middle navbar Product Documentation dropdown
import Compute from './components/NavBottomNavigations/ProductDoc/Compute';
import PortalOne from './components/NavBottomNavigations/ButtonNavigations/PortalOne';
import Networking from './components/NavBottomNavigations/ProductDoc/Networking';
import Storage from './components/NavBottomNavigations/ProductDoc/Storage';
import Web from './components/NavBottomNavigations/ProductDoc/Web';
import Mobile from './components/NavBottomNavigations/ProductDoc/Mobile';
import Containers from './components/NavBottomNavigations/ProductDoc/Containers';
import Databases from './components/NavBottomNavigations/ProductDoc/Databases';
import AllProducts from './components/NavBottomNavigations/ProductDoc/AllProducts';
import FreeAccount from './components/NavBottomNavigations/ButtonNavigations/FreeAccount';


//VM documentation CardOneRoutes
import SpotVM from './pages/VMdocumentation/cardOnePages/SpotVM';
import DedicatedHost from './pages/VMdocumentation/cardOnePages/DedicatedHost';
import Proximity from './pages/VMdocumentation/cardOnePages/Proximity';
import VMscale from './pages/VMdocumentation/cardOnePages/VMscale';
import VMscaleSets from './pages/VMdocumentation/cardOnePages/VMscaleSets';
import Save from './components/NavLastNavigations/Save';




function App() {
  return (
    <>
   
     <Routes>
        
        <Route path='/' element={<Doc/>}/>
       
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        {/*Overview tab routes */}
        <Route path='/overview/aboutlinux' element={<Linux/>}/>
        <Route path='/overview/aboutwin' element={<Windows/>}/>

        {/*QuickStart tab routes */}
        <Route path='/quickstart/linuxVM' element={<LinuxVM/>}/>
        <Route path='/quickstart/windowsVM' element={<WindowsVM/>}/>

         {/*Top navbar components routes */}
         <Route path='/navbar/documentation' element={<Documentation/>}/>
         <Route path='/navbar/doc' element={<DocOne/>}/>
         <Route path='/navbar/codeSample' element={<CodeSamples/>}/>
         <Route path='/navbar/shows' element={<Shows/>}/>
         <Route path='/navbar/events' element={<Shows/>}/>
         <Route path='/navbar/qa' element={<Shows/>}/>
         <Route path='/navbar/learn' element={<Shows/>}/>

        {/*Middle navbar components routes */}

        {/*Middle navbar Product Documentation dropdown routes */}
        <Route path='/product/compute' element={<Compute/>}/>
        <Route path='/product/networking' element={<Networking/>}/>
        <Route path='/product/storage' element={<Storage/>}/>
        <Route path='/product/web' element={<Web/>}/>
        <Route path='/product/mobile' element={<Mobile/>}/>
        <Route path='/product/containers' element={<Containers/>}/>
        <Route path='/product/databases' element={<Databases/>}/>
        <Route path='/product/allProducts' element={<AllProducts/>}/>

        <Route path='/portal/one' element={<PortalOne/>}/>
        <Route path='/freeAccount' element={<FreeAccount/>}/>

         {/*Last navbar components routes */}
         <Route path='/navlast/save' element={<Save/>}/>



         {/*virtual machine documentation routes*/}
         {/*card 01 routes*/}
         <Route path='/features/spotVM' element={<SpotVM/>}/>
         <Route path='/features/host' element={<DedicatedHost/>}/>
         <Route path='/features/placement' element={<Proximity/>}/>
         <Route path='/features/VMscaleMode' element={<VMscale/>}/>
         <Route path='/features/VMscaleSets' element={<VMscaleSets/>}/>

          {/*card 02 routes*/}
         <Route path='/linuxQuick/azureCli' element={<SpotVM/>}/>
         <Route path='/linuxQuick/azurePortal' element={<DedicatedHost/>}/>
         <Route path='/linuxQuick/azurePowershell' element={<Proximity/>}/>

         {/*card 03 routes*/}
         <Route path='/windowsQuick/azPortal' element={<SpotVM/>}/>
         <Route path='/windowsQuick/azPowershell' element={<DedicatedHost/>}/>
         <Route path='/windowsQuick/azCLI' element={<Proximity/>}/>
         
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;
