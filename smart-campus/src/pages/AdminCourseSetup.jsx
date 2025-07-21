import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';
// --- Reusable Helper Components for Admin Course Setup Page ---

// Course Management Stats Card
const CourseManagementCard = () => {
    const stats = [
        { title: 'Total Courses', value: 48, icon: 'bi-book' },
        { title: 'Departments', value: 12, icon: 'bi-building' },
        { title: 'Active Faculty', value: 36, icon: 'bi-person-check-fill' },
        { title: 'Total Students', value: 1248, icon: 'bi-people-fill' },
    ];
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-body p-3 d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title fw-bold mb-1">Course Management</h5>
                    <p className="text-muted small mb-0">Manage all courses for Summer Semester 2025</p>
                </div>
                <button className="btn btn-primary"><i className="bi bi-plus-lg me-2"></i>Add New Course</button>
            </div>
            <div className="card-body p-4">
                <div className="row">
                    {stats.map(stat => (
                        <div className="col-md-3" key={stat.title}>
                            <div className="d-flex align-items-center bg-light-subtle p-3 rounded-3">
                                <i className={`bi ${stat.icon} fs-3 text-primary me-3`}></i>
                                <div>
                                    <p className="small text-muted mb-0">{stat.title}</p>
                                    <h5 className="fw-bold mb-0">{stat.value}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Course List Item
const CourseListItem = ({ course }) => {
    const getStatusBadge = (status) => {
        switch (status) {
            case 'Active': return 'bg-success-subtle text-success-emphasis';
            case 'Pending': return 'bg-warning-subtle text-warning-emphasis';
            case 'Inactive': return 'bg-danger-subtle text-danger-emphasis';
            default: return 'bg-secondary-subtle text-secondary-emphasis';
        }
    };

    return (
        <div className="col-lg-6 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body p-3">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <p className="fw-bold mb-1">{course.title} <span className="text-muted small">{course.code}</span></p>
                            <span className={`badge rounded-pill ${getStatusBadge(course.status)}`}>{course.status}</span>
                        </div>
                        <button className="btn btn-sm btn-light"><i className="bi bi-three-dots"></i></button>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-4"><p className="small text-muted mb-1">Department</p><p className="small fw-semibold mb-0">{course.department}</p></div>
                        <div className="col-2"><p className="small text-muted mb-1">Credits</p><p className="small fw-semibold mb-0">{course.credits}</p></div>
                        <div className="col-2"><p className="small text-muted mb-1">Students</p><p className="small fw-semibold mb-0">{course.students}</p></div>
                        <div className="col-4"><p className="small text-muted mb-1">Professor</p>
                            {course.professor ? (
                                <div className="d-flex align-items-center">
                                    <img src={course.profImg} alt={course.professor} className="rounded-circle me-2" width="24" height="24"/>
                                    <p className="small fw-semibold mb-0">{course.professor}</p>
                                </div>
                            ) : (
                                <p className="small text-danger fst-italic mb-0">{course.profNote}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card-footer bg-body-tertiary d-flex justify-content-end gap-2">
                    <button className="btn btn-sm btn-outline-secondary"><i className="bi bi-pencil-square me-1"></i> Edit</button>
                    <button className={`btn btn-sm ${course.status === 'Pending' ? 'btn-primary' : 'btn-outline-secondary'}`}><i className="bi bi-person-plus-fill me-1"></i> Assign</button>
                </div>
            </div>
        </div>
    );
};

// --- Main AdminCourseSetup Component ---
const AdminCourseSetup = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const courses = [
        { title: 'Introduction to Computer Science', code: 'CS101', status: 'Active', department: 'Computer Science', credits: 4, students: 42, professor: 'Dr. Robert Chen', profImg: 'https://placehold.co/24x24/EFEFEF/000?text=RC' },
        { title: 'Advanced Mathematics', code: 'MATH302', status: 'Active', department: 'Mathematics', credits: 3, students: 28, professor: 'Dr. Emily Wilson', profImg: 'https://placehold.co/24x24/EFEFEF/000?text=EW' },
        { title: 'Physics Laboratory', code: 'PHY201L', status: 'Active', department: 'Physics', credits: 2, students: 35, professor: 'Dr. Michael Thompson', profImg: 'https://placehold.co/24x24/EFEFEF/000?text=MT' },
        { title: 'English Literature', code: 'ENGL101', status: 'Active', department: 'Literature', credits: 3, students: 31, professor: 'Dr. Sarah Johnson', profImg: 'https://placehold.co/24x24/EFEFEF/000?text=SJ' },
        { title: 'Business Economics', code: 'BUS201', status: 'Pending', department: 'Business', credits: 3, students: 0, professor: null, profNote: 'Not Assigned' },
        { title: 'Database Systems', code: 'CS305', status: 'Inactive', department: 'Computer Science', credits: 4, students: 0, professor: 'Dr. James Anderson', profImg: 'https://placehold.co/24x24/EFEFEF/000?text=JA' },
    ];

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
                            <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-admin-cs" onChange={toggleTheme} checked={theme === 'dark'} />
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
                

                {/* Main Content */}
                <CourseManagementCard />

                <div className="card shadow-sm">
                    <div className="card-header bg-body p-3 d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2">
                            <select className="form-select form-select-sm"><option>All Departments</option></select>
                            <select className="form-select form-select-sm"><option>Summer 2025</option></select>
                            <select className="form-select form-select-sm"><option>All Status</option></select>
                        </div>
                        <div className="input-group input-group-sm w-25">
                            <input type="text" className="form-control" placeholder="Search..."/>
                            <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <div className="row">
                            {courses.map(course => <CourseListItem key={course.code} course={course} />)}
                        </div>
                    </div>
                    <div className="card-footer bg-body d-flex justify-content-between align-items-center">
                        <p className="small text-muted mb-0">Showing 6 of 48 courses</p>
                        <nav>
                            <ul className="pagination pagination-sm mb-0">
                                <li className="page-item disabled"><a className="page-link" href="#">&laquo;</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                            </ul>
                        </nav>
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

export default AdminCourseSetup;
