import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MyComponent from './components/MyComponent';
import Contact from "./pages/Contact";
import Home from "./pages/Home";

// const queryClient = new QueryClient();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * (60*1000),
      cacheTime: 10 * (60*1000)
    }
  }
})
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
            <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/mycomponent"}>MyComponent</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route exact path="/contact" element={<Contact/>} />
          <Route path="/mycomponent" element={<MyComponent/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
