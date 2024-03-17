import React, { useEffect, useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setTask([...task, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const handleEdit = (id) => {
    setEditId(id); 
  };

  const handleEditChange = (newValue, id) => {
    const updatedValue = task.map((item) => {
      if (item.id == id) {
        return { ...item, text: newValue };
      }
      return item;
    });
    setTask(updatedValue);
  };

  const handleUpdatedTask = () => {
    setEditId("");
  };
  const handleDelete = (id) => {
    setTask(task.filter((item) => item.id != id));
  };
  console.log(task);

  useEffect(()=>{
    if(task && task.length > 0){
         localStorage.setItem('task', JSON.stringify(task))
    }
  },[task])

  useEffect(()=>{
    try{
        let tempTask = JSON.parse(localStorage.getItem('task'));
        if(tempTask){
            setTask(tempTask);
        }
    }catch(error){
        console.log(error)
    }
  },[])

  return (
    <>
      <h1 style={{ color: "blue" }}>Todo App</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ol>
        {task.map((item) => (
          <li key={item.id}>
            {editId == item.id ? (
              <div>
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => handleEditChange(e.target.value, item.id)}
                />
                <button onClick={handleUpdatedTask}>Update</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            ) : (
              <div>
                Task: {item.text}
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoApp;
