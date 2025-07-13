import React, { useState } from 'react';
import Layout from '../components/Layout';

const Mentor = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { from: 'mentor', text: 'I will look at it by today.', time: '12:03 p.m.' },
    { from: 'student', text: 'Sir, I also have question about the assignment due.', time: '12:15 p.m.' },
    { from: 'mentor', text: 'You can submit it on Tuesday.', time: '12:24 p.m.' },
    { from: 'student', text: 'Okay, thank you sir.', time: '12:26 p.m.' },
    { from: 'mentor', text: 'Anyother doubts ?', time: '12:37 p.m.' },
    { from: 'student', text: `No sir, it's clear. Thank you.`, time: '12:42 p.m.' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { from: 'student', text: message, time: '12:45 p.m.' }]);
      setMessage('');
    }
  };

  const facultyList = [
    { name: 'Olivia Mitchell', time: '8:00 p.m.' },
    { name: 'Benjamin', time: '6:47 p.m.' },
    { name: 'Daniel Miller', time: '4:51 p.m.' },
    { name: 'John Smith', time: '12:42 p.m.' }
  ];

  return (
    <Layout>
      <div className="container-fluid px-4">
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

        {/* 🔷 Nav Bar */}
        <div className="bg-white d-flex justify-content-around py-2 rounded-3 mb-4 shadow-sm">
          {[
            { label: 'Home', icon: 'house', path: '/student' },
            { label: 'Schedule', icon: 'calendar-event', path: '/schedule' },
            { label: 'CourseSetup', icon: 'book', path: '/CourseSetup' },
            { label: 'Result', icon: 'bar-chart', path: 'Result' },
            { label: 'Fees', icon: 'receipt', path: '/fees' },
            { label: 'Other', icon: 'chat-dots-fill', path: '/others' },
            { label: 'Mentor', icon: 'person', path: '/mentor' }
          ].map((item, idx) => (
            <a key={idx} href={item.path} className="text-dark text-decoration-none text-center small">
              <div><i className={`bi bi-${item.icon} fs-5`}></i></div>
              {item.label}
            </a>
          ))}
        </div>

        {/* 🔷 Chat Layout */}
        <div className="row bg-white shadow-sm rounded-3" style={{ minHeight: '550px' }}>
          {/* 🔹 Sidebar */}
          <div className="col-md-3 border-end p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <button className="btn btn-dark btn-sm">CHAT</button>
              <button className="btn btn-outline-secondary btn-sm">CALLS</button>
            </div>
            <input type="text" className="form-control mb-3" placeholder="🔍 Search faculty" />
            <ul className="list-unstyled">
              {facultyList.map((f, i) => (
                <li key={i} className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  <div><i className="bi bi-person-circle me-2"></i>{f.name}</div>
                  <small className="text-muted">{f.time}</small>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Chat Window */}
          <div className="col-md-9 d-flex flex-column justify-content-between p-3">
            <div>
              <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
                <div><i className="bi bi-person-circle me-2"></i><strong>John Smith</strong></div>
                <i className="bi bi-telephone-fill text-primary"></i>
              </div>

              {/* Chat Messages */}
              <div className="mb-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`d-flex mb-3 ${msg.from === 'student' ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className={`p-2 rounded-3 ${msg.from === 'student' ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '70%' }}>
                      <div>{msg.text}</div>
                      <small className="text-muted d-block text-end" style={{ fontSize: '0.75rem' }}>{msg.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-paperclip fs-4"></i>
              <input
                type="text"
                placeholder="Type a message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <i className="bi bi-mic fs-4 text-muted"></i>
              <i className="bi bi-send-fill fs-4 text-primary" role="button" onClick={handleSend}></i>
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

export default Mentor;
