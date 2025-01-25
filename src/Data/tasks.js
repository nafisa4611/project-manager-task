const tasksData = {
    todos: [
      {
        id: crypto.randomUUID(),
        title: "Content Writer",
        description: "Prepare proctor for client meeting",
        dueDate: '2025-01-25',
      },
      { 
        id: crypto.randomUUID(), 
        title: "Task 2",  
        description: "Task 2 description",
        dueDate: "2025-01-12",
      },
    ],
    onProgressTasks: [
      {
        id: crypto.randomUUID(),
        title: "Content Writer",
        description: "Prepare proctor for client meeting",
        dueDate: '2025-01-25',
      },
    ],
    doneTasks: [
      {
        id: crypto.randomUUID(),
        title: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        dueDate: '2025-01-25',
      },
    ],
    revisedTasks: [
      {
        id: crypto.randomUUID(),
        title: "Content Writer",
        description: "Make Promotional Ads for Instagram fasto's",
        dueDate: '2025-01-25',
      },
    ],
  };
  
  export default tasksData;
  