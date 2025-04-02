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

  const deleteTask = (index) => {
    const updateTask = tasks.filter((_,i) => i !== index )
    setTasks(updateTask);
  }

  return (
    <div style={{ 
      width: "100%", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#f8f9fa"
  }}>
    <div style={{ 
        textAlign: "center", 
        padding: "30px", 
        background: "#fff", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
        width: "400px"
    }}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Task Manager</h1>
  
      {/* Task Input Form */}
      <form onSubmit={addTask} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={{
            padding: "10px",
            width: "80%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
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
            fontSize: "16px"
          }}
        >
          Add
        </button>
      </form>
  
      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.length === 0 ? ( <p style={{ color: "#888" }}>No tasks added yet.</p>) : 
        (   tasks.map((t, index) => (
          <li
            key={index}
            style={{
              background: "#f4f4f4",
              margin: "8px auto",
              padding: "10px",
              width: "100%",
              borderRadius: "5px",
              fontSize: "16px",
              textAlign: "left"
            }}
          >
            {t}
            <button onClick={() => deleteTask(index)} style={{
               padding: "10px 15px",
               marginLeft: "10px",
               backgroundColor: "red",
               color: "white",
               border: "none",
               borderRadius: "5px",
               cursor: "pointer",
               fontSize: "16px",
               float: "right",
               marginTop: "-9px",
               marginRight: "-10px"
            }}>Delete</button>
          </li>
        )))}
     
      </ul>
    </div>
  </div>
  
  
  );
}

export default App;
