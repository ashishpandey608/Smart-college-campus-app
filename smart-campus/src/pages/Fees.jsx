import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Fees = () => {
  return (
     <Layout>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Fee Details</h3>
        <Link to="/student" className="btn btn-outline-primary">← Back to Dashboard</Link>
      </div>

      <div className="card p-4 shadow-sm">
        <p><strong>Total Fee:</strong> ₹50,000</p>
        <p><strong>Paid:</strong> ₹30,000</p>
        <p><strong>Due:</strong> ₹20,000</p>
        <button className="btn btn-success">Pay Remaining</button>
      </div>
    </div>
  </Layout>
  );
};

export default Fees;
