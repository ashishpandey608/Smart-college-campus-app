import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line, Pie } from 'react-chartjs-2';
import logo from '../assets/campuscore.jpeg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// --- Reusable Helper Components for Analytics Page ---

// User Engagement Trends Card
const UserEngagementCard = () => {
    const lineData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [{
            label: 'Weekly Active Users',
            data: [1200, 1500, 1400, 1800, 1600, 2000, 1900],
            borderColor: '#6f42c1',
            backgroundColor: 'rgba(111, 66, 193, 0.1)',
            fill: true,
            tension: 0.4,
        }],
    };
    const pieData = {
        labels: ['Students', 'Faculty', 'Admin', 'Staff'],
        datasets: [{
            data: [70, 15, 5, 10],
            backgroundColor: ['#0d6efd', '#dc3545', '#ffc107', '#198754'],
            borderWidth: 0,
        }]
    };
    const commonOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold">User Engagement Trends</h5>
                <p className="small text-muted">Analyze the trends in campus user engagement.</p>
                <div style={{ height: '200px' }} className="my-4"><Line data={lineData} options={commonOptions} /></div>
                <div className="row">
                    <div className="col-md-5">
                        <h6 className="fw-bold">User Distribution by Roles</h6>
                        <p className="small text-muted">7 min ago</p>
                        <div style={{ height: '150px' }}><Pie data={pieData} options={commonOptions} /></div>
                    </div>
                    <div className="col-md-7">
                         <h6 className="fw-bold">Overview</h6>
                         <p className="small text-muted">Get insights into campus performance.</p>
                         <button className="btn btn-primary mb-3">Generate Report</button>
                         <div>
                             <button className="btn btn-sm btn-outline-secondary me-2">Students</button>
                             <button className="btn btn-sm btn-outline-secondary me-2">Recent Enrolls</button>
                             <button className="btn btn-sm btn-outline-secondary">Alumni</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Recent Activities & Key Metrics Section
const InfoGrid = () => {
    const activities = [
        { icon: 'bi-book', title: 'New Course Uploaded', desc: 'Introduction to Data Science', time: '3 days ago' },
        { icon: 'bi-envelope', title: 'Email Campaign Sent', desc: 'Welcome new students', time: '1 week ago' },
        { icon: 'bi-bar-chart-fill', title: 'Survey Results', desc: 'End-of-semester feedback', time: '2 days ago' },
        { icon: 'bi-calendar-check', title: 'Final Exam Schedule', desc: 'Published for Fall 2025', time: '5 days ago' },
    ];
    const metrics = [
        { title: 'Total Students', value: '9000', color: 'primary' },
        { title: 'New Enrollments', value: '150', color: 'success' },
        { title: 'Applied Courses', value: '45', color: 'warning' },
        { title: 'Application Rate', value: '95%', color: 'info' },
    ];
    return (
        <div className="row g-4">
            <div className="col-lg-7">
                <div className="card shadow-sm h-100">
                    <div className="card-body p-4">
                        <h5 className="card-title fw-bold">Recent Activities</h5>
                        <p className="small text-muted">Stay updated with campus happenings.</p>
                        <div className="row g-3 mt-3">
                            {activities.map(act => (
                                <div className="col-md-6" key={act.title}>
                                    <div className="d-flex align-items-center bg-light-subtle p-3 rounded-3">
                                        <i className={`${act.icon} fs-4 text-primary me-3`}></i>
                                        <div>
                                            <p className="fw-semibold small mb-1">{act.title}</p>
                                            <p className="small text-muted mb-0">{act.desc} • {act.time}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="card shadow-sm h-100">
                    <div className="card-body p-4">
                         <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="card-title fw-bold mb-0">Key Metrics</h5>
                            <button className="btn btn-sm btn-primary">View More</button>
                        </div>
                        <div className="row g-3">
                            {metrics.map(met => (
                                <div className="col-6" key={met.title}>
                                    <div className={`p-3 bg-${met.color}-subtle rounded-3`}>
                                        <p className="small text-muted mb-1">{met.title}</p>
                                        <h5 className="fw-bold mb-0">{met.value}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Performance Trends Card
const PerformanceTrendsCard = () => {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Student Satisfaction',
            data: [75, 78, 82, 80, 85, 88],
            borderColor: '#198754',
            backgroundColor: 'rgba(25, 135, 84, 0.1)',
            fill: true,
            tension: 0.4,
        }],
    };
     const pieData = {
        labels: ['Computer Science', 'Business', 'Arts', 'Engineering'],
        datasets: [{
            data: [40, 25, 15, 20],
            backgroundColor: ['#0d6efd', '#ffc107', '#dc3545', '#198754'],
            borderWidth: 0,
        }]
    };
    const commonOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold">Performance Trends</h5>
                <p className="small text-muted">Review performance over past semesters.</p>
                <div className="row mt-4">
                    <div className="col-md-7">
                        <h6 className="fw-bold">Student Satisfaction</h6>
                        <div style={{ height: '200px' }}><Line data={lineData} options={commonOptions} /></div>
                    </div>
                    <div className="col-md-5">
                        <h6 className="fw-bold">Course Popularity</h6>
                        <div style={{ height: '200px' }}><Pie data={pieData} options={commonOptions} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Main Analytics Component ---
const Analytics = () => {
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
                            <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-analytics" onChange={toggleTheme} checked={theme === 'dark'} />
                        </div>
                        <button className="btn btn-link text-secondary"><i className="bi bi-bell fs-5"></i></button>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                                <img src="https://placehold.co/32x32/EFEFEF/000000?text=A" alt="Admin" className="rounded-circle me-2" />
                                <span className="small fw-semibold">Admin</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Welcome Banner */}
                <div className="p-4 rounded-3 shadow-lg mb-4 text-white" style={{ background: 'linear-gradient(to right, #0d6efd, #6610f2)' }}>
                    <h2 className="fw-bold">Welcome, Admin</h2>
                    <p className="small mb-0">Friday, June 13, 2025</p>
                </div>

                {/* Main Navigation */}
                <div className="d-flex nav-bar gap-5 mb-4 flex-wrap">
                                                                        {[
                                                                        { name: 'Home', to: '/admin' },
                                                                        { name: 'Schedule', to: '' },
                                                                        { name: 'Course Setup', to: '/AdminCourseSetup' },
                                                                        { name: 'Analytics', to: '/Analytics' },
                                                                        { name: 'Assignment', to: '' },
                                                                        { name: 'Duties', to: '' },
                                                                        { name: 'Mentor', to: '' }
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
                {/* Main Content Grid */}
                <div className="row g-4">
                    <div className="col-12">
                        <UserEngagementCard />
                    </div>
                    <div className="col-12">
                        <InfoGrid />
                    </div>
                    <div className="col-12">
                        <PerformanceTrendsCard />
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

export default Analytics;
