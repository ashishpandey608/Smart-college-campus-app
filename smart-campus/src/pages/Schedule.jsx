import React from 'react';
import Layout from '../components/Layout';

const Schedule = () => {
  const templates = [
    { type: 'Personal Coaching', icon: 'person-fill', date: 'JAN 12, 2025, 11:00 AM' },
    { type: 'Group Study', icon: 'people-fill', date: 'FEB 15, 2025, 5:00 PM' },
    { type: 'Introductory Lecture', icon: 'book-fill', date: 'FEB 22, 2025, 10:00 AM' },
    { type: 'Assignment Deadline', icon: 'calendar-x', date: 'MAR 17, 2025, 12:00 AM' },
    { type: 'Presentation Day', icon: 'easel-fill', date: 'JAN 29, 2025, 3:00 PM' },
  ];

  const upcomingEvents = [
    { title: 'Registration Complete!', date: 'JAN 12, 2025, 11:00 AM', type: 'Lecture Confirmation' },
    { title: 'Personal Coaching with Yasmin', date: 'FEB 15, 2025, 11:00 AM', type: 'Coaching on College' },
  ];

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
            { label: 'Results', icon: 'graph-up', path: '/result' },
            { label: 'Fees', icon: 'receipt', path: '/fees' },
            { label: 'Other', icon: 'emoji-smile', path: '#' },
            { label: 'Mentor', icon: 'person', path: '#' }
          ].map((item, idx) => (
            <a key={idx} href={item.path} className="text-dark text-decoration-none text-center small">
              <div><i className={`bi bi-${item.icon} fs-5`}></i></div>
              {item.label}
            </a>
          ))}
        </div>

        {/* 🔷 Main Grid */}
        <div className="row">
          {/* Left - Calendar and Events */}
          <div className="col-md-8">
            <div className="card shadow-sm p-3 mb-4">
              <div className="d-flex justify-content-between mb-2">
                <h5>Calendar</h5>
                <span>Spring Summer</span>
              </div>
              <table className="table table-bordered text-center mb-3">
                <thead>
                  <tr>
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                      <th key={day}>{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3, 4].map(week => (
                    <tr key={week}>
                      {Array.from({ length: 7 }).map((_, i) => {
                        const day = week * 7 + i - 3;
                        return (
                          <td key={i} className={day === 17 ? 'bg-primary text-white fw-bold' : 'text-muted'}>
                            {day > 0 && day <= 31 ? day : ''}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Event Filter */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <label className="form-label mb-0">Event Type</label>
                <div className="form-check">
                  <input type="radio" name="eventType" className="form-check-input" />
                  <label className="form-check-label">Lecture</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="eventType" className="form-check-input" />
                  <label className="form-check-label">Group Study</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="eventType" className="form-check-input" />
                  <label className="form-check-label">Coaching</label>
                </div>
              </div>

              {/* Upcoming Events */}
              <h6 className="text-primary">Upcoming Events</h6>
              {upcomingEvents.map((event, idx) => (
                <div key={idx} className="card mb-2 shadow-sm p-2">
                  <p className="mb-0 fw-bold">{event.title}</p>
                  <small className="text-muted">{event.date} | {event.type}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Add Event */}
          <div className="col-md-4">
            <div className="card shadow-sm p-3 mb-4">
              <button className="btn btn-primary w-100 mb-3">Add New Event</button>
              <h6>Saved Templates</h6>
              {templates.map((item, i) => (
                <div className="card mb-2 p-2 shadow-sm" key={i}>
                  <div className="d-flex align-items-center">
                    <div className="bg-light p-2 rounded me-3">
                      <i className={`bi bi-${item.icon} fs-4 text-primary`}></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold">{item.type}</p>
                      <small className="text-muted">{item.date}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="text-center text-muted mt-4 small">
          <i className="bi bi-x-diamond-fill"></i> Designed and developed by ZoroTeam © 2025 Zoro Innovations
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
