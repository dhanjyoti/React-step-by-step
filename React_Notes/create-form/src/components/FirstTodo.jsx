import { useState, useEffect } from "react";

function FristTodo() {
  const [task, setTask] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [editId, setEditId] = useState("");
  const storedTask = JSON.parse(localStorage.getItem("task"));
  useEffect(() => {
    if (storedTask) {
      setTask(storedTask);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTask = () => {
    if (inputvalue.trim() !== "") {
      setTask([...task, { id: Date.now(), text: inputvalue }]);
      setInputValue("");
    }
  };
  const handleEditTask = (id) => {
    setEditId(id);
  };
  const handleEditChange = (newvalue, id) => {
    const updatedTaskValue = task.map((task) => {
      if (task.id == id) {
        return { ...task, text: newvalue };
      }
      return task;
    });
    setTask(updatedTaskValue);
  };
  const handleUpdateTask = () => {
    setEditId("");
  };
  const handleDeleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };
  return (
    <>
      <h1>TODO APP</h1>
      <div>
        <input
          type="text"
          value={inputvalue}
          onChange={handleInputChange}
          placeholder="Enter Task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      {task?.map((task) => (
        <div key={task.id}>
          {editId == task.id ? (
            <>
              <input
                type="text"
                value={task.text}
                onChange={(e) => handleEditChange(e.target.value, task.id)}
              />
              <button onClick={handleUpdateTask}>Update</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button onClick={() => handleEditTask(task.id)}>Edit</button>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default FristTodo;