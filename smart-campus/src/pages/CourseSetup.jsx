import React from 'react';
import Layout from '../components/Layout';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CourseSetup = () => {
  const attendanceData = {
    labels: ['Week 1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: 'Present',
        data: [90, 92, 85, 93, 88, 87, 89, 90],
        backgroundColor: '#2563eb',
      },
      {
        label: 'Late',
        data: [5, 3, 7, 4, 6, 5, 6, 5],
        backgroundColor: '#facc15',
      },
      {
        label: 'Absent',
        data: [5, 5, 8, 3, 6, 8, 5, 5],
        backgroundColor: '#ef4444',
      },
    ],
  };

  const attendanceOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
  };

  const courses = [
    {
      name: 'Advanced Mathematics',
      professor: 'Sarah Wilson',
      code: 'MATH1201',
    },
    {
      name: 'Introduction to Computer Science',
      professor: 'Michael Chen',
      code: 'CS101',
    },
    {
      name: 'Physics Laboratory',
      professor: 'David Thompson',
      code: 'PHYS2201',
    },
  ];

  return (
    <Layout>
      <div className="container">

        {/* 🔷 Top Banner */}
        <div className="bg-white p-4 rounded-3 d-flex justify-content-between align-items-center mb-4 shadow-sm">
          <div className="p-3 rounded text-white w-100" style={{ background: 'linear-gradient(to right, #6366F1, #6D28D9)' }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold mb-1">Welcome back, Dev!</h5>
                <p className="mb-0 small">
                  Wednesday, June 11, 2025 | Spring Semester 2025<br />
                  Student ID: ST2023456
                </p>
              </div>
              <div className="d-flex align-items-center gap-3 bg-white text-dark p-3 rounded shadow-sm" style={{ minWidth: '270px' }}>
                <i className="bi bi-calendar-event-fill fs-3 text-primary"></i>
                <div>
                  <small className="text-muted">Next Class</small><br />
                  <span className="fw-semibold text-primary">Advanced Mathematics in 45 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🧭 Navigation Bar */}
        <div className="bg-white rounded-pill d-flex justify-content-between align-items-center px-3 py-2 mb-4 shadow-sm">
          {[
            { icon: 'house', label: 'Home', path: '/student' },
            { icon: 'calendar2-week', label: 'Schedule', path: '/schedule' },
            { icon: 'book', label: 'Course Setup', path: '/course-setup' },
            { icon: 'bar-chart', label: 'Result', path: '/result' },
            { icon: 'receipt', label: 'Fees', path: '/fees' },
            { icon: 'three-dots', label: 'Other', path: '/others' },
            { icon: 'person-lines-fill', label: 'Mentor', path: '/mentor' },
          ].map((item, i) => (
            <a key={i} href={item.path} className="text-dark text-decoration-none text-center small px-3">
              <div className="d-flex flex-column align-items-center">
                <i className={`bi bi-${item.icon} fs-5`}></i>
                <strong style={{ fontSize: '0.9rem' }}>{item.label}</strong>
              </div>
            </a>
          ))}
        </div>

        {/* 📚 Enrolled Courses */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <h5>Enrolled Courses</h5>
          <button className="btn btn-primary btn-sm">+ Add Course</button>
        </div>

        {courses.map((course, i) => (
          <div className="card shadow-sm p-3 mb-3" key={i}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <h6 className="mb-0">{course.name}</h6>
                <small className="text-muted">Prof. {course.professor} | {course.code}</small>
              </div>
              <button className="btn btn-outline-primary btn-sm">View Materials</button>
            </div>
            <div className="row text-center mt-3">
              {['Syllabus', 'Resources', 'Assignments', 'Schedule'].map((tab, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <div className="bg-light rounded py-2">
                    <small className="fw-bold">{tab}</small><br />
                    <span className="text-muted small">{tab === 'Assignments' ? '2 pending, 3 completed' : tab === 'Resources' ? '12 files available' : 'Course outline and sessions'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 📊 Attendance + 📜 Results */}
        <div className="row g-3 my-4">
          <div className="col-md-8">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <h6>Attendance Summary</h6>
                <a href="#">View Details</a>
              </div>
              <div className="row text-center my-3">
                {[
                  { label: 'Present', percent: '85%', color: 'primary' },
                  { label: 'Late', percent: '10%', color: 'warning' },
                  { label: 'Absent', percent: '5%', color: 'danger' },
                ].map((item, i) => (
                  <div className="col" key={i}>
                    <div className={`bg-${item.color}-subtle rounded py-2`}>
                      <strong className="fs-5">{item.percent}</strong><br />
                      <span className={`badge bg-${item.color}`}>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Bar data={attendanceData} options={attendanceOptions} height={100} />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between">
                <h6>Recent Results</h6>
                <a href="#">All Results</a>
              </div>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item d-flex justify-content-between">
                  Computer Science <span className="text-success">92/100</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Advanced Mathematics <span className="text-primary">85/100</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  Physics <span className="text-info">83/100</span>
                </li>
              </ul>
              <canvas className="mt-3" height="100"></canvas> {/* optional mini chart */}
            </div>
          </div>
        </div>

        {/* 📅 Schedule + 📢 Announcements */}
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <h6>Today's Schedule</h6>
              <ul className="list-group list-group-flush">
                {[
                  { time: '09:00 AM - 10:30 AM', title: 'Introduction to Computer Science', room: 'Room 101', status: 'Completed' },
                  { time: '11:00 AM - 12:30 PM', title: 'Advanced Mathematics', room: 'Room 203', status: 'Upcoming' },
                  { time: '02:00 PM - 04:00 PM', title: 'Physics Lab', room: 'Lab 5', status: 'Upcoming' },
                  { time: '04:30 PM - 06:00 PM', title: 'English Literature', room: 'Room 305', status: 'Upcoming' },
                ].map((cls, i) => (
                  <li className="list-group-item" key={i}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{cls.title}</strong><br />
                        <small>{cls.time} | {cls.room}</small>
                      </div>
                      <span className={`badge bg-${cls.status === 'Completed' ? 'secondary' : 'primary'}`}>{cls.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3 shadow-sm">
              <h6 className="mb-3">Announcements</h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="badge bg-danger me-2">Important</span>
                  Campus closure on June 15 due to maintenance. Classes online.
                </li>
                <li className="mb-3">
                  <span className="badge bg-info me-2">Notice</span>
                  Summer registration open until June 20.
                </li>
                <li>
                  <span className="badge bg-success me-2">Library</span>
                  Extended hours: 7am - 10pm from June 21.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-muted small mt-4">
          <i className="bi bi-x-diamond-fill"></i> Designed and developed by ZoroTeam © 2025 Zoro Innovations
        </div>
      </div>
    </Layout>
  );
};

export default CourseSetup;
