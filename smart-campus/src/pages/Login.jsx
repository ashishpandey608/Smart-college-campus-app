import React, { useState } from 'react';
import './index.css'; // optional for extra styling
import logo from '../assets/campuscore.jpeg'; // adjust path if needed
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  // ✅ handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'student') {
      navigate('/student');
    } else if (role === 'faculty') {
      navigate('/faculty'); // create this page later
    } else if (role === 'admin') {
      navigate('/admin'); // create this page later
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row login-page h-100 justify-content-center align-items-center">

        {/* LEFT SIDE (BLUE SECTION) */}
        <div className="col-md-6 left-panel d-flex flex-column justify-content-center align-items-center text-white">
          <div className="overlay"></div>
          <div className="content text-center px-4">
            <img src={logo} alt="Campus Core Logo" className="img-fluid mb-4" style={{ maxWidth: '100px' }} />
            <h2>Welcome to Your Academic Journey</h2>
            <p className="text-center px-5" style={{ fontSize: '1rem' }}>
              Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive platform.
            </p>
            <div className="d-flex gap-3 mt-4">
              <div className='Fbox' style={{ fontSize: '1.5rem' }}>
                <i className="bi bi-journal-text" style={{ fontSize: '2rem' }}></i> <br />Course Management
              </div>
              <div className='Sbox' style={{ fontSize: '1.5rem' }}>
                <i className="L1 bi bi-clock-history" style={{ fontSize: '2rem' }}></i><br /> Schedule Tracking
              </div>
              <div className='Tbox' style={{ fontSize: '1.5rem' }}>
                <i className="L1 bi bi-graph-up" style={{ fontSize: '2rem' }}></i> <br />Progress Analytics
              </div>
            </div>
            <div className="mt-4 intro text-center px-4" style={{ fontSize: '1.5rem' }}>
              <p><i>"The platform is intuitive and saves me hours each week."</i></p>
              <p>- Dr. Michael T., Engineering Faculty</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (LOGIN FORM) */}
        <div className="col-md-6 right-panel d-flex align-items-center justify-content-center">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="text-center mb-4">Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>

                {/* Role Switcher */}
                <div className="d-flex justify-content-center mb-4 gap-2">
                  {['student', 'faculty', 'admin'].map((r) => (
                    <button
                      key={r}
                      className={`btn btn-outline-${role === r ? 'primary' : 'secondary'}`}
                      onClick={() => setRole(r)}
                    >
                      {r.charAt(0).toUpperCase() + r.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      {role === 'student' ? 'Student ID or Email' :
                        role === 'faculty' ? 'Faculty ID or Email' : 'Admin ID or Email'}
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter ID or Email" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember Me</label>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">Login</button>

                  <div className="text-center mt-3">
                    <button type="button" className="btn btn-outline-danger w-100">
                      <i className="bi bi-google"></i> Log in with Google
                    </button>
                  </div>

                  <div className="text-end mt-2">
                    <a href="#">Forgot Password?</a>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
