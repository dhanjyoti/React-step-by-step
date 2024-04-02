import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from './pages/Contact';
import Header from "./pages/Header";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";
import Details from "./pages/Details";
import Test12 from "./stepbystep/Test";
import ExpandingTextarea from "./pages/TextArea";
// import POST from './stepbystep/POST';
import Contact from "./pages/Contact";
// import PreFill from './stepbystep/PreFill';
// import POST from './stepbystep/POST';
import NewApi from "./pages/NewApi";
import UserProvider from "./utils/UserProvider";
import AxiosCom from "./pages/Axios";
import PostAxios from "./pages/PostAxios";



function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/axiospost" element={<PostAxios />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/newapi" element={<NewApi />} />
          <Route path="/expandingtextarea" element={<ExpandingTextarea />} />
          <Route path="/test12" element={<Test12 />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/user/:name" element={<User />} />
          {/* <Route path='/*' element={<Navigate to='/' />}/> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
