import { useEffect, useState } from "react";

const Firstodo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState(()=>{
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleAddTodo =()=>{
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('')
        }
    }
  return (
    <div>
        <h2>Todo App</h2>
        <div>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Enter new Todo" />
            <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
            {todos.map((todo, index)=>(
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  );
};

export default Firstodo;
