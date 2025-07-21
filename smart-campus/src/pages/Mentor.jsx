import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';
// --- Reusable Helper Components for Mentor Page ---

// Chat Sidebar Component
const ChatSidebar = () => {
    const facultyList = [
        { name: 'Olivia Mitchell', time: '8:00 p.m.' },
        { name: 'Benjamin', time: '6:47 p.m.' },
        { name: 'Daniel Miller', time: '4:51 p.m.' },
        { name: 'John Smith', time: '12:42 p.m.', active: true },
    ];

    return (
        <div className="d-flex flex-column h-100 p-3">
            <div className="btn-group w-100 mb-3" role="group">
                <button type="button" className="btn btn-dark">CHAT</button>
                <button type="button" className="btn btn-outline-secondary">CALLS</button>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text bg-light-subtle border-0"><i className="bi bi-search"></i></span>
                <input type="text" className="form-control bg-light-subtle border-0" placeholder="Search faculty" />
            </div>
            <div className="list-group list-group-flush">
                {facultyList.map(faculty => (
                    <a href="#" key={faculty.name} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 rounded-3 mb-1 ${faculty.active ? 'active' : ''}`}>
                        <div className="d-flex align-items-center">
                            <i className="bi bi-person-circle fs-4 me-3"></i>
                            <span className="fw-semibold small">{faculty.name}</span>
                        </div>
                        <span className="small text-muted">{faculty.time}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

// Chat Window Component
const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { from: 'mentor', text: 'I will look at it by today.', time: '12:03 p.m.' },
        { from: 'student', text: 'Sir, I also have question about the assignment due.', time: '12:15 p.m.' },
        { from: 'mentor', text: 'You can submit it on Tuesday.', time: '12:24 p.m.' },
        { from: 'student', text: 'Okay, thank you sir.', time: '12:26 p.m.' },
        { from: 'mentor', text: 'Anyother doubts ?', time: '12:37 p.m.' },
        { from: 'student', text: "No sir, it's clear. Thank you.", time: '12:42 p.m.' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { from: 'student', text: newMessage, time: 'now' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="d-flex flex-column h-100">
            {/* Chat Header */}
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <i className="bi bi-person-circle fs-4 me-3"></i>
                    <span className="fw-bold">John Smith</span>
                </div>
                <button className="btn btn-link text-secondary"><i className="bi bi-telephone-fill fs-5"></i></button>
            </div>

            {/* Messages */}
            <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                {messages.map((msg, i) => (
                    <div key={i} className={`d-flex mb-3 ${msg.from === 'student' ? 'justify-content-end' : 'justify-content-start'}`}>
                        <div className={`p-3 rounded-3 ${msg.from === 'student' ? 'bg-primary text-white' : 'bg-body-secondary'}`} style={{ maxWidth: '70%' }}>
                            <p className="small mb-1">{msg.text}</p>
                            <p className="small text-muted mb-0 text-end" style={{ fontSize: '0.75rem' }}>{msg.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message Input */}
            <div className="p-3 bg-body-tertiary">
                <div className="input-group">
                    <button className="btn btn-light"><i className="bi bi-paperclip"></i></button>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button className="btn btn-light"><i className="bi bi-mic"></i></button>
                    <button className="btn btn-primary" onClick={handleSend}><i className="bi bi-send-fill"></i></button>
                </div>
            </div>
        </div>
    );
};


// --- Main Mentor Component ---

const Mentor = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const navItems = ['Home', 'Schedule', 'Course Setup', 'Analytics', 'Fees', 'Other', 'Mentor'];
  const navIcons = ['house-door-fill', 'calendar-week-fill', 'book-fill', 'bar-chart-line-fill', 'receipt', 'three-dots', 'person-lines-fill'];

  return (
    <div className="bg-body-tertiary">
      <div className="container-fluid p-4">
        {/* Header */}
        <header className="navbar navbar-expand-lg bg-body rounded-3 shadow-sm p-3 mb-4">
            <Link className="navbar-brand" to="#">
                 <img src={logo} alt="Campus Core Logo" style={{height: '40px'}}/>
            </Link>
            <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-link text-secondary"><i className="bi bi-search fs-5"></i></button>
                <div className="form-check form-switch mx-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-mentor" onChange={toggleTheme} checked={theme === 'dark'}/>
                </div>
                <button className="btn btn-link text-secondary"><i className="bi bi-bell fs-5"></i></button>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                        <img src="https://placehold.co/32x32/EFEFEF/000000?text=D" alt="Dev" className="rounded-circle me-2"/>
                        <span className="small fw-semibold">Dev</span>
                    </button>
                </div>
            </div>
        </header>

        {/* Welcome Banner */}
        <div className="p-4 rounded-3 shadow-lg mb-4 text-white d-flex justify-content-between align-items-center" style={{background: 'linear-gradient(to right, #0d6efd, #6610f2)'}}>
            <div>
                <h2 className="fw-bold">Welcome back, Dev!</h2>
                <p className="small mb-0">Wednesday, June 11, 2025 | Spring Semester 2025</p>
                <p className="small mb-0">Student ID: ST2023456</p>
            </div>
            <div className="p-3 rounded-3 text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                <p className="small mb-1">Next Class</p>
                <p className="fw-semibold mb-1">Advanced Mathematics</p>
                <p className="small mb-0">in 45 minutes</p>
            </div>
        </div>
        
        {/* Main Navigation */}
        <div className="d-flex nav-bar gap-5 mb-4 flex-wrap"> 
                  {[
                  { name: 'Home', to: '/student' },
                  { name: 'Schedule', to: '/schedule' },
                  { name: 'CourseSetup', to: '/CourseSetup' },
                  { name: 'Result', to: '/result' },
                  { name: 'Fees', to: '/fees' },
                  { name: 'Other', to: '/Others' },
                  { name: 'Mentor', to: '/Mentor' }
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="btn no-border"
                    style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#000' }}
                  >
                    <i className={`bi bi-${index % 2 === 0 ? 'house' : 'book'}`}></i> {item.name}
                  </Link>
                ))}
                
                </div>

        {/* Main Chat Content */}
        <div className="card shadow-sm">
            <div className="row g-0" style={{minHeight: '65vh'}}>
                <div className="col-lg-4 border-end">
                    <ChatSidebar />
                </div>
                <div className="col-lg-8">
                    <ChatWindow />
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="d-flex justify-content-between text-muted small mt-4 pt-4 border-top">
            <p><i className="bi bi-x-diamond-fill me-2"></i>Designed and developed by ZoroTeam</p>
            <p>© 2025 Zoro Innovations</p>
        </footer>
      </div>
    </div>
  );
};

export default Mentor;
