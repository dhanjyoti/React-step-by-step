import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './route/Login';
import SignUp from './route/SignUp';

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
