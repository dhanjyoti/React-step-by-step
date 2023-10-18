import Home from '../route/Home';
import Signup from '../route/Signup';
import Subscription from '../route/Subscription';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/subscription" element={<Subscription/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
