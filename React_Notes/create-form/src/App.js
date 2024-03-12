import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Counter from './components/Counter';
import FormValidation from './components/FormValidation';
import InputMirror from './components/InputMirror';
import NotFound from './components/NotFound';
import Home from './components/Home';
import SearchProducts from './components/SearchProducts';
import SecondTodoApp from './components/SecondTodoApp';
import FristTodo from './components/FirstTodo';
import SimpleInterestCalculator from './pages/SimpleInterestCalculator';

function App() {
  return (
    <Router>
        {/* Your navigation can be here */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/inputmirror" element={<InputMirror/>} />
          <Route path="/formvalidation" element={<FormValidation/>} />
          <Route path="/searchproduct" element={<SearchProducts/>} />
          <Route path="/secondtodo" element={<SecondTodoApp/>} />
          <Route path="/firsttodo" element={<FristTodo/>} />
          <Route path="/simpleinterest" element={<SimpleInterestCalculator/>} />
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default App;
