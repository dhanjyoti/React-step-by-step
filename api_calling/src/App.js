// import { useState } from "react";
// import Navbar from "./components/Navbar";
// import DisplayScreen from "./components/DisplayScreen";

// function App() {
//   const [currentActiveMenu, setCurrentActiveMenu] = useState("User");
//   const [fav, setFav] = useState([]);

//   return (
//     <>
//       <div>
//         <Navbar setCurrentActiveMenu={setCurrentActiveMenu} />
//         <DisplayScreen fav={fav} currentActiveMenu={currentActiveMenu} setFav={setFav} />
//       </div>
//     </>
//   );
// }

// export default App;

import React from 'react'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import User from './components/User';
import Favourite from './components/Favourite';
import Contact from './components/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <div className='AppContainer'>
        <div>
          <NavLink style={({isActive})=> ({
            background: isActive ? "red" : "yellow"
          })} to={"/"}>
            User
          </NavLink>
        </div>
        <div>
          <NavLink style={({isActive})=> ({
            background: isActive ? "red" : "yellow"
          })} to={"/Favoutite"}>
            Favourite
          </NavLink>
        </div>
        <div>
          <NavLink style={({isActive})=> ({
            background: isActive ? "red" : "yellow"
          })} to={"/Contact"}>
            Contact
          </NavLink>
        </div>
        <Routes>
          <Route path='/' element={<User />}></Route>
          <Route path='/favourite' element={<Favourite />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App