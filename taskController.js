const tasks = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Walk the dog' },
  ];
  
  exports.getAllTasks = (req, res) => {
    res.json(tasks);
  };
  
  exports.getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === taskId);
  
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    res.json(task);
  };
  
  exports.createTask = (req, res) => {
    const { title } = req.body;
  
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
  
    const newTask = { id: tasks.length + 1, title };
    tasks.push(newTask);
  
    res.status(201).json(newTask);
  };
  
  exports.updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title } = req.body;
  
    const task = tasks.find((task) => task.id === taskId);
  
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    task.title = title;
  
    res.json(task);
  };
  
  exports.deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
  
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
  
    if (taskIndex === -1) {
      return res.status(404).json({ error: 'Task not found' });
    }
  
    tasks.splice(taskIndex, 1);
  
    res.sendStatus(204);
  };
  