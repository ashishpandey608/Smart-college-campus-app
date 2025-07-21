import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// --- Header Component (Header.jsx) ---
const Header = ({ theme, toggleTheme }) => (
    <header className="navbar navbar-expand-lg bg-body rounded-3 shadow-sm p-3 mb-4">
        <Link className="navbar-brand" to="#">
            <img src="https://placehold.co/120x40/000000/ffffff?text=CAMPUS+CORE" alt="Campus Core Logo" style={{ height: '28px' }} />
        </Link>
        <div className="d-flex align-items-center ms-auto">
            <button className="btn btn-link text-secondary"><i className="bi bi-search fs-5"></i></button>
            <div className="form-check form-switch mx-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="theme-switch-main"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
            </div>
            <button className="btn btn-link text-secondary"><i className="bi bi-bell fs-5"></i></button>
            <div className="dropdown">
                <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                    <img src="https://placehold.co/32x32/EFEFEF/000000?text=D" alt="Dev" className="rounded-circle me-2" />
                    <span className="small fw-semibold">Dev</span>
                </button>
            </div>
        </div>
    </header>
);

// --- Welcome Banner Component (WelcomeBanner.jsx) ---
const WelcomeBanner = () => (
    <div className="p-4 rounded-3 shadow-lg mb-4 text-white d-flex justify-content-between align-items-center" style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
        <div>
            <h2 className="fw-bold">Welcome back, Dev!</h2>
            <p className="small mb-0">Wednesday, June 11, 2025 | Spring Semester 2025</p>
            <p className="small mb-0">Student ID: ST2023456</p>
        </div>
        <div className="p-3 rounded-3 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <p className="small mb-1">Next Class</p>
            <p className="fw-semibold mb-1">Advanced Mathematics</p>
            <p className="small mb-0">in 45 minutes</p>
        </div>
    </div>
);

// --- Main Navigation Component (MainNavigation.jsx) ---
const MainNavigation = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/student', icon: 'house-door-fill' },
        { name: 'Schedule', path: '/schedule', icon: 'calendar-week-fill' },
        { name: 'Course Setup', path: '/course-setup', icon: 'book-fill' },
        { name: 'Analytics', path: '/analytics', icon: 'bar-chart-line-fill' },
        { name: 'Fees', path: '/fees', icon: 'receipt' },
        { name: 'Other', path: '/other', icon: 'three-dots' },
        { name: 'Mentor', path: '/mentor', icon: 'person-lines-fill' },
    ];

    return (
        <nav className="nav nav-pills nav-fill bg-body rounded-3 shadow-sm p-2 mb-4">
            {navItems.map((item) => (
                <Link key={item.name} to={item.path} className={`nav-link d-flex align-items-center justify-content-center gap-2 ${location.pathname === item.path ? 'active' : 'text-body'}`}>
                    <i className={`bi bi-${item.icon}`}></i>
                    <span className="fw-semibold small">{item.name}</span>
                </Link>
            ))}
        </nav>
    );
};


// --- Footer Component (Footer.jsx) ---
const Footer = () => (
    <footer className="d-flex justify-content-between text-muted small mt-4 pt-4 border-top">
        <p><i className="bi bi-x-diamond-fill me-2"></i>Designed and developed by ZoroTeam</p>
        <p>© 2025 Zoro Innovations</p>
    </footer>
);


// --- Layout Component (Layout.jsx) ---
const Layout = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="bg-body-tertiary">
            <div className="container-fluid p-4">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <WelcomeBanner />
                <MainNavigation />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
