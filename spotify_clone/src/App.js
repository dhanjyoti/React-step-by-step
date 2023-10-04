import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './route/Login';
import SignUp from './route/SignUp';
import Home from './route/Home';

function App() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
