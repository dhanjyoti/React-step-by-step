import React, {useState} from 'react'

const Counter1 = () => {
    const [value, setValue] = useState(0);
    return (
      <div className="App">
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>Increment</button>
        <button onClick={()=>setValue(value-1)}>Decrement</button>
      </div>
    );    
}

export default Counter1