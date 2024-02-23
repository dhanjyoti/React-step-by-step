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

    const handleEditTodo = (index)=> {
        const editedTodo = prompt('Edit the task:', todos[index]);
        if(editedTodo !== null){
            const updatedTodos =[...todos];
            updatedTodos[index] = editedTodo;
            setTodos(updatedTodos);
        }
    }
    const handleDeleteTodo= (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
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
                <li key={index}>
                    {todo}
                    <button onClick={()=>handleEditTodo(index)}>Edi</button>
                    <button onClick={()=> handleDeleteTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Firstodo;
