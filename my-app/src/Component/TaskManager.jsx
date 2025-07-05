import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  // Priority mapping for sorting
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  // Add new task
  const addTask = () => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    sortAndSetTasks(updatedTasks);
    setTitle('');
    setPriority('Medium');
  };

  // Delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    sortAndSetTasks(updatedTasks);
  };

  // Toggle completion
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    sortAndSetTasks(updatedTasks);
  };

  // Sort tasks by priority
  const sortAndSetTasks = (tasksToSort) => {
    const sorted = [...tasksToSort].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    setTasks(sorted);
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const priorityMatch = filterPriority === 'All' || task.priority === filterPriority;
    const statusMatch =
      filterStatus === 'All' ||
      (filterStatus === 'Completed' && task.completed) ||
      (filterStatus === 'Incomplete' && !task.completed);
    return priorityMatch && statusMatch;
  });

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Advanced Task Manager</h1>
      
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Task
        </button>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label>Filter by Priority:</label>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Filter by Status:</label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border rounded ${
              task.priority === 'High' ? 'bg-red-100' : ''
            }`}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span
                className={`${task.completed ? 'line-through text-gray-500' : ''}`}
              >
                {task.title} <span className="text-xs text-gray-600">({task.priority})</span>
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
// This code defines a TaskManager component that allows users to add, delete, and filter tasks based on priority and completion status.
// It uses React hooks for state management and includes basic styling with Tailwind CSS classes.