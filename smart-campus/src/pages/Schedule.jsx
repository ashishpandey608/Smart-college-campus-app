import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';
// --- Reusable Helper Components for Schedule Page ---

// Calendar Card Component
const CalendarCard = () => {
    const monthName = "January 2025";
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    // Simple representation of days in a grid for January 2025
    const calendarDays = [
        null, null, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5
    ];
    const today = 17;

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title fw-bold mb-0">Calendar</h5>
                    <span className="text-muted small fw-semibold">Spring Summer</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button className="btn btn-sm btn-light"><i className="bi bi-chevron-left"></i></button>
                    <h6 className="fw-bold mb-0">{monthName}</h6>
                    <button className="btn btn-sm btn-light"><i className="bi bi-chevron-right"></i></button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                {daysOfWeek.map(day => <th key={day} className="small fw-normal text-muted">{day}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {[0, 1, 2, 3, 4, 5].map(weekIndex => (
                                <tr key={weekIndex}>
                                    {calendarDays.slice(weekIndex * 7, (weekIndex * 7) + 7).map((day, dayIndex) => (
                                        <td key={dayIndex} className={`p-2 ${day === today ? 'bg-primary text-white rounded-circle' : ''} ${day && dayIndex < 31 ? '' : 'text-muted'}`}>
                                            {day}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Event Filter and Upcoming Events Card
const EventsSection = () => {
    const upcomingEvents = [
        { title: 'Registration Complete!', date: 'JAN 12 2025, 11:00 AM', type: 'Lecture Confirmation' },
        { title: 'Personal Coaching With Yasmin', date: 'FEB 15 2025, 11:00 AM', type: 'Coaching on College' },
    ];
    return (
        <div className="card shadow-sm mt-4">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="fw-bold mb-0">Event Type</h5>
                    <Link to="#" className="text-decoration-none small fw-semibold">Filter Event <i className="bi bi-chevron-down"></i></Link>
                </div>
                <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="eventType" id="lecture" defaultChecked/>
                        <label className="form-check-label small fw-semibold" htmlFor="lecture">Lecture</label>
                    </div>
                     <div className="form-check">
                        <input className="form-check-input" type="radio" name="eventType" id="groupStudy"/>
                        <label className="form-check-label small fw-semibold" htmlFor="groupStudy">Group Study</label>
                    </div>
                     <div className="form-check">
                        <input className="form-check-input" type="radio" name="eventType" id="coaching"/>
                        <label className="form-check-label small fw-semibold" htmlFor="coaching">Coaching</label>
                    </div>
                </div>
                <h5 className="fw-bold mb-3 text-primary">Upcoming Events</h5>
                 {upcomingEvents.map(event => (
                    <div key={event.title} className="p-3 rounded-3 bg-light-subtle mb-3">
                        <p className="fw-semibold small mb-1">{event.title}</p>
                        <p className="text-muted small mb-0">{event.date} | {event.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Add Event Card
const AddEventCard = () => {
    const templates = [
        { icon: 'bi-person-fill', title: 'Personal Coaching', date: 'JAN 12 2025, 11:00 AM' },
        { icon: 'bi-people-fill', title: 'Group Study', date: 'JAN 17 2025, 4:30 PM' },
        { icon: 'bi-book-fill', title: 'Introductory Lecture', date: 'FEB 27 2025, 10:00 AM' },
        { icon: 'bi-calendar-x-fill', title: 'Assignment Deadline', date: 'MAR 01 2025, 11:59 PM' },
        { icon: 'bi-easel-fill', title: 'Presentation Day', date: 'APR 22 2025, 1:00 PM' },
    ];
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <h5 className="fw-bold mb-3">Add Event</h5>
                <div className="d-grid">
                    <button className="btn btn-primary fw-semibold"><i className="bi bi-plus-lg me-2"></i>Add New Event</button>
                </div>
                <hr/>
                <p className="fw-semibold small mb-3">Saved Templates</p>
                {templates.map(template => (
                    <div key={template.title} className="d-flex align-items-center p-3 bg-light-subtle rounded-3 mb-3">
                        <div className="p-2 bg-primary-subtle text-primary rounded-3 me-3">
                            <i className={`${template.icon} fs-5`}></i>
                        </div>
                        <div>
                            <p className="fw-semibold small mb-1">{template.title}</p>
                            <p className="text-muted small mb-0">{template.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- Main Schedule Component ---

const Schedule = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navItems = ['Home', 'Schedule', 'Course Setup', 'Results', 'Fees', 'Other', 'Mentor'];
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
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-schedule" onChange={toggleTheme} checked={theme === 'dark'}/>
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

        {/* Main Content Grid */}
        <div className="row g-4">
            <div className="col-lg-8">
                <CalendarCard />
                <EventsSection />
            </div>
            <div className="col-lg-4">
                <AddEventCard />
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

export default Schedule;
