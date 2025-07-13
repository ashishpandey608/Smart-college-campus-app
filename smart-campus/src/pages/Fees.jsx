import React from 'react';
import Layout from '../components/Layout';

const Fees = () => {
  return (
    <Layout>
      <div className="container">

        {/* 🔷 Updated Top Banner */}
        <div className="bg-white p-4 rounded-3 d-flex justify-content-between align-items-center mb-4 shadow-sm">
          <div className="p-3 rounded text-white" style={{ background: 'linear-gradient(to right, #6366F1, #6D28D9)', width: '100%' }}>
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

        {/* 🔷 Updated Navigation Bar */}
        <div className="bg-white rounded-pill d-flex justify-content-between align-items-center px-3 py-2 mb-4 shadow-sm" style={{ overflowX: 'auto' }}>
          {[
            { icon: 'house', label: 'Home', path: '/student' },
            { icon: 'calendar2-week', label: 'Schedule', path: '/Schedule' },
            { icon: 'book', label: 'Course Setup', path: '#' },
            { icon: 'graph-up', label: 'Result', path: '/result' },
            { icon: 'receipt', label: 'Fees', path: '/fees' },
            { icon: 'three-dots', label: 'Other', path: '/others' },
            { icon: 'person-lines-fill', label: 'Mentor', path: '/mentor' },
          ].map((nav, i) => (
            <a key={i} href={nav.path} className="text-dark text-decoration-none text-center small px-3">
              <div className="d-flex flex-column align-items-center">
                <i className={`bi bi-${nav.icon} fs-5`}></i>
                <strong style={{ fontSize: '0.9rem' }}>{nav.label}</strong>
              </div>
            </a>
          ))}
        </div>

        {/* 🔹 Main Grid */}
        <div className="row g-4">
          {/* 🔹 Left Column */}
          <div className="col-md-8">

            {/* Fees Overview */}
            <div className="card shadow-sm p-3 mb-4">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">Fees Overview</h5>
                <span className="text-muted">Spring Semester 2025</span>
              </div>
              <div className="row text-center mb-4">
                {[
                  { title: 'Total Fees', amount: '₹12,500', color: 'primary', icon: 'wallet' },
                  { title: 'Amount Paid', amount: '₹8,750', color: 'success', icon: 'check-circle' },
                  { title: 'Pending Balance', amount: '₹3,750', color: 'warning', icon: 'hourglass-split' },
                  { title: 'Last Payment', amount: 'May 15', color: 'purple', icon: 'calendar2-check' },
                ].map((item, i) => (
                  <div className="col-6 col-md-3 mb-2" key={i}>
                    <div className={`p-3 rounded bg-${item.color}-subtle`}>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <i className={`bi bi-${item.icon} text-${item.color}`}></i>
                        <small>{item.title}</small>
                      </div>
                      <strong className="fs-6 d-block mt-1">{item.amount}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment History Table */}
              <div className="table-responsive">
                <h6 className="mb-2">Payment History</h6>
                <table className="table table-bordered table-sm">
                  <thead className="table-light">
                    <tr>
                      <th>Date</th>
                      <th>Transaction ID</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Mode</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { date: 'May 15, 2025', id: 'FT6543281', desc: '3rd Fee Installment', amt: 3750, mode: 'Credit Card' },
                      { date: 'Apr 6, 2025', id: 'FT7634920', desc: '2nd Fee Installment', amt: 2500, mode: 'Bank' },
                      { date: 'Feb 2, 2025', id: 'FT3412890', desc: '1st Fee Installment', amt: 3250, mode: 'Credit Card' },
                      { date: 'Jan 21, 2025', id: 'TR9823674', desc: 'Registration Fee', amt: 500, mode: 'UPI' },
                    ].map((item, i) => (
                      <tr key={i}>
                        <td>{item.date}</td>
                        <td><a href="#">{item.id}</a></td>
                        <td>{item.desc}</td>
                        <td>₹{item.amt}</td>
                        <td>{item.mode}</td>
                        <td><span className="badge bg-success">Complete</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Upcoming Dues */}
            <div className="card shadow-sm p-3 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6>Upcoming Dues</h6>
                <a href="#" className="text-primary">View All</a>
              </div>
              {[
                { title: 'Tuition Fee (Final Installment)', due: 'July 21, 2025', amount: '₹3,750', highlight: true },
                { title: 'Library Fee', due: 'Aug 8, 2025', amount: '₹120' },
                { title: 'Computer Lab Access', due: 'Aug 22, 2025', amount: '₹85' }
              ].map((item, i) => (
                <div key={i} className={`border rounded p-3 mb-2 ${item.highlight ? 'bg-warning bg-opacity-25' : 'bg-light'}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-1">{item.title}</h6>
                      <small className="text-muted">Due by {item.due}</small>
                    </div>
                    <div>
                      <strong>₹{item.amount}</strong><br />
                      <button className="btn btn-sm btn-primary mt-1">{item.highlight ? 'Pay Now' : 'Pay Later'}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Right Column */}
          <div className="col-md-4">

            {/* Quick Pay */}
            <div className="card shadow-sm p-3 mb-4">
              <h6 className="mb-3">Quick Pay</h6>
              <button className="btn btn-primary w-100 mb-3">💳 Pay Outstanding Balance</button>
              <p className="fw-bold mb-1">Saved Payment Methods</p>
              <div className="mb-2"><input type="radio" name="method" /> Visa ending in 0322</div>
              <div className="mb-2"><input type="radio" name="method" /> Bank Account</div>
              <button className="btn btn-outline-secondary btn-sm w-100 mb-3">+ Add Payment Method</button>
              <p className="fw-bold mb-1">Receipts & Documents</p>
              <button className="btn btn-light btn-sm w-100 mb-2">📄 Download All Receipts</button>
              <button className="btn btn-light btn-sm w-100">📁 Print Fees Statement</button>
            </div>

            {/* Help and Support */}
            <div className="card shadow-sm p-3">
              <h6 className="mb-3">Help & Support</h6>
              <ul className="list-unstyled small">
                <li><strong>📌 Payment FAQs</strong><br /><a href="#">View Help</a></li>
                <li className="mt-2"><strong>📞 Contact Finance Office</strong><br />
                  <a href="mailto:support@campus.com">support@campus.com</a><br />
                  <span>+91 98451 12345</span>
                </li>
                <li className="mt-2"><strong>📅 Schedule an Appointment</strong><br />
                  <a href="#">Book Appointment</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-muted mt-4 small">
          <i className="bi bi-x-diamond-fill"></i> Designed and developed by ZoroTeam © 2025 Zoro Innovations
        </div>
      </div>
    </Layout>
  );
};

export default Fees;
