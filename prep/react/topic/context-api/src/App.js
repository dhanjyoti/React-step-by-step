import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";

function App() {
  return (
    <UserContext>
      <BrowserRouter > jkSDDhlkwatrrsrere,jhaefP'LAKJTAKLSSNJOA
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
