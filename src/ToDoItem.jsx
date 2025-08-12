import { useState } from "react";

export default function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm mb-2">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border px-2 py-1 rounded flex-grow mr-2"
        />
      ) : (
        <span
          className={`flex-grow cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleEditSave} className="bg-green-500 text-white px-2 py-1 rounded">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
    </div>
  );
}
