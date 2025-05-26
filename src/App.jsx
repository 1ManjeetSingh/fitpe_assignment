import { useState, useEffect, useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import { menuItems } from "./data/navLinks.js"
import SideBar from './components/sidebar/SideBar.jsx';
import Dashboard from './components/dashboard/DashBoard.jsx';
import SideBarOverLay from './components/sidebar/SideBarOverlay.jsx';


function App() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      <div className='layout-container'>

        <div className='header-container'>
          <Navbar setIsOverlayOpen={setIsOverlayOpen}/>
        </div>

        <div className='body-container'>

          <div className='sideBar'>
            <SideBar items={menuItems}/>
          </div>

          <div className={`sidebar-overlay ${isOverlayOpen ? 'active':''}`}>
            <SideBarOverLay
            isOverlayOpen={isOverlayOpen}
            setIsOverlayOpen={setIsOverlayOpen}
            items={menuItems}/>
          </div>

          <div className='main-content'>
            <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
