import React from 'react';
import Layout from '../components/Layout';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Result = () => {
  const pieData = {
    labels: ['Correct', 'Wrong', 'Copy', 'Fail', 'Miss'],
    datasets: [{
      data: [40, 20, 15, 10, 15],
      backgroundColor: ['#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#94a3b8']
    }]
  };

  const lineData = {
    labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
    datasets: [{
      label: 'CGPA',
      data: [5.8, 6.3, 7.2, 8.0],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  const isaSubjects = [
    { name: 'Mathematics', score: '85%', status: 'Passed', img: 'math.jpg' },
    { name: 'Physics', score: '78%', status: 'Passed', img: 'physics.jpg' },
    { name: 'Chemistry', score: '90%', status: 'Excellent', img: 'chemistry.jpg' },
    { name: 'Biology', score: '82%', status: 'Passed', img: 'bio.jpg' },
  ];

  const esaSubjects = [
    { name: 'Mathematics', score: '75%', status: 'Passed', img: 'math.jpg' },
    { name: 'Physics', score: '68%', status: 'Failed', img: 'physics.jpg' },
    { name: 'Chemistry', score: '88%', status: 'Passed', img: 'chemistry.jpg' },
  ];

  return (
    <Layout>
      <div className="container">

        {/* 🔹 Top Banner */}
        <div className="bg-primary text-white p-4 rounded-3 d-flex justify-content-between align-items-center mb-4" style={{ background: 'linear-gradient(to right, #6366F1, #2563EB)' }}>
          <div>
            <h5 className="fw-bold">Welcome back, Dev!</h5>
            <p className="mb-0 small">
              Wednesday, June 11, 2025 | Spring Semester 2025<br />
              Student ID: ST2023456
            </p>
          </div>
          <div className="bg-white text-dark p-3 rounded shadow-sm text-end" style={{ minWidth: '220px' }}>
            <strong className="d-block">Next Class:</strong>
            <span className="text-primary">Advanced Mathematics in 45 minutes</span>
          </div>
        </div>

        {/* 🔹 Icon-Based Navbar */}
        <div className="bg-white d-flex justify-content-around py-2 rounded-3 mb-4 shadow-sm">
          {[
            { label: 'Home', icon: 'house', path: '/student' },
            { label: 'Schedule', icon: 'calendar', path: '/Schedule' },
            { label: 'Course Setup', icon: 'book', path: '#' },
            { label: 'Results', icon: 'graph-up', path: '/result' },
            { label: 'Fees', icon: 'receipt', path: '/fees' },
            { label: 'Other', icon: 'emoji-smile', path: '/Other' },
            { label: 'Mentor', icon: 'person', path: 'Mentor' }
          ].map((item, idx) => (
            <a key={idx} href={item.path} className="text-dark text-decoration-none text-center small">
              <div><i className={`bi bi-${item.icon} fs-5`}></i></div>
              {item.label}
            </a>
          ))}
        </div>

        <h3 className="mb-4">Overall Performance</h3>

        <div className="row mb-4">
          <div className="col-md-8">
            {/* 🔹 Summary Card */}
            <div className="card p-3 mb-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>Summary of your performance</h5>
                <button className="btn btn-primary">Analyze Performance</button>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <h6>Average Score</h6>
                  <p className="text-primary fs-4 fw-bold">80.25%</p>
                </div>
                <div className="col-md-4">
                  <h6>Passed Subjects</h6>
                  <p className="text-success fs-4 fw-bold">6</p>
                </div>
                <div className="col-md-4">
                  <h6>Failed Subjects</h6>
                  <p className="text-danger fs-4 fw-bold">2</p>
                </div>
              </div>
            </div>

            {/* 🔹 ISA Section */}
            <div className="card p-3 mb-4 shadow-sm">
              <div className="d-flex justify-content-between mb-3">
                <h5>Internal Summative Assessment (ISA)</h5>
                <div>
                  <button className="btn btn-outline-primary me-2">Re-evaluate</button>
                  <button className="btn btn-primary">View Detail</button>
                </div>
              </div>
              <div className="row">
                {isaSubjects.map((subject, i) => (
                  <div className="col-md-6 mb-3" key={i}>
                    <div className="card p-2 shadow-sm">
                      <div className="d-flex align-items-center">
                        <img src={`/images/${subject.img}`} alt={subject.name} className="rounded me-3" width="60" height="60" />
                        <div>
                          <h6>{subject.name}</h6>
                          <p className="mb-1">Final Score: <strong>{subject.score}</strong></p>
                          <span className={`badge ${subject.status === 'Passed' ? 'bg-success' : subject.status === 'Failed' ? 'bg-danger' : 'bg-info'}`}>
                            {subject.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 🔹 ESA Section */}
            <div className="card p-3 mb-4 shadow-sm">
              <div className="d-flex justify-content-between mb-3">
                <h5>External Summative Assessment (ESA)</h5>
                <div>
                  <button className="btn btn-outline-primary me-2">Request Review</button>
                  <button className="btn btn-primary">View Detail</button>
                </div>
              </div>
              <div className="row">
                {esaSubjects.map((subject, i) => (
                  <div className="col-md-6 mb-3" key={i}>
                    <div className="card p-2 shadow-sm">
                      <div className="d-flex align-items-center">
                        <img src={`/images/${subject.img}`} alt={subject.name} className="rounded me-3" width="60" height="60" />
                        <div>
                          <h6>{subject.name}</h6>
                          <p className="mb-1">Final Score: <strong>{subject.score}</strong></p>
                          <span className={`badge ${subject.status === 'Passed' ? 'bg-success' : 'bg-danger'}`}>
                            {subject.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔹 Right Sidebar Charts */}
          <div className="col-md-4">
            <div className="card p-3 mb-4 shadow-sm">
              <h6 className="text-center">Assignment Results</h6>
              <Pie data={pieData} />
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary">Print Assignment Results</button>
                <button className="btn btn-outline-secondary">Download Assignment Results</button>
              </div>
            </div>

            <div className="card p-3 shadow-sm">
              <h6 className="text-center">View SGPA/CGPA</h6>
              <Line data={lineData} />
              <button className="btn btn-primary w-100 mt-3">Print SGPA/CGPA</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result;
