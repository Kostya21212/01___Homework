import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from API on component mount
  useEffect(() => {
    axios
      .get("https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  // Function to handle status change
  const changeStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    // Update tasks in the state
    setTasks(updatedTasks);

    // Update status in the API
    axios
      .put(`https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks/${taskId}`, {
        status: newStatus,
      })
      .catch((error) => console.error("Error updating task:", error));
  };

  // Function to handle task removal
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Update tasks in the state
    setTasks(updatedTasks);

    // Remove task from API
    axios
      .delete(`https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks/${taskId}`)
      .catch((error) => console.error("Error removing task:", error));
  };

  // Categorize tasks by status
  const todoTasks = tasks.filter((task) => task.status === 0);
  const inProgressTasks = tasks.filter((task) => task.status === 1);
  const doneTasks = tasks.filter((task) => task.status === 2);

  return (
    <div>
      <h1>Task Board</h1>
      <div className="columns">
        <div className="column">
          <h2>To Do</h2>
          <ul>
            {todoTasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => changeStatus(task.id, 1)}>
                  In Progress
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>In Progress</h2>
          <ul>
            {inProgressTasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => changeStatus(task.id, 0)}>To Do</button>
                <button onClick={() => changeStatus(task.id, 2)}>Done</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Done</h2>
          <ul>
            {doneTasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button onClick={() => removeTask(task.id)}>To Archive</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
