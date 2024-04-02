import './App.css';
import About from './component/About';
import UserProvider from './component/CommonContext';
import Component1 from './component/Component1';
import Component2 from './component/Component2';
import Component3 from './component/Component3';
import Home from './component/Home';

function App() {
  return (
    <UserProvider>
      <Home/>
      <About/>
      <Component1/>
      <Component2/>
      <Component3/>
    </UserProvider>
  );
}

export default App;
