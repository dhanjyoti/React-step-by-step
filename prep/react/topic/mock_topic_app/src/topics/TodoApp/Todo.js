import React, { useEffect, useState } from "react";

const Todo = () => {
    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleAdd = ()=>{
        setTask([...task, {id: task.length + 1, text: inputValue}]);
        setInputValue('');
    }
    const handleEdit = (id)=>{
        setEditId(id);
    }
    const handleUpdatedTask = ()=>{
        setEditId('');
    }
    const handleEditChange = (newValue, id)=>{
        const updatedValue = task.map((item)=>{
            if(item.id === id){
                return {...item, text: newValue};
            }
            return item;
        })
        setTask(updatedValue);
    }
    const handleDelete = (id)=>{
        const deleteData = task.filter((item)=> item.id !== id);
        setTask(deleteData);
    }

    useEffect(()=>{
        if(task && task.length > 0){
            localStorage.setItem("task", JSON.stringify(task));
        }
    }, [task]);
    useEffect(()=>{
        try{
            let tempTask= JSON.parse(localStorage.getItem("task"));
            if(tempTask){
                setTask(tempTask);
            }
        } catch (error){
            console.log(error)
        }
    },[])
    
  return (
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      }}
    >
      <h2>Todo App</h2>
      <div>
        <input
            type="text"
            value={inputValue}
            placeholder="Enter ...task"
            onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Add Task</button>
        <ol>
            {task.map((item)=>(
                <li key={item.id}>
                    {editId === item.id ? (
                        <div>
                            <input
                                type="text"
                                value={item.text}
                                onChange={(e)=>handleEditChange(e.target.value, item.id)}
                            />
                            <button onClick={handleUpdatedTask}>Update</button>
                            <button onClick={()=> handleDelete(item.id)}>Delete</button>
                        </div>
                    )
                        :
                    (
                        <div>
                            Task: {item.text}
                            <button onClick={()=> handleEdit(item.id)}>Edit</button>
                            <button onClick={()=> handleDelete(item.id)}>Delete</button>
                        </div>
                    )}
                </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
