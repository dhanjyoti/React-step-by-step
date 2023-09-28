import './App.css';
import Family from './context/Family';

const familySecret = {
  familyName: 'The Smiths',
  onlyParentCanSee: () => {
    return `The Smiths are the best!`;
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`;
  }
}

function App() {
  return (
    <div className='App'>
      <Family secret={familySecret}/>
    </div>
  );
}

export default App;
