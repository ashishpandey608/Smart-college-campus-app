import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import Result from './pages/Result';
import Fees from './pages/Fees';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/result" element={<Result />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </Router>
  );
}

export default App;
