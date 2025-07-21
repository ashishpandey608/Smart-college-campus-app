import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pie, Line } from 'react-chartjs-2';
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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// --- Reusable Helper Components for Result Page ---

// Overall Performance Card
const OverallPerformanceCard = ({ performance, isaResults, esaResults }) => (
    <div className="card shadow-sm">
        <div className="card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h5 className="card-title fw-bold mb-1">Overall Performance</h5>
                    <p className="text-muted small">Summary of your performance across assessments.</p>
                </div>
                <button className="btn btn-primary">Analyze Performance</button>
            </div>
            
            <div className="row text-center my-4">
                <div className="col-md-4">
                    <div className="p-3 bg-light-subtle rounded-3">
                        <p className="small text-muted mb-1">Average Score <i className="bi bi-info-circle text-primary"></i></p>
                        <h4 className="fw-bold text-primary mb-0">{performance.averageScore}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="p-3 bg-light-subtle rounded-3">
                        <p className="small text-muted mb-1">Passed Subjects <span className="text-success small">(+1)</span></p>
                        <h4 className="fw-bold text-success mb-0">{performance.passedSubjects}</h4>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="p-3 bg-light-subtle rounded-3">
                        <p className="small text-muted mb-1">Failed Subjects <i className="bi bi-exclamation-circle text-danger"></i></p>
                        <h4 className="fw-bold text-danger mb-0">{performance.failedSubjects}</h4>
                    </div>
                </div>
            </div>

            {/* Internal Summative Assessment (ISA) */}
            <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h6 className="fw-bold mb-0">Internal Summative Assessment (ISA)</h6>
                        <p className="text-muted small mb-0">View your ISA results for the semester.</p>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary btn-sm me-2">Re-evaluate</button>
                        <button className="btn btn-primary btn-sm">View Detail</button>
                    </div>
                </div>
                <div className="row g-3">
                    {isaResults.map(subject => <SubjectResultCard key={subject.name} {...subject} />)}
                </div>
            </div>

            {/* External Summative Assessment (ESA) */}
            <div>
                 <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <h6 className="fw-bold mb-0">External Summative Assessment (ESA)</h6>
                        <p className="text-muted small mb-0">View your ESA results for the end semester exam.</p>
                    </div>
                    <div>
                        <button className="btn btn-outline-secondary btn-sm me-2">Request Review</button>
                        <button className="btn btn-primary btn-sm">View Detail</button>
                    </div>
                </div>
                <div className="row g-3">
                    {esaResults.map(subject => <SubjectResultCard key={subject.name} {...subject} />)}
                </div>
            </div>
        </div>
    </div>
);

// Subject Result Card
const SubjectResultCard = ({ name, score, status, img }) => (
    <div className="col-md-6">
        <div className="card bg-light-subtle">
            <div className="card-body d-flex align-items-center p-3">
                <img src={img} alt={name} className="rounded me-3" width="60" height="60" />
                <div>
                    <h6 className="fw-semibold small mb-1">{name}</h6>
                    <p className="mb-1 small">Final Score: <strong>{score}</strong></p>
                    <span className={`badge small ${status === 'Passed' || status === 'Excellent' ? 'bg-success-subtle text-success-emphasis' : 'bg-danger-subtle text-danger-emphasis'}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

// Assignment Results Chart Card
const AssignmentChartCard = () => {
    const pieData = {
        labels: ['Correct', 'Wrong', 'Copy', 'Fail', 'Miss'],
        datasets: [{
            data: [40, 20, 15, 10, 15],
            backgroundColor: ['#198754', '#dc3545', '#ffc107', '#6f42c1', '#6c757d'],
            borderWidth: 0,
        }]
    };
    const pieOptions = { responsive: true, plugins: { legend: { position: 'right' } } };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3">Assignment Results</h5>
                <p className="small text-muted">View your performance in the assignment.</p>
                <Pie data={pieData} options={pieOptions} />
                <div className="d-grid gap-2 mt-4">
                    <button className="btn btn-primary">Print Assignment Results</button>
                    <button className="btn btn-outline-secondary">Download Assignment Results</button>
                </div>
            </div>
        </div>
    );
};

// SGPA/CGPA Chart Card
const GpaChartCard = () => {
    const lineData = {
        labels: ['Sem1', 'Sem2', 'Sem3', 'Sem4'],
        datasets: [{
            label: 'CGPA',
            data: [5.8, 6.3, 7.2, 8.0],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.1)',
            fill: true,
            tension: 0.4,
        }]
    };
    const lineOptions = { responsive: true, plugins: { legend: { display: false } } };

    return (
        <div className="card shadow-sm">
            <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-3">View SGPA/CGPA</h5>
                <Line data={lineData} options={lineOptions} />
                 <div className="d-grid gap-2 mt-4">
                    <button className="btn btn-primary">Print SGPA/CGPA</button>
                    <button className="btn btn-outline-secondary">Download SGPA/CGPA</button>
                </div>
            </div>
        </div>
    );
};


// --- Main Result Component ---

const Result = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Static data for the page
  const performance = { averageScore: '80.25%', passedSubjects: 6, failedSubjects: 2 };
  const isaResults = [
    { name: 'Mathematics', score: '85%', status: 'Passed', img: 'https://placehold.co/60x60/E2F0FF/000?text=MATH' },
    { name: 'Physics', score: '78%', status: 'Passed', img: 'https://placehold.co/60x60/E2F0FF/000?text=PHY' },
    { name: 'Chemistry', score: '90%', status: 'Excellent', img: 'https://placehold.co/60x60/E2F0FF/000?text=CHEM' },
    { name: 'Biology', score: '82%', status: 'Passed', img: 'https://placehold.co/60x60/E2F0FF/000?text=BIO' },
  ];
  const esaResults = [
    { name: 'Mathematics', score: '75%', status: 'Passed', img: 'https://placehold.co/60x60/FFF4E2/000?text=MATH' },
    { name: 'Physics', score: '68%', status: 'Failed', img: 'https://placehold.co/60x60/FFF4E2/000?text=PHY' },
    { name: 'Chemistry', score: '88%', status: 'Passed', img: 'https://placehold.co/60x60/FFF4E2/000?text=CHEM' },
    { name: 'Biology', score: '80%', status: 'Passed', img: 'https://placehold.co/60x60/FFF4E2/000?text=BIO' },
  ];

  const navItems = ['Home', 'Schedule', 'Course Setup', 'Results', 'Fees', 'Other', 'Mentor'];
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
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-result" onChange={toggleTheme} checked={theme === 'dark'}/>
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
                <OverallPerformanceCard performance={performance} isaResults={isaResults} esaResults={esaResults} />
            </div>
            <div className="col-lg-4">
                <AssignmentChartCard />
                <GpaChartCard />
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

export default Result;
