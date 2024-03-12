// import  {useState} from 'react';
import './App.css';
// import CounterApp from './component/CounterApp';
import NewComp from './component/NewComp';
// import Counter from './component/Counter';

function App() {
  // const [count, setCount] = useState([1, 7, 8, 9,10]);

  return (
    <div className="App">
      {/* <Counter count={count}/> */}
      {/* <CounterApp/> */}
      <NewComp/>
    </div>
  );
}

export default App;
