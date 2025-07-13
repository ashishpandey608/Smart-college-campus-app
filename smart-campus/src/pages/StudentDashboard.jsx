import React from 'react';
import './StudentDashboard.css';
import { Link } from 'react-router-dom';
import { Bar, Line } from 'react-chartjs-2';
import Layout from '../components/Layout'; // adjust path if needed
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler // ✅ This line is required
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler // ✅ This registers the fill behavior
);

ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

const StudentDashboard = () => {
  const attendanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: 'Present',
        data: [85, 87, 83, 88, 90, 86, 84, 85],
        backgroundColor: '#2563EB'
      },
      {
        label: 'Late',
        data: [10, 8, 12, 9, 7, 10, 11, 10],
        backgroundColor: '#FACC15'
      },
      {
        label: 'Absent',
        data: [5, 5, 5, 3, 3, 4, 5, 5],
        backgroundColor: '#EF4444'
      }
    ]
  };

  const lineChartData = {
    labels: ['Math', 'Physics', 'English', 'CS', 'History'],
    datasets: [
      {
        label: 'Current Semester',
        data: [88, 83, 92, 91, 86],
        borderColor: '#2563EB',
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        fill: true
      },
      {
        label: 'Previous Semester',
        data: [78, 80, 85, 86, 83],
        borderColor: '#94A3B8',
        backgroundColor: 'rgba(148, 163, 184, 0.2)',
        fill: true
      }
    ]
  };

  return (
    <Layout>
    
    <div className="container-fluid mainBody p-4 min-vh-100">
      {/* Header Section */}
      <div className="d-flex header justify-content-between align-items-center mb-3">
        <div>
          <h2>Welcome back, <span>Dev!</span></h2>
          <small>
            Wednesday, June 11, 2025 | Spring Semester 2025<br />
            Student ID: ST2023456
          </small>
        </div>
        <div className="text-end classSchedule">
          <span className="badge">Next Class:<br/><br/>Advanced Mathematics in 45 minutes</span>
        </div>
      </div>

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



      <div className="row">
        {/* Attendance Section */}
        <div className="col-lg-8  mb-4 ">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between align-items-center">
                Attendance Summary <a href="#">View Details</a>
              </h5>
              <div className="d-flex justify-content-around my-3">
                <div className="text-center present">
                  <h1>85%</h1>
                  <span className="badge bg-primary"><h3>Present</h3></span>
                </div>
                <div className="text-center late">
                  <h1>10%</h1>
                  <span className="badge bg-warning text-dark"><h3> Late </h3></span>
                </div>
                <div className="text-center absent">
                  <h1>5%</h1>
                  <span className="badge bg-danger"><h3>Absent</h3></span>
                </div>
              </div>
              <Bar data={attendanceData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        {/* Recent Results */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                Recent Results <a href="#">All Results</a>
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Computer Science</span> <span className="text-success">92/100</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Advanced Mathematics</span> <span className="text-primary">85/100</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Physics</span> <span className="text-info">83/100</span>
                </li>
              </ul>
              <div className="mt-3">
                <Line data={lineChartData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule + Notifications */}
      <div className="row">
        {/* Schedule */}
        <div className="col-lg-8 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                Today's Schedule <a href="#">Full Schedule</a>
              </h5>
              {[
                { subject: "Introduction to Computer Science", time: "09:00AM-10:30AM", status: "Completed", room: "Room 101" },
                { subject: "Advanced Mathematics", time: "11:00AM-12:30PM", status: "Upcoming", room: "Room 203" },
                { subject: "Physics Laboratory", time: "02:00PM-04:00PM", status: "Upcoming", room: "Lab Building B" },
                { subject: "English Literature", time: "04:30PM-06:00PM", status: "Upcoming", room: "Room 305" }
              ].map((item, idx) => (
                <div key={idx} className="border-bottom py-2 d-flex justify-content-between">
                  <div>
                    <h6>{item.subject}</h6>
                    <small className="text-muted">{item.time} · {item.room}</small>
                  </div>
                  <span className={`badge ${item.status === 'Completed' ? 'bg-success' : 'bg-secondary'}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title d-flex justify-content-between">
                Announcements <a href="#">View All</a>
              </h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Campus Closure Notice</strong> <span className="badge bg-danger ms-1">Important</span>
                  <p className="small text-muted">Due to maintenance on June 14, all classes will be held online.</p>
                </li>
                <li>
                  <strong>Summer Registration Open</strong>
                  <p className="small text-muted">Register for summer courses before June 20 to secure your spot.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* your student dashboard content */}
  </Layout>
  );
};

export default StudentDashboard;
