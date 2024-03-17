import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import Header from './pages/Header';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import Details from './pages/Details';
import Test12 from './stepbystep/Test';
import API from './stepbystep/API';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/api' element={<API/>}/>
        <Route path='/test12' element={<Test12/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/user/:name' element={<User/>}/>
        {/* <Route path='/*' element={<Navigate to='/' />}/> */}
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
