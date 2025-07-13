import React, { useState } from 'react';
import Layout from '../components/Layout';

const Others = () => {
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const feedbacks = [
    { status: 'Pending', date: 'June 20, 2025', title: 'Course Content', rating: 3 },
    { status: 'Reviewed', date: 'June 15, 2025', title: 'Faculty', rating: 4 },
    { status: 'Resolved', date: 'June 5, 2025', title: 'System Issue', rating: 2 },
    { status: 'Resolved', date: 'May 28, 2025', title: 'Campus Facilities', rating: 3 },
  ];

  const getBadge = (status) => {
    switch (status) {
      case 'Pending': return 'warning';
      case 'Reviewed': return 'info';
      case 'Resolved': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <Layout>
      <div className="container">

        {/* 🔷 Top Banner */}
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

        {/* 🔷 Nav Bar Row */}
        <div className="bg-white d-flex justify-content-around py-2 rounded-3 mb-4 shadow-sm">
          {[
            { label: 'Home', icon: 'house', path: '/student' },
            { label: 'Schedule', icon: 'calendar-event', path: '/schedule' },
            { label: 'Course Setup', icon: 'book', path: '#' },
            { label: 'Result', icon: 'graph-up', path: '/Result' },
            { label: 'Fees', icon: 'receipt', path: '/Fees' },
            { label: 'Other', icon: 'chat-dots-fill', path: '/Others' },
            { label: 'Mentor', icon: 'person', path: 'Mentor' }
          ].map((item, idx) => (
            <a key={idx} href={item.path} className="text-dark text-decoration-none text-center small">
              <div><i className={`bi bi-${item.icon} fs-5`}></i></div>
              {item.label}
            </a>
          ))}
        </div>

        {/* 🔹 Feedback Management */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Feedback Management</h5>
              <p className="text-muted small">View and manage your submitted feedback</p>
            </div>
            <button className="btn btn-outline-secondary">← Back to Dashboard</button>
          </div>

          {/* Filter Controls */}
          <div className="row g-3 mb-3">
            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>All Categories</option>
                <option>Faculty</option>
                <option>System</option>
                <option>Facility</option>
              </select>
            </div>
            <div className="col-md-3 d-flex gap-2">
              <select className="form-select">
                <option>All</option>
                <option>Pending</option>
                <option>Resolved</option>
              </select>
              <button className="btn btn-primary">Apply Filters</button>
            </div>
          </div>
        </div>

        {/* 🔹 Feedback History */}
        <div className="card p-3 shadow-sm mb-4">
          <h6 className="mb-3">Feedback History</h6>
          {feedbacks.map((item, i) => (
            <div className="border-bottom py-2" key={i}>
              <span className={`badge bg-${getBadge(item.status)} me-2`}>{item.status}</span>
              <small className="text-muted">Submitted on {item.date}</small>
              <div className="fw-bold">{item.title}</div>
              <div className="text-warning">
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
              </div>
            </div>
          ))}
          {/* Pagination UI */}
          <div className="d-flex justify-content-end mt-3">
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className="page-item"><a className="page-link">1</a></li>
                <li className="page-item active"><a className="page-link">2</a></li>
                <li className="page-item"><a className="page-link">3</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* 🔹 Submit New Feedback */}
        <div className="card p-3 shadow-sm mb-5">
          <h6>Submit New Feedback</h6>
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label">Feedback Category</label>
              <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select category</option>
                <option value="Course">Course Content</option>
                <option value="Faculty">Faculty</option>
                <option value="System">System</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Rating</label>
              <div className="text-warning fs-4">
                {[1, 2, 3, 4, 5].map(n => (
                  <i key={n} className={`bi ${rating >= n ? 'bi-star-fill' : 'bi-star'}`}
                     style={{ cursor: 'pointer' }} onClick={() => setRating(n)}></i>
                ))}
              </div>
            </div>
          </div>
          <label className="form-label">Comments</label>
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Please share your feedback here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="btn btn-primary">Submit Feedback</button>
        </div>

        {/* Footer */}
        <div className="text-center text-muted mt-4 small">
          <i className="bi bi-x-diamond-fill"></i> Designed and developed by ZoroTeam © 2025 Zoro Innovations
        </div>
      </div>
    </Layout>
  );
};

export default Others;
