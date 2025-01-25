import React, { useState } from 'react';
import tasksData from '../Data/tasks';
import Todo from './Todo';
import OnProgress from './OnProgress';
import Done from './Done';
import Revised from './Revised';
import AddTaskModal from './AddTaskModal';

export default function ProjectContent() {
  const [tasks, setTasks] = useState(tasksData);
  const [selectedTask, setSelectedTask] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('todos');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedTask(null); // Reset selectedTask when closing the modal
  };

  const handleEditTask = (task, category) => {
    setSelectedTask({ ...task, category }); // Set the task to be edited and its category
    setCurrentCategory(category); // Set the current category to match the task's category
    setIsModalOpen(true);
  };

  const handleSaveTask = (updatedTask) => {
    const updatedCategoryTasks = tasks[updatedTask.category].map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    setTasks({
      ...tasks,
      [updatedTask.category]: updatedCategoryTasks,
    });
    handleClose();
  };

  const handleAddTask = (newTask) => {
    if (!tasks[newTask.category]) {
      console.error(`Invalid category: ${newTask.category}`);
      return;
    }

    const updatedCategoryTasks = [...tasks[newTask.category], newTask];
    const updatedTasks = {
      ...tasks,
      [newTask.category]: updatedCategoryTasks,
    };
    setTasks(updatedTasks);

    setIsModalOpen(false); // Close modal after adding the task
  };

  const handleDeleteTask = (taskId, category) => {
    const updatedCategoryTasks = tasks[category].filter((task) => task.id !== taskId);
    const updatedTasks = {
      ...tasks,
      [category]: updatedCategoryTasks,
    };
    setTasks(updatedTasks);
  };

   // Sort tasks for a specific category
   const handleSortTasks = (category, sortOrder) => {
    const sortedTasks = [...tasks[category]].sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return sortOrder === 'newestToOldest' ? dateB - dateA : dateA - dateB;
    });

    setTasks({
      ...tasks,
      [category]: sortedTasks,
    });
  };



  return (
    <>
      {isModalOpen && (
        <AddTaskModal
          onClose={handleClose}
          onSave={selectedTask ? handleSaveTask : handleAddTask} // Assign appropriate function
          task={selectedTask} // Pass selected task or null for a new task
          category={currentCategory} // Pass current category for new task
        />
      )}
      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Projectify</h2>
          <div className="flex space-x-2">
            <button
              className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white cursor-pointer"
              onClick={() => {
                setSelectedTask(null); // Set selectedTask to null for a new task
                setCurrentCategory('todos'); // Default to 'todos' for new tasks
                setIsModalOpen(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 12h-6" />
                <path d="M12 9v6" />
              </svg>
              Add
            </button>
          </div>
        </div>

        <div className="-mx-2 mb-6 flex flex-wrap">
          <Todo
            todos={tasks.todos}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onSort={(sortOrder) => handleSortTasks('todos', sortOrder)}
          />
          <OnProgress
            onProgressTasks={tasks.onProgressTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onSort={(sortOrder) => handleSortTasks('onProgressTasks', sortOrder)}
          />
          <Done
            doneTasks={tasks.doneTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onSort={(sortOrder) => handleSortTasks('doneTasks', sortOrder)}
          />
          <Revised
            revisedTasks={tasks.revisedTasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onSort={(sortOrder) => handleSortTasks('revisedTasks', sortOrder)}
          />
        </div>
      </div>
    </>
  );
}
