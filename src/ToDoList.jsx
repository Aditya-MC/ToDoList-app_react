import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
