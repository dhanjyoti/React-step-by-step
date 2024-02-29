import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from './pages/TodoList';
import CategoryTodo from './pages/CategoryTodo';
import FormValidation from './pages/FormValidation';
import RealTimeInputDisplay from './pages/RealTimeInputDisplay';
import Counter from './pages/Counter';
import SearchProducts from './pages/SearchProduct';
import Test from './pages/Test';
import SimpleIntersetCalculator from './pages/SimpleIntersetCalculator';
import FormValidation2 from './pages/FormValidation2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='todolist' element={<TodoList/>} />
        <Route path='categorytodo' element={<CategoryTodo/>} />
        <Route path='formvalidation' element={<FormValidation/>} />
        <Route path='formvalidation2' element={<FormValidation2/>} />
        <Route path='realtimeinputdisplay' element={<RealTimeInputDisplay/>} />
        <Route path='counter' element={<Counter/>} />
        <Route path='searchproduct' element={<SearchProducts/>} />
        <Route path='simpleinterestcalculator' element={<SimpleIntersetCalculator/>} />
        <Route path='test' element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;