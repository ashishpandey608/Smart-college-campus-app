import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import Result from './pages/Result';
import Fees from './pages/Fees';
import Schedule from './pages/Schedule';
import Others from './pages/Others';
import Mentor from './pages/Mentor';
import CourseSetup from './pages/CourseSetup.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/others" element={<Others />} />
        <Route path="/mentor" element={<Mentor />} />
        
        <Route path="/CourseSetup" element={<CourseSetup />} />


      </Routes>
    </Router>
  );
}

export default App;
