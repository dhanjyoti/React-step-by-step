import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import BgChanger from './components/BgChanger';
import MainDropdown from './dropdown/MainDropdown';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/bgchanger" element={<BgChanger />}/>
        <Route path="/mainDropdown" element={<MainDropdown />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
