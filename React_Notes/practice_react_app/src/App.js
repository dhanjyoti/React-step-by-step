import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from './component/TodoList';
import CategoryTodo from './component/CategoryTodo';
import FormValidation from './component/FormValidation';
import RealTimeInputDisplay from './component/RealTimeInputDisplay';
import Counter from './component/Counter';
import SearchProducts from './component/Text';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='todolist' element={<TodoList/>} />
        <Route path='categorytodo' element={<CategoryTodo/>} />
        <Route path='formvalidation' element={<FormValidation/>} />
        <Route path='realtimeinputdisplay' element={<RealTimeInputDisplay/>} />
        <Route path='counter' element={<Counter/>} />
        <Route path='searchproduct' element={<SearchProducts/>} />
      </Routes>
    </Router>
  );
}

export default App;