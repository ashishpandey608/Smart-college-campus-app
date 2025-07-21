import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import logo from '../assets/campuscore.jpeg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  Title,
  Tooltip,
  Legend,
  Filler
);

// --- Reusable Helper Components for Admin Dashboard ---

// User Statistics Card
const UserStatsCard = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Students',
                data: [1200, 1350, 1400, 1550, 1700, 1847],
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Faculty',
                data: [120, 130, 135, 145, 155, 164],
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                fill: true,
                tension: 0.4,
            },
        ],
    };
    const options = { responsive: true, plugins: { legend: { display: false } } };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="p-3 bg-primary-subtle rounded-3 text-center h-100">
                            <p className="small text-muted mb-1">Students</p>
                            <h4 className="fw-bold mb-1">1,847</h4>
                            <p className="small text-success mb-0">+1.2% from last month</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 bg-danger-subtle rounded-3 text-center h-100">
                            <p className="small text-muted mb-1">Faculty</p>
                            <h4 className="fw-bold mb-1">164</h4>
                            <p className="small text-success mb-0">+5.2% from last month</p>
                        </div>
                    </div>
                </div>
                <div style={{ height: '150px' }} className="mt-3">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

// Upcoming Events Card
const UpcomingEventsCard = () => {
    const events = [
        { date: 'JUN 15', title: 'Record Arrangement Workshop', time: '09:00 AM - Main Auditorium' },
        { date: 'JUN 18', title: 'Student Orientation Day', time: '10:00 AM - Conference Hall' },
        { date: 'JUN 20', title: 'Board Meeting', time: '02:00 PM - Meeting Room A' },
    ];
    return (
        <div className="card shadow-sm h-100">
            <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
                <h6 className="fw-bold mb-0">Upcoming Events</h6>
                <button className="btn btn-sm btn-light"><i className="bi bi-plus"></i></button>
            </div>
            <div className="card-body p-4">
                {events.map(event => (
                    <div key={event.title} className="d-flex align-items-center mb-3">
                        <div className="text-center me-3">
                            <p className="fw-bold small mb-0">{event.date.split(' ')[0]}</p>
                            <p className="fw-bold text-primary small mb-0">{event.date.split(' ')[1]}</p>
                        </div>
                        <div>
                            <p className="fw-semibold small mb-1">{event.title}</p>
                            <p className="text-muted small mb-0">{event.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// System Notifications Card
const SystemNotificationsCard = () => (
    <div className="card shadow-sm h-100">
         <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
            <h6 className="fw-bold mb-0">System Notifications</h6>
            <button className="btn btn-sm btn-light"><i className="bi bi-arrow-clockwise"></i></button>
        </div>
        <div className="card-body p-4">
            <div className="d-flex align-items-start mb-3">
                <i className="bi bi-exclamation-triangle-fill text-danger me-3 fs-5"></i>
                <div>
                    <p className="fw-semibold small mb-1">System maintenance scheduled for June 15th</p>
                    <p className="text-muted small mb-0">2 hours ago</p>
                </div>
            </div>
            <div className="d-flex align-items-start mb-3">
                <i className="bi bi-info-circle-fill text-warning me-3 fs-5"></i>
                <div>
                    <p className="fw-semibold small mb-1">New course registration opens next week</p>
                    <p className="text-muted small mb-0">5 hours ago</p>
                </div>
            </div>
            <div className="d-flex align-items-start">
                <i className="bi bi-check-circle-fill text-success me-3 fs-5"></i>
                <div>
                    <p className="fw-semibold small mb-1">Semester grades have been finalized</p>
                    <p className="text-muted small mb-0">1 day ago</p>
                </div>
            </div>
        </div>
    </div>
);

// Quick Reports Card
const QuickReportsCard = () => (
    <div className="card shadow-sm h-100">
        <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
            <h6 className="fw-bold mb-0">Quick Reports</h6>
            <button className="btn btn-sm btn-light"><i className="bi bi-three-dots"></i></button>
        </div>
        <div className="card-body p-4">
            <div className="row g-3">
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="fw-semibold small mb-1">Attendance Report</p><p className="text-muted small mb-0">Last updated today</p></div></div>
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="fw-semibold small mb-1">Performance Stats</p><p className="text-muted small mb-0">Last updated yesterday</p></div></div>
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="fw-semibold small mb-1">Courses Report</p><p className="text-muted small mb-0">Last updated 2 days ago</p></div></div>
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="fw-semibold small mb-1">Financial Summary</p><p className="text-muted small mb-0">Last updated 3 days ago</p></div></div>
            </div>
        </div>
    </div>
);

// Announcements Card
const AnnouncementsCard = () => (
    <div className="card shadow-sm h-100">
        <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
            <h6 className="fw-bold mb-0">Announcements</h6>
            <Link to="#" className="text-decoration-none small fw-semibold">See all</Link>
        </div>
        <div className="card-body p-4">
            <div className="mb-3">
                <p className="fw-semibold small d-flex justify-content-between">Faculty Senate Meeting <span className="badge bg-danger-subtle text-danger-emphasis rounded-pill">New</span></p>
                <p className="small text-muted">A mandatory faculty meeting has been rescheduled to June 20th at 3:00 PM in the Main Conference Hall. Please adjust your calendars accordingly.</p>
            </div>
            <hr/>
            <div>
                <p className="fw-semibold small d-flex justify-content-between">Summer Registration Open <span className="text-muted small">2d ago</span></p>
                <p className="small text-muted">Summer course registration is now open for all faculty to submit their course proposals. Submissions are handled by the department coordinator.</p>
            </div>
        </div>
    </div>
);

// User Management Card
const UserManagementCard = () => (
    <div className="card shadow-sm h-100">
        <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
            <h6 className="fw-bold mb-0">User Management</h6>
            <button className="btn btn-primary btn-sm"><i className="bi bi-plus-lg me-1"></i> Register New User</button>
        </div>
        <div className="card-body p-4">
            <div className="row text-center mb-3">
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="small text-muted mb-1">Total Students</p><h5 className="fw-bold mb-0">1,284</h5></div></div>
                <div className="col-6"><div className="p-3 bg-light-subtle rounded-3"><p className="small text-muted mb-1">Total Faculty</p><h5 className="fw-bold mb-0">86</h5></div></div>
            </div>
            <p className="small fw-semibold">Recent Registrations</p>
            <div className="d-flex align-items-center justify-content-between mb-2">
                <p className="small mb-0">Devansh - Student - Computer Science</p>
                <p className="small text-muted mb-0">8h ago</p>
            </div>
             <div className="d-flex align-items-center justify-content-between">
                <p className="small mb-0">Dr. Janeira Wilson - Faculty - Physics</p>
                <p className="small text-muted mb-0">1d ago</p>
            </div>
        </div>
    </div>
);


// --- Main AdminDashboard Component ---
const AdminDashboard = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
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
                            <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-admin" onChange={toggleTheme} checked={theme === 'dark'} />
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
                    <div className="col-lg-8">
                        <UserStatsCard />
                    </div>
                    <div className="col-lg-4">
                        <UpcomingEventsCard />
                    </div>
                    <div className="col-lg-4">
                        <SystemNotificationsCard />
                    </div>
                    <div className="col-lg-4">
                        <QuickReportsCard />
                    </div>
                     <div className="col-lg-4">
                        <AnnouncementsCard />
                    </div>
                    <div className="col-lg-8">
                        <UserManagementCard />
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

export default AdminDashboard;
