import Home from '../route/Home';
import '../styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
