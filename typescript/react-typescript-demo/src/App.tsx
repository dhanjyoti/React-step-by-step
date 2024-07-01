import './App.css';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import {Greet} from './components/Greet';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';

function App() {
  // const personName ={
  //   first: "Dj",
  //   last: "Rabha",
  // }

  // const nameList = [
  //   {
  //     first: 'dj',
  //     last: "rabha"
  //   },
  //   {
  //     first: 'lj',
  //     last: "rj"
  //   },
  //   {
  //     first: 'mj',
  //     last: "vj"
  //   }
  // ]
  return (
    <div className="App">
      <Greet name="Dhanjyoti" isLoggedIn={false} />
      {/* <Greet name="Dhanjyoti" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='success'/> */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id)=>{
        console.log("Button Clicked", event, id)
      }}/>
      <Input value='' handleChange={(event)=> console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem', backgroundColor:'lightblue'}} />
    </div>
  );
}

export default App;
