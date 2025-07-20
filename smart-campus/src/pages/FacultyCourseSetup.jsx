import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';

// Helper component for course cards using Bootstrap
const CourseCard = ({ course }) => {
    const showSubmissions = course.assignments.type !== 'Lab Reports';
    const showLabEquipment = course.assignments.type === 'Lab Reports';

    return (
        <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="card-title fw-bold">{course.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted small">{course.code} | {course.subject}</h6>
                        </div>
                        <div className="d-flex align-items-center">
                             <span className="badge bg-success-subtle text-success-emphasis rounded-pill me-2">{course.status}</span>
                             <button className="btn btn-light btn-sm p-0" style={{width: '24px', height: '24px'}}><i className="bi bi-three-dots-vertical"></i></button>
                        </div>
                    </div>
                    <p className="text-muted small mt-2 mb-3">{course.schedule}</p>
                    <div className="row">
                        <div className="col-6">
                            <p className="fw-semibold small">Course Materials</p>
                            <p className="text-muted small mt-1">{course.materials.files}</p>
                            <a href="#" className="text-decoration-none small fw-semibold"><i className="bi bi-upload me-1"></i>Upload New</a>
                        </div>
                        <div className="col-6">
                            <p className="fw-semibold small">{course.assignments.type || 'Assignments'}</p>
                            <p className="text-muted small mt-1">{course.assignments.active}</p>
                            <a href="#" className="text-decoration-none small fw-semibold"><i className="bi bi-plus-circle me-1"></i>Create New</a>
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-body-tertiary d-flex justify-content-between small">
                    <a href="#" className="text-decoration-none text-muted"><i className="bi bi-info-circle me-1"></i>View Details</a>
                    <a href="#" className="text-decoration-none text-muted"><i className="bi bi-person-check me-1"></i>Attendance</a>
                    {showSubmissions && <a href="#" className="text-decoration-none text-muted"><i className="bi bi-file-earmark-text me-1"></i>Submissions</a>}
                    {showLabEquipment && <a href="#" className="text-decoration-none text-muted"><i className="bi bi-flask me-1"></i>Lab Equipment</a>}
                    <a href="#" className="text-decoration-none text-muted"><i className="bi bi-gear me-1"></i>Settings</a>
                </div>
            </div>
        </div>
    );
};

// Helper component for recent activity rows using Bootstrap
const ActivityRow = ({ activity }) => (
    <div className="list-group-item">
        <div className="row align-items-center">
            <div className="col-md-5 d-flex align-items-center">
                <div className={`rounded p-2 me-3 ${activity.iconBg}`}>
                    <i className={`bi ${activity.icon} ${activity.iconColor}`}></i>
                </div>
                <div>
                    <p className="fw-bold mb-0 small">{activity.title}</p>
                    <p className="text-muted mb-0 small">{activity.subtext}</p>
                </div>
            </div>
            <div className="col-md-3 text-muted small">{activity.course}</div>
            <div className="col-md-2 text-muted small">{activity.date}</div>
            <div className="col-md-2 d-flex justify-content-between align-items-center">
                <span className={`badge rounded-pill ${activity.status === 'Published' ? 'bg-primary-subtle text-primary-emphasis' : 'bg-success-subtle text-success-emphasis'}`}>
                    {activity.status}
                </span>
                <a href="#" className="text-decoration-none fw-semibold small">View</a>
            </div>
        </div>
    </div>
);

const FacultyCourseSetup = () => {
  const [theme, setTheme] = useState('light');

  // Data for the components
  const courses = [
    { id: 1, title: 'Introduction to Computer Science', code: 'CS101', subject: 'Computer Science', status: 'ACTIVE', schedule: 'Mon, Wed, Fri • 10:00 AM - 11:30 AM • Room 101 • 42 Students Enrolled', materials: { files: '12 files' }, assignments: { active: '4 active' } },
    { id: 2, title: 'Advanced Mathematics', code: 'MATH302', subject: 'Mathematics', status: 'ACTIVE', schedule: 'Tue, Thu • 11:30 AM - 1:00 PM • Room 203 • 28 Students Enrolled', materials: { files: '8 files' }, assignments: { active: '3 active' } },
    { id: 3, title: 'Physics Laboratory', code: 'PHY201L', subject: 'Physics', status: 'ACTIVE', schedule: 'Wed • 2:00 PM - 5:00 PM • Lab Building B • 18 Students Enrolled', materials: { files: '6 files' }, assignments: { active: '2 active', type: 'Lab Reports' } },
    { id: 4, title: 'English Literature', code: 'ENGL210', subject: 'English', status: 'ACTIVE', schedule: 'Tue, Thu • 3:30 PM - 5:00 PM • Room 305 • 35 Students Enrolled', materials: { files: '10 files' }, assignments: { active: '1 active' } },
  ];

  const recentActivities = [
    { id: 1, icon: 'bi-file-earmark-plus', iconBg: 'bg-primary-subtle', iconColor: 'text-primary', title: 'New Assignment Created', subtext: 'Mid-term Project', course: 'Introduction to Computer Science', date: 'June 15, 2025', status: 'Published' },
    { id: 2, icon: 'bi-check-circle', iconBg: 'bg-success-subtle', iconColor: 'text-success', title: 'Graded Assignments', subtext: 'Quiz 2 Results', course: 'Advanced Mathematics', date: 'June 14, 2025', status: 'Completed' },
    { id: 3, icon: 'bi-file-arrow-up', iconBg: 'bg-warning-subtle', iconColor: 'text-warning', title: 'New Material Uploaded', subtext: 'Chapter 5 Slides', course: 'Physics Laboratory', date: 'June 13, 2025', status: 'Published' },
  ];
  
  const navItems = ['Home', 'A+ Exam', 'Course Setup', 'Grading', 'Assignment', 'Duties', 'Mentor'];
  const navIcons = ['house-door-fill', 'patch-check-fill', 'book', 'graph-up', 'file-earmark-text', 'briefcase', 'people'];

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-body-tertiary">
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
                        id="theme-switch-course-setup"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                    <label className="form-check-label" htmlFor="theme-switch-course-setup"></label>
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
                        { name: 'Exam', to: '/#' },
                        { name: 'Course Setup', to: '/faculty-course-setup' },
                        { name: 'Grading', to: '/' },
                        { name: 'Assignment', to: '/' },
                        { name: 'Duties', to: '/' },
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

        {/* Courses Grid */}
        <div className="row mb-4">
            {courses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>

        {/* Recent Activity Section */}
        <div className="card shadow-sm">
            <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
                <div className="d-flex align-items-center">
                    <select className="form-select form-select-sm me-2 fw-semibold">
                        <option>Spring Semester 2025</option>
                    </select>
                    <select className="form-select form-select-sm fw-semibold">
                        <option>All Departments</option>
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <h5 className="mb-0 me-3">Recent Activity</h5>
                    <div className="btn-group btn-group-sm me-2">
                        <button type="button" className="btn btn-primary"><i className="bi bi-list-ul"></i></button>
                        <button type="button" className="btn btn-outline-secondary"><i className="bi bi-grid"></i></button>
                    </div>
                    <button className="btn btn-primary btn-sm d-flex align-items-center">
                        <i className="bi bi-plus-lg me-1"></i> Add New Course
                    </button>
                    <Link to="#" className="ms-3 small fw-semibold text-decoration-none">View All</Link>
                </div>
            </div>
            
            <div className="list-group list-group-flush">
                <div className="list-group-item bg-body-tertiary">
                     <div className="row small fw-bold text-muted text-uppercase">
                        <div className="col-md-5">Activity</div>
                        <div className="col-md-3">Course</div>
                        <div className="col-md-2">Date</div>
                        <div className="col-md-2 text-center">Status & Action</div>
                    </div>
                </div>
                {recentActivities.map(activity => <ActivityRow key={activity.id} activity={activity} />)}
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

export default FacultyCourseSetup;
