import React, { useState } from 'react';

export default function Todo({ todos, onEdit, onDelete }) {
    const [sortOrder, setSortOrder] = useState(''); 

    // Toggle sorting order between 'oldestToNewest' and 'newestToOldest'
    const handleSort = () => {
        if (sortOrder === 'oldestToNewest') {
            setSortOrder('newestToOldest');
        } else {
            setSortOrder('oldestToNewest');
        }
    };
    const sortedTodos = [...todos].sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);

        if (sortOrder === 'oldestToNewest') {
            return dateA - dateB; // Sort from oldest to newest
        } else if (sortOrder === 'newestToOldest') {
            return dateB - dateA; // Sort from newest to oldest
        }
        return 0; // No sorting if no order is selected
    });

    return (
        <>
            <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
                <div className="rounded-lg bg-indigo-600 p-4">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold">To-Do ({todos.length})</h3>
                        <button aria-label="Sort Tasks" onClick={handleSort}>
                            {/* The icon changes based on the sort order */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending cursor-pointer"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 6l9 0" />
                                <path d="M4 12l7 0" />
                                <path d="M4 18l7 0" />
                                <path d="M15 15l3 3l3 -3" />
                                <path d="M18 6l0 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        {sortedTodos.map((task) => (
                            <div key={task.id} className="mb-4 rounded-lg bg-gray-800 p-4">
                                <div className="flex justify-between">
                                    <h4 className="mb-2 flex-1 font-semibold text-indigo-500">{task.title}</h4>
                                    <div className="flex gap-2">
                                        <button
                                            aria-label="Delete Task"
                                            className="text-zinc-300"
                                            onClick={() => onDelete(task.id, 'todos')}
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
                                                className="h-4 w-4 cursor-pointer text-zinc-300"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 7l16 0" />
                                                <path d="M10 11l0 6" />
                                                <path d="M14 11l0 6" />
                                                <path
                                                    d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                                                />
                                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                            </svg>
                                            {/* Delete icon */}
                                        </button>
                                        <button
                                            aria-label="Edit Task"
                                            className="text-zinc-300"
                                            onClick={() => onEdit(task, 'todos')}
                                        >
                                            {/* Edit icon */}
                                            <svg
                                                className="h-4 w-4 cursor-pointer text-zinc-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <p className="mb-2 text-sm text-zinc-200">{task.description}</p>
                                <p className="mt-6 text-xs text-zinc-400">{task.dueDate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
