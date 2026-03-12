import React from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Registration from './Registration';
import AdminLogin from './AdminLogin';
import './style.css'



const MainNavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            Event Management System - 2500031363
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Registration" className="nav-link">
              Registration
            </Link>
          </li>
          <li className="nav-item nav-item-dropdown">
            <button className="nav-link dropdown-btn">
              Login ▼
            </button>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/admin-login" className="dropdown-link">
                  Admin Login
                </Link>
              </li>
              <li className="dropdown-item">
                
                 

              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      
  
      </Routes>


    </div>

  );
};

export default MainNavBar;