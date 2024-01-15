import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Github, {githubInfoLoader} from './components/github/Github'
import Contact from './components/contact/Contact'
import User from './components/user/User'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>  
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='user/' element={<User/>}>
            <Route path=':userid' element={<User/>} />
          </Route>
          <Route loader={githubInfoLoader} path='github' element={<Github/>} />
          <Route path='*' element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
