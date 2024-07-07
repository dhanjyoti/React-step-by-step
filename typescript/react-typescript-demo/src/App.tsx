import './App.css';
import { Button2 } from './components/html/Button2';
import { CustomInput } from './components/html/Input';
import { Text } from './components/polymorphic/Text';
import { RandomNumber } from './components/restriction/RandomNumberProps';
import { Toast } from './components/templateliterals/Toast';
// import { Private } from './components/auth/Private';
// import { Profile } from './components/auth/Profit';
// import { Counter } from './components/class/Counter';
// import { List } from './components/genetics/List';
// import { User } from './components/context/User';
// import { UserContextProvider } from './components/context/UserContext';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import {Greet} from './components/Greet';
// import { Button } from './components/Button';
// import { Input } from './components/Input';
// import { Container } from './components/Container';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import { Box } from './components/context/Box';

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
      <RandomNumber value={10} isPositive/>
      <Toast position='center' />
      <Button2 variant='primary' onClick={()=> console.log('Clicked')}>
        Primary Button
      </Button2>
      <CustomInput />
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
      {/* <Private isLoggedIn={true} component={Profile} />
      <Counter message="The count value is " />
      <List items={["Batman", "Superman", "Wonder Woman"]} onClick={(item)=> console.log(item)}/>
      <List items={[1, 2, 3]} onClick={(item)=> console.log(item)}/> */}
      {/* <List items={[
        {
          id: 1, 
          first: "Bruce",
          last: "Wayne",
        },
        {
          id: 2, 
          first: "Clark",
          last: "Kent",
        },
        {
          id: 3,
          first: "Princess",
          last: "Diana",
        }
        ]} onClick={(item)=> console.log(item)}/> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Greet name="Dhanjyoti" isLoggedIn={false} /> */}
      {/* <Greet name="Dhanjyoti" messageCount={10} isLoggedIn={false} /> */}
      {/* <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='success'/> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event, id)=>{
        console.log("Button Clicked", event, id)
      }}/>
      <Input value='' handleChange={(event)=> console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem', backgroundColor:'lightblue'}} /> */}
    </div>
  );
}

export default App;
