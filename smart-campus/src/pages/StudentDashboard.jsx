import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import logo from '../assets/campuscore.jpeg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// --- Reusable Helper Components for Student Dashboard ---

// Attendance Summary Card
const AttendanceSummaryCard = () => {
    const attendanceData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
            { label: 'Present', data: [85, 88, 90, 85, 87, 92, 89], backgroundColor: '#0d6efd', borderRadius: 5 },
            { label: 'Late', data: [10, 8, 5, 7, 9, 5, 6], backgroundColor: '#ffc107', borderRadius: 5 },
            { label: 'Absent', data: [5, 4, 5, 8, 4, 3, 5], backgroundColor: '#dc3545', borderRadius: 5 },
        ],
    };
    const attendanceOptions = {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 20 } } },
        scales: { x: { stacked: true }, y: { stacked: true } },
    };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title fw-bold mb-0">Attendance Summary</h5>
                    <Link to="#" className="text-decoration-none small fw-semibold">View Details</Link>
                </div>
                <div className="row text-center mb-3">
                    <div className="col-4"><div className="p-3 bg-primary-subtle rounded-3"><h4 className="fw-bold text-primary mb-1">85%</h4><p className="small text-muted mb-0">Present</p></div></div>
                    <div className="col-4"><div className="p-3 bg-warning-subtle rounded-3"><h4 className="fw-bold text-warning mb-1">10%</h4><p className="small text-muted mb-0">Late</p></div></div>
                    <div className="col-4"><div className="p-3 bg-danger-subtle rounded-3"><h4 className="fw-bold text-danger mb-1">5%</h4><p className="small text-muted mb-0">Absent</p></div></div>
                </div>
                <Bar options={attendanceOptions} data={attendanceData} />
            </div>
        </div>
    );
};

// Recent Results Card
const RecentResultsCard = () => {
    const performanceData = {
        labels: ['CS', 'Math', 'Physics', 'English', 'History'],
        datasets: [{
            label: 'My Scores',
            data: [92, 85, 88, 78, 95],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
            fill: true,
        }],
    };
    const performanceOptions = { responsive: true, plugins: { legend: { display: false } } };

    return (
        <div className="card shadow-sm h-100">
            <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title fw-bold mb-0">Recent Results</h5>
                    <Link to="#" className="text-decoration-none small fw-semibold">All Results</Link>
                </div>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">Computer Science <span className="fw-bold text-success">A</span><span className="text-muted small">92/100</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">Advanced Mathematics <span className="fw-bold text-primary">B+</span><span className="text-muted small">85/100</span></li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">Physics <span className="fw-bold text-primary">B-</span><span className="text-muted small">88/100</span></li>
                </ul>
                <Line options={performanceOptions} data={performanceData} />
            </div>
        </div>
    );
};

// Today's Schedule Card
const TodaysScheduleCard = ({ schedule }) => (
    <div className="card shadow-sm h-100">
        <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title fw-bold mb-0">Today's Schedule</h5>
                <Link to="#" className="text-decoration-none small fw-semibold">Full Schedule</Link>
            </div>
            <div className="list-group list-group-flush">
                {schedule.map(item => (
                    <div key={item.title} className="list-group-item d-flex align-items-center px-0">
                        <div className="p-2 bg-primary-subtle text-primary rounded-3 me-3"><i className={`${item.icon} fs-5`}></i></div>
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

// Announcements Card
const AnnouncementsCard = ({ announcements }) => (
    <div className="card shadow-sm h-100">
        <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title fw-bold mb-0">Announcements</h5>
                <Link to="#" className="text-decoration-none small fw-semibold">View All</Link>
            </div>
            {announcements.map((item, index) => (
                <div key={index} className={index > 0 ? 'mt-3 pt-3 border-top' : ''}>
                    <p className="fw-semibold small d-flex justify-content-between">{item.title} {item.important && <span className="badge bg-danger-subtle text-danger-emphasis rounded-pill">Important</span>}</p>
                    <p className="small text-muted">{item.desc}</p>
                    <Link to="#" className="text-decoration-none small fw-semibold">Read More</Link>
                </div>
            ))}
        </div>
    </div>
);


// --- Main StudentDashboard Component ---

const StudentDashboard = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Static data for the page
  const schedule = [
    { time: '09:00AM - 10:30AM', room: 'Room 101', title: 'Introduction to Computer Science', status: 'Completed', icon: 'bi-book-fill' },
    { time: '11:00AM - 12:30PM', room: 'Room 203', title: 'Advanced Mathematics', status: 'Upcoming', icon: 'bi-calculator-fill' },
    { time: '02:00PM - 04:00PM', room: 'Lab Building B', title: 'Physics Laboratory', status: 'Upcoming', icon: 'bi-eyedropper' },
    { time: '04:30PM - 06:00PM', room: 'Room 305', title: 'English Literature', status: 'Upcoming', icon: 'bi-pen-fill' },
  ];

  const announcements = [
    { title: 'Campus Closure Notice', desc: 'Administration • June 12, 2025. Due to scheduled maintenance, the campus will be closed on Saturday, June 14. All weekend classes will be conducted online.', important: true },
    { title: 'Summer Registration Open', desc: "Registrar's Office • June 8, 2025. Registration for summer courses is now open. Please complete your registration by June 20 to secure your spot." },
    { title: 'Library Extended Hours', desc: "Library Services • June 5, 2025. The main library will extend its operating hours during finals week. New hours: 7 AM - 2 AM from June 20-30." },
  ];

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
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-dashboard" onChange={toggleTheme} checked={theme === 'dark'}/>
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
        {/* Nav Buttons */}
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

        {/* Main Grid for Summaries */}
        <div className="row g-4">
            <div className="col-lg-8">
                <div className="row g-4">
                    <div className="col-12"><AttendanceSummaryCard /></div>
                    <div className="col-12"><TodaysScheduleCard schedule={schedule} /></div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-flex flex-column h-100">
                    <div className="mb-4 flex-grow-1"><RecentResultsCard /></div>
                    <div className="flex-grow-1"><AnnouncementsCard announcements={announcements} /></div>
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

export default StudentDashboard;

 /* {/* Nav Buttons }
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

</div>*/