import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';
// --- Reusable Helper Components for Others Page ---

// Star Rating Component
const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <i key={index} className={`bi ${index < rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'}`}></i>
            ))}
        </div>
    );
};

// Feedback History Item Component
const FeedbackHistoryItem = ({ item }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Pending': return 'bg-warning-subtle text-warning-emphasis';
            case 'Reviewed': return 'bg-info-subtle text-info-emphasis';
            case 'Resolved': return 'bg-success-subtle text-success-emphasis';
            default: return 'bg-secondary-subtle text-secondary-emphasis';
        }
    };

    return (
        <div className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <span className={`badge rounded-pill ${getStatusClass(item.status)} me-2`}>{item.status}</span>
                    <span className="small text-muted">Submitted on {item.date}</span>
                    <p className="fw-bold mb-1 mt-1">{item.title}</p>
                    <StarRating rating={item.rating} />
                </div>
                <button className="btn btn-light btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${item.id}`}>
                    <i className="bi bi-chevron-down"></i>
                </button>
            </div>
            <div className="collapse mt-2" id={`collapse-${item.id}`}>
                <p className="small text-muted">{item.comment}</p>
            </div>
        </div>
    );
};

// Main Feedback Management Card
const FeedbackManagementCard = () => {
    const [rating, setRating] = React.useState(0);
    const feedbacks = [
        { id: 1, status: 'Pending', date: 'June 20, 2025', title: 'Course Content', rating: 3, comment: 'The content for the last module was a bit confusing and could use more examples.' },
        { id: 2, status: 'Reviewed', date: 'June 15, 2025', title: 'Faculty', rating: 4, comment: 'Professor Smith is excellent, but the TA for the lab section seems unprepared.' },
        { id: 3, status: 'Resolved', date: 'June 5, 2025', title: 'System Issue', rating: 2, comment: 'The assignment submission portal was down for an hour before the deadline.' },
        { id: 4, status: 'Resolved', date: 'May 28, 2025', title: 'Campus Facilities', rating: 5, comment: 'The new library upgrades are fantastic! Great job.' },
    ];

    return (
        <div className="card shadow-sm">
            <div className="card-header bg-body p-3 d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title fw-bold mb-1">Feedback Management</h5>
                    <p className="text-muted small mb-0">View and manage your submitted feedback</p>
                </div>
                <button className="btn btn-outline-secondary btn-sm">← Back to Dashboard</button>
            </div>
            <div className="card-body p-4">
                {/* Filter Controls */}
                <div className="row g-3 align-items-end mb-4">
                    <div className="col-md-3">
                        <label className="form-label small fw-semibold">Date Range</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                         <label className="form-label small fw-semibold">&nbsp;</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label small fw-semibold">Category</label>
                        <select className="form-select"><option>All Categories</option></select>
                    </div>
                    <div className="col-md-3 d-flex gap-2">
                        <div className="flex-grow-1">
                            <label className="form-label small fw-semibold">Status</label>
                            <select className="form-select"><option>All</option></select>
                        </div>
                        <button className="btn btn-primary">Apply Filters</button>
                    </div>
                </div>

                {/* Feedback History */}
                <h6 className="fw-bold mb-3">Feedback History</h6>
                <div className="list-group list-group-flush mb-3">
                    {feedbacks.map(item => <FeedbackHistoryItem key={item.id} item={item} />)}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="small text-muted mb-0">Showing 4 of 12 feedback submissions</p>
                    <nav>
                        <ul className="pagination pagination-sm mb-0">
                            <li className="page-item disabled"><a className="page-link" href="#">&laquo;</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                        </ul>
                    </nav>
                </div>

                <hr className="my-4"/>

                {/* Submit New Feedback */}
                <h6 className="fw-bold mb-3">Submit New Feedback</h6>
                <div className="row g-3 mb-3">
                    <div className="col-md-6">
                        <label className="form-label small fw-semibold">Feedback Category</label>
                        <select className="form-select"><option>Select category</option></select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label small fw-semibold">Rating</label>
                        <div>
                            {[...Array(5)].map((_, index) => (
                                <i key={index} 
                                   className={`bi fs-4 ${index < rating ? 'bi-star-fill text-warning' : 'bi-star text-muted'}`}
                                   style={{ cursor: 'pointer' }}
                                   onClick={() => setRating(index + 1)}>
                                </i>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label small fw-semibold">Comments</label>
                    <textarea className="form-control" rows="3" placeholder="Please share your feedback here..."></textarea>
                </div>
                <button className="btn btn-primary">Submit Feedback</button>
            </div>
        </div>
    );
};


// --- Main Others Component ---

const Others = () => {
  const [theme, setTheme] = React.useState('light');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const navItems = ['Home', 'Schedule', 'Course Setup', 'Result', 'Fees', 'Other', 'Mentor'];
  const navIcons = ['house-door-fill', 'calendar-week-fill', 'book-fill', 'bar-chart-fill', 'receipt', 'three-dots', 'person-lines-fill'];

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
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-others" onChange={toggleTheme} checked={theme === 'dark'}/>
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
        {/* Main Content */}
        <FeedbackManagementCard />

        {/* Footer */}
        <footer className="d-flex justify-content-between text-muted small mt-4 pt-4 border-top">
            <p><i className="bi bi-x-diamond-fill me-2"></i>Designed and developed by ZoroTeam</p>
            <p>© 2025 Zoro Innovations</p>
        </footer>
      </div>
    </div>
  );
};

export default Others;
