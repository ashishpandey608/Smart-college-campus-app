import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import logo from '../assets/campuscore.jpeg'; 

// Helper component for the faculty's attendance submission form
const AttendanceCard = () => (
    <div className="card shadow-sm mb-4">
        <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="card-title fw-bold mb-0">Submit Attendance</h5>
                <Link to="#" className="text-decoration-none small fw-semibold">View Details</Link>
            </div>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="p-3 bg-light-subtle border rounded-3 text-center mb-3">
                        <h4 className="fw-bold text-primary mb-1">65%</h4>
                        <p className="small text-muted mb-0">Student Present</p>
                    </div>
                    <div className="p-3 bg-light-subtle border rounded-3 text-center mb-3">
                        <h4 className="fw-bold text-warning mb-1">21%</h4>
                        <p className="small text-muted mb-0">Student Late</p>
                    </div>
                    <div className="p-3 bg-light-subtle border rounded-3 text-center">
                        <h4 className="fw-bold text-danger mb-1">9%</h4>
                        <p className="small text-muted mb-0">Student Absent</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="mb-4">
                        <label className="form-label fw-semibold small">Select Class</label>
                        <p className="text-muted small">Select the subject you are attending.</p>
                        <div className="btn-group w-100">
                            <input type="radio" className="btn-check" name="class" id="class-math" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="class-math">Math</label>
                            <input type="radio" className="btn-check" name="class" id="class-english" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="class-english">English</label>
                            <input type="radio" className="btn-check" name="class" id="class-science" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="class-science">Science</label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="form-label fw-semibold small">Status</label>
                        <p className="text-muted small">Choose your attendance status.</p>
                        <div className="btn-group w-100">
                            <input type="radio" className="btn-check" name="status" id="status-present" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="status-present">Present</label>
                            <input type="radio" className="btn-check" name="status" id="status-absent" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="status-absent">Absent</label>
                            <input type="radio" className="btn-check" name="status" id="status-late" autoComplete="off" />
                            <label className="btn btn-outline-secondary" htmlFor="status-late">Late</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex">
                        <button className="btn btn-light flex-grow-1" type="button">Cancel</button>
                        <button className="btn btn-dark flex-grow-1" type="button">Submit Attendance</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


// Helper component for Today's Schedule
const ScheduleCard = () => {
    const schedule = [
        { time: '09:00AM - 10:30AM', room: 'Room 101', title: 'Introduction to Computer Science', status: 'Completed', icon: 'bi-book-fill' },
        { time: '11:00AM - 12:30PM', room: 'Room 203', title: 'Advanced Mathematics', status: 'Upcoming', icon: 'bi-calculator-fill' },
        { time: '02:00PM - 04:00PM', room: 'Lab Building B', title: 'Physics Laboratory', status: 'Upcoming', icon: 'bi-eyedropper' },
        { time: '04:30PM - 06:00PM', room: 'Room 305', title: 'English Literature', status: 'Upcoming', icon: 'bi-pen-fill' },
    ];
    return (
        <div className="card shadow-sm">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title fw-bold mb-0">Today's Class Schedule</h5>
                    <Link to="#" className="text-decoration-none small fw-semibold">Full Schedule</Link>
                </div>
                <div className="list-group list-group-flush">
                    {schedule.map(item => (
                        <div key={item.title} className="list-group-item d-flex align-items-center px-0">
                            <div className="p-2 bg-primary-subtle text-primary rounded-3 me-3">
                                <i className={`${item.icon} fs-5`}></i>
                            </div>
                            <div className="flex-grow-1">
                                <p className="fw-semibold mb-0 small">{item.title}</p>
                                <p className="text-muted mb-0 small">{item.time} • {item.room}</p>
                            </div>
                            <span className={`badge rounded-pill ${item.status === 'Completed' ? 'bg-secondary-subtle text-secondary-emphasis' : 'bg-primary-subtle text-primary-emphasis'}`}>{item.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper component for Upcoming Events
const EventsCard = () => {
    const events = [
        { title: 'Applied Science Assignment', time: '9:00 - 12:00', color: 'border-danger' },
        { title: 'Technology Exam', time: '1:00 - 2:00', color: 'border-warning' },
        { title: 'Artificial Intelligence Workshop', time: '9:00 - 12:00', color: 'border-info' },
        { title: 'UI Design Conference', time: '11:00 - 12:00', color: 'border-success' },
    ];
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-1">Upcoming Events</h5>
                <p className="small text-muted">Friday - 20th Tuesday Sunday</p>
                <ul className="list-unstyled">
                    {events.map((event, index) => (
                        <li key={index} className={`border-start ${event.color} border-3 ps-3 mb-3`}>
                            <p className="fw-semibold small mb-0">{event.title}</p>
                            <p className="small text-muted mb-0">{event.time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Helper component for Announcements
const AnnouncementsCard = () => (
    <div className="card shadow-sm mt-4">
        <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title fw-bold mb-0">Announcements</h5>
                <Link to="#" className="text-decoration-none small fw-semibold">View All</Link>
            </div>
            <div className="mb-3">
                <p className="fw-semibold small d-flex justify-content-between">Campus Closure Notice <span className="badge bg-danger-subtle text-danger-emphasis rounded-pill">Important</span></p>
                <p className="small text-muted">Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.</p>
                <Link to="#" className="text-decoration-none small fw-semibold">Read More</Link>
            </div>
            <hr/>
            <div className="mb-3">
                <p className="fw-semibold small">Summer Registration Open</p>
                <p className="small text-muted">Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot.</p>
                <Link to="#" className="text-decoration-none small fw-semibold">Read More</Link>
            </div>
             <hr/>
            <div>
                <p className="fw-semibold small">Library Extended Hours</p>
                <p className="small text-muted">The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30.</p>
                <Link to="#" className="text-decoration-none small fw-semibold">Read More</Link>
            </div>
        </div>
    </div>
);


const FacultyDashboard = () => {
  const [theme, setTheme] = useState('light');
  const navItems = ['Home', 'A+ Exam', 'Course Setup', 'Grading', 'Assignment', 'Duties', 'Mentor'];
  const navIcons = ['house-door-fill', 'patch-check-fill', 'book', 'graph-up', 'file-earmark-text', 'briefcase', 'people'];

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{backgroundColor: '#F0F5F9'}}>
      <div className="container-fluid p-4">
        {/* Header */}
        <header className="navbar navbar-expand-lg navbar-light bg-body rounded-3 shadow-sm p-3 mb-4">
            <Link className="navbar-brand" to="#">
                 <img src={logo} alt="Campus Core Logo" style={{height: '40px'}}/>
            </Link>
            <div className="d-flex align-items-center ms-auto">
                <button className="btn btn-link text-secondary"><i className="bi bi-search fs-5"></i></button>
                <div className="form-check form-switch mx-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="theme-switch"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                     <label className="form-check-label" htmlFor="theme-switch"></label>
                </div>
                <button className="btn btn-link text-secondary"><i className="bi bi-bell fs-5"></i></button>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                        <img src="https://placehold.co/32x32/EFEFEF/000000?text=DK" alt="Dr. Kab" className="rounded-circle me-2"/>
                        <span className="small fw-semibold">Dr.Kab</span>
                    </button>
                </div>
            </div>
        </header>
        
        {/* Welcome Banner */}
        <div className="p-4 rounded-3 shadow-lg mb-4 text-white d-flex justify-content-between align-items-center" style={{background: 'linear-gradient(to right, #0d6efd, #6610f2)'}}>
            <div>
                <h2 className="fw-bold">Welcome, Dr.kab</h2>
                <p className="small mb-0">Friday, June 13, 2025 | Spring Semester 2025</p>
                <p className="small mb-0">Faculty ID: FK10529</p>
            </div>
            <div className="p-3 rounded-3 text-center" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                <p className="small mb-1">Next Class</p>
                <p className="fw-semibold mb-1">Advanced Mathematics</p>
                <p className="small mb-0">in 45 minutes</p>
            </div>
        </div>

            {/* Main Navigation */}
        {/* Nav Buttons */}
                   <div className="d-flex nav-bar gap-5 mb-4 flex-wrap">
                 {[
                 { name: 'Home', to: '/faculty' },
                 { name: 'Exam', to: '' },
                 { name: 'Course-Setup', to: '/Course-Setup' },
                 { name: 'Grading', to: '' },
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
        <div className="row">
            <div className="col-lg-8">
                <AttendanceCard />
                <ScheduleCard />
            </div>
            <div className="col-lg-4">
                <EventsCard />
                <AnnouncementsCard />
            </div>
        </div>

        {/* Footer */}
        <footer className="d-flex justify-content-between text-muted small mt-4">
            <p><i className="bi bi-x-diamond-fill me-2"></i>Designed and developed by ZoroTeam</p>
            <p>© 2025 Zoro Innovations</p>
        </footer>
      </div>
    </div>
  );
};

export default FacultyDashboard;
