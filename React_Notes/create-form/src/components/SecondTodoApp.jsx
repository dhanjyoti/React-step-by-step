import React, { useState, useEffect } from "react";

function SecondTodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({
    name: "",
    category: "",
    price: "",
  });
  const [editId, setEditId] = useState("");

  const storedTasks = JSON.parse(localStorage.getItem("tasks"));

  useEffect(() => {
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskInputChange = (e) => {
    const { name, value } = e.target;
    setTaskInput((Prevvalue) => ({
      ...Prevvalue,
      [name]: value,
    }));
  };

  const handleAddTask = () => {
    if (
      taskInput.name.trim() !== "" &&
      taskInput.category.trim() !== "" &&
      taskInput.price.trim() !== ""
    ) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          task: taskInput.name,
          category: taskInput.category,
          price: taskInput.price,
        },
      ]);
      setTaskInput({ name: "", category: "", price: "" });
    }
  };

  const handleEditTask = (id) => {
    setEditId(id);
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      // Update the input fields with task details
      setTaskInput({
        name: taskToEdit.task,
        category: taskToEdit.category,
        price: taskToEdit.price,
      });
    }
  };

  const handleUpdateTask = () => {
    if (editId !== "") {
      // Update the task details in the tasks array
      const updatedTasks = tasks.map((task) => {
        if (task.id === editId) {
          return {
            ...task,
            task: taskInput.name,
            category: taskInput.category,
            price: taskInput.price,
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      setEditId("");
      setTaskInput({ name: "", category: "", price: "" });
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>TODO APP</h1>
      <div>
        <input
          type="text"
          name="name"
          value={taskInput.name}
          onChange={handleTaskInputChange}
          placeholder="Enter Task"
        />
        <input
          type="text"
          name="category"
          value={taskInput.category}
          onChange={handleTaskInputChange}
          placeholder="Enter Category"
        />
        <input
          type="text"
          name="price"
          value={taskInput.price}
          onChange={handleTaskInputChange}
          placeholder="Enter Price"
        />
        {editId === "" ? (
          <button onClick={handleAddTask}>Add</button>
        ) : (
          <button onClick={handleUpdateTask}>Update</button>
        )}
      </div>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>{task.task}</span>
          <span>{task.category}</span>
          <span>{task.price}</span>
          <button onClick={() => handleEditTask(task.id)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default SecondTodoApp;