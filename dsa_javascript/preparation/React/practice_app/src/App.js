import  {useState} from 'react';
import './App.css';
import Counter from './component/Counter';

function App() {
  const [count, setCount] = useState([1, 7, 8, 9,10]);

  return (
    <div className="App">
      <Counter count={count}/>
    </div>
  );
}

export default App;
