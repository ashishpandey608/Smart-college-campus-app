import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Result = () => {
  const subjects = [
    { name: 'Computer Science', score: '92/100', grade: 'A' },
    { name: 'Advanced Mathematics', score: '85/100', grade: 'B+' },
    { name: 'Physics', score: '83/100', grade: 'B' },
  ];

  return (
    <Layout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Results</h3>
        <Link to="/student" className="btn btn-outline-primary">← Back to Dashboard</Link>
      </div>

      <div className="card shadow-sm">
        <table className="table table-bordered mb-0">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.score}</td>
                <td>{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Result;
