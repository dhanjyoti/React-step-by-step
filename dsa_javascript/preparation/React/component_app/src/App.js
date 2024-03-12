import './App.css';
import ClassComponent from './components/classBasedComponent/ClassComponent';
import FunctionalComponent from './components/functionalComponent/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <FunctionalComponent/>
    </div>
  );
}

export default App;
