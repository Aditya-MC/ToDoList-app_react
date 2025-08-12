import { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, completed: false };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded shadow">
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow border px-2 py-1 rounded mr-2"
          />
          <button onClick={addTask} className="bg-blue-600 text-white px-4 py-1 rounded">Add</button>
        </div>

        <ToDoList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </div>
  );
}
