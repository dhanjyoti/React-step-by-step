import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './route/Login';
import Signup from './route/Signup';
import Home from './route/Home';
import { UserProvider } from './utils/use-user';
import Playlist from './route/playlist';

function App() {
  return (
    <div className="w-screen h-screen font-poppins">
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/playlist' element={<Playlist />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
