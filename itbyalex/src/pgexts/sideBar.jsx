import { useState } from 'react'
import React from 'react';
import './sideBar.css'

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    function toggleSidebar() {
      setSidebarOpen(!sidebarOpen);
    }
  
    return (
      <div>
        <div className="menu-btn" onClick={toggleSidebar}>
          <div className="menu-btn__burger"></div>
        </div>
        <div className={sidebarOpen ? "sidebar open" : "sidebar"}>
          <ul className="sidebar-links">
            <li><br/><br/><br/></li>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/writeups.html">Writeups</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/about.html">About</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Sidebar