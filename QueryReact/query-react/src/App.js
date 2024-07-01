import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import "./App.css";
import { SuperHeoresPage } from "./components/SuperHeroes.page";
import { RQSuperHeoresPage } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/superheroes">Super Heroes</Link>
              </li>
              <li>
                <Link to="/rqsuperheroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/superheroes" element={<SuperHeoresPage />} />
            <Route path="/rqsuperheroes" element={<RQSuperHeoresPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
