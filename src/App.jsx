import React, { useState } from "react";

function App() {
  // State to manage task input and task list
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle form submission
  const addTask = (e) => {
    e.preventDefault(); // Prevent page reload
    if (task.trim() === "") return; // Ignore empty input
    setTasks([...tasks, task]); // Add new task
    setTask(""); // Clear input field
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Task Manager</h1>

      {/* Task Input Form */}
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              background: "#f4f4f4",
              margin: "5px auto",
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
