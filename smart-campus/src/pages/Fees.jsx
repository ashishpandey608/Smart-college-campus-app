import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/campuscore.jpeg';
// --- Reusable Helper Components for Fees Page ---

// Fees Overview Card
const FeesOverviewCard = () => {
    const overviewItems = [
        { title: 'Total Fees', amount: '₹12,500', icon: 'bi-wallet-fill', color: 'primary' },
        { title: 'Amount Paid', amount: '₹8,750', icon: 'bi-check-circle-fill', color: 'success' },
        { title: 'Pending Balance', amount: '₹3,750', icon: 'bi-hourglass-split', color: 'warning' },
        { title: 'Last Payment', amount: 'May 15', icon: 'bi-calendar2-check-fill', color: 'info' },
    ];

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0 fw-bold">Fees Overview</h5>
                <span className="text-muted small">Spring Semester 2025</span>
            </div>
            <div className="card-body p-4">
                <div className="row g-3 text-center">
                    {overviewItems.map(item => (
                        <div className="col-md-3" key={item.title}>
                            <div className={`p-3 bg-${item.color}-subtle rounded-3`}>
                                <i className={`bi ${item.icon} fs-4 text-${item.color}`}></i>
                                <p className="small fw-semibold mt-2 mb-1">{item.title}</p>
                                <h5 className="fw-bold mb-0">{item.amount}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Payment History Table
const PaymentHistory = () => {
    const history = [
      { date: 'May 15, 2025', id: 'FT6543281', desc: 'Tuition Fee (Installment 3)', amt: '3,750', mode: 'Credit Card', status: 'Completed' },
      { date: 'April 10, 2025', id: 'FT7634920', desc: 'Tuition Fee (Installment 2)', amt: '2,500', mode: 'Bank Transfer', status: 'Completed' },
      { date: 'February 5, 2025', id: 'FT3412890', desc: 'Tuition Fee (Installment 1)', amt: '3,250', mode: 'Credit Card', status: 'Completed' },
      { date: 'January 21, 2025', id: 'TR9823674', desc: 'Registration Fee', amt: '500', mode: 'UPI', status: 'Completed' },
    ];

    return (
        <div className="card shadow-sm mb-4">
             <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0 fw-bold">Payment History</h5>
                <div className="input-group input-group-sm w-auto">
                    <span className="input-group-text bg-light-subtle border-0"><i className="bi bi-search"></i></span>
                    <input type="text" className="form-control bg-light-subtle border-0" placeholder="Search transactions..."/>
                </div>
            </div>
            <div className="card-body p-4">
                <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                        <thead className="table-light">
                            <tr>
                                <th className="small text-muted">Date</th>
                                <th className="small text-muted">Transaction ID</th>
                                <th className="small text-muted">Description</th>
                                <th className="small text-muted">Amount</th>
                                <th className="small text-muted">Mode</th>
                                <th className="small text-muted">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map(item => (
                                <tr key={item.id}>
                                    <td className="small align-middle">{item.date}</td>
                                    <td className="small align-middle"><a href="#" className="fw-semibold text-decoration-none">{item.id}</a></td>
                                    <td className="small align-middle">{item.desc}</td>
                                    <td className="small align-middle">₹{item.amt}</td>
                                    <td className="small align-middle">{item.mode}</td>
                                    <td className="small align-middle"><span className="badge bg-success-subtle text-success-emphasis rounded-pill">{item.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <p className="small text-muted mb-0">Showing 4 of 12 entries</p>
                    <nav>
                        <ul className="pagination pagination-sm mb-0">
                            <li className="page-item disabled"><a className="page-link" href="#">&laquo;</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

// Upcoming Dues Card
const UpcomingDues = () => {
    const dues = [
        { title: 'Tuition Fee (Final Installment)', due: 'July 21, 2025', amount: '3,750', urgent: true },
        { title: 'Library Fee', due: 'August 10, 2025', amount: '120', urgent: false },
        { title: 'Computer Lab Access', due: 'August 10, 2025', amount: '85', urgent: false },
    ];
    return (
        <div className="card shadow-sm">
             <div className="card-header bg-body d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0 fw-bold">Upcoming Dues</h5>
                <Link to="#" className="text-decoration-none small fw-semibold">View All</Link>
            </div>
            <div className="card-body p-4">
                {dues.map(due => (
                    <div key={due.title} className={`p-3 rounded-3 mb-3 ${due.urgent ? 'bg-warning-subtle' : 'bg-light-subtle'}`}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className="fw-semibold small mb-1">{due.title}</p>
                                <p className="text-muted small mb-0">Due by {due.due}</p>
                                {due.urgent && <p className="text-danger small mb-0 fst-italic">Late payment fee of ₹500 applies after due date</p>}
                            </div>
                            <div className="text-end">
                                <h5 className="fw-bold mb-2">₹{due.amount}</h5>
                                <button className={`btn btn-sm ${due.urgent ? 'btn-primary' : 'btn-outline-secondary'}`}>
                                    {due.urgent ? 'Pay Now' : 'Pay Later'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Quick Pay Card
const QuickPay = () => (
    <div className="card shadow-sm mb-4">
        <div className="card-body p-4">
            <h5 className="card-title fw-bold mb-3">Quick Pay</h5>
            <div className="d-grid">
                <button className="btn btn-primary fw-semibold">Pay Outstanding Balance</button>
            </div>
            <hr />
            <p className="fw-semibold small mb-2">Saved Payment Methods</p>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="visa" defaultChecked/>
                <label className="form-check-label small" htmlFor="visa">Visa ending in 4562</label>
            </div>
             <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentMethod" id="bank"/>
                <label className="form-check-label small" htmlFor="bank">Bank Account</label>
            </div>
            <div className="d-grid mt-2">
                <button className="btn btn-light btn-sm">+ Add Payment Method</button>
            </div>
             <hr />
            <p className="fw-semibold small mb-2">Receipts & Documents</p>
            <div className="d-grid gap-2">
                <button className="btn btn-light btn-sm"><i className="bi bi-download me-2"></i>Download All Receipts</button>
                <button className="btn btn-light btn-sm"><i className="bi bi-printer me-2"></i>Print Fee Statement</button>
            </div>
        </div>
    </div>
);

// Help & Support Card
const HelpSupport = () => (
    <div className="card shadow-sm">
        <div className="card-body p-4">
             <h5 className="card-title fw-bold mb-3">Help & Support</h5>
             <ul className="list-unstyled">
                 <li className="mb-3">
                     <p className="fw-semibold small mb-1">Payment FAQs</p>
                     <p className="small text-muted">Answers to common questions about fees and payments.</p>
                     <Link to="#" className="text-decoration-none small fw-semibold">View FAQs</Link>
                 </li>
                 <li className="mb-3 pt-3 border-top">
                     <p className="fw-semibold small mb-1">Contact Finance Office</p>
                     <p className="small text-muted">Need help with your payment? Reach out to our finance team for support.</p>
                     <a href="tel:+911234567890" className="text-decoration-none small fw-semibold">+91 123 456 7890</a>
                 </li>
                 <li className="pt-3 border-top">
                     <p className="fw-semibold small mb-1">Schedule an Appointment</p>
                     <p className="small text-muted">Book a dedicated slot with a financial advisor for personalized assistance.</p>
                     <Link to="#" className="text-decoration-none small fw-semibold">Book Appointment</Link>
                 </li>
             </ul>
        </div>
    </div>
);


// --- Main Fees Component ---

const Fees = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const navItems = ['Home', 'Schedule', 'Course Setup', 'Result', 'Fees', 'Other', 'Mentor'];
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
                    <input className="form-check-input" type="checkbox" role="switch" id="theme-switch-fees" onChange={toggleTheme} checked={theme === 'dark'}/>
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
        {/* Nav Buttons*/ }
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
                <FeesOverviewCard />
                <PaymentHistory />
                <UpcomingDues />
            </div>
            <div className="col-lg-4">
                <QuickPay />
                <HelpSupport />
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

export default Fees;
