import React, { useState } from 'react';

export default function AddTaskModal({ onClose, onSave, task }) {
    const [taskName, setTaskName] = useState(task ? task.title : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
    const [category, setCategory] = useState(task ? task.category : 'todos');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: task ? task.id : Date.now(), // Use existing ID or generate a new one
            title: taskName,
            description,
            dueDate,
            category, // Ensure category matches keys in tasks
        };

        onSave(newTask);
    };



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">
                        {task ? 'Edit Task' : 'Create New Task'}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="taskName" className="mb-1 block text-sm font-medium text-gray-300">
                                Task Name
                            </label>
                            <input
                                type="text"
                                id="taskName"
                                name="taskName"
                                required
                                value={taskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-300">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dueDate" className="mb-1 block text-sm font-medium text-gray-300">
                                Due Date
                            </label>
                            <input
                                type="date"
                                id="dueDate"
                                name="dueDate"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="mb-1 block text-sm font-medium text-gray-300">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                                <option value="todos">To-Do</option>
                                <option value="onProgressTasks">On Progress</option>
                                <option value="doneTasks">Done</option>
                                <option value="revisedTasks">Revised</option>
                            </select>



                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit" // Submit form on button click
                                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                {task ? 'Save Changes' : 'Create New Task'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
