import React from 'react';
import { Link } from 'react-router-dom';
//import './Layout.css'; // optional
import logo from '../assets/campuscore.jpeg';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
        <div className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="CampusCore" width="30" height="30" />
          <span>CampusCore</span>
        </div>
        <div className="ms-auto d-flex align-items-center gap-3">
          <i className="bi bi-bell fs-5"></i>
          <i className="bi bi-person-circle fs-4"></i>
          <span className="fw-bold">DEVANSH</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-fluid py-4" style={{ minHeight: '90vh', backgroundColor: '#f8f9fa' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
