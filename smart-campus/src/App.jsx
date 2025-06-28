import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // adjust if path differs
import StudentDashboard from './pages/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        {/* You can add more like faculty/admin later */}
      </Routes>
    </Router>
  );
};

export default App;
