import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Counter from './components/Counter';
import BgChanger from './components/BgChanger';
import MainDropdown from './dropdown/MainDropdown';
import PasswordGenerator from './passwordGenerator/PasswordGenerator';
import CurrencyConverter from './currencyConverter/CurrencyConverter';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/bgchanger" element={<BgChanger />}/>
        <Route path="/maindropdown" element={<MainDropdown />}/>
        <Route path="/passwordgenerator" element={<PasswordGenerator />}/>
        <Route path="/currencyconverter" element={<CurrencyConverter />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
