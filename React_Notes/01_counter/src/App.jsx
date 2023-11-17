import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import BgChanger from './components/BgChanger';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/bgchanger" element={<BgChanger />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
