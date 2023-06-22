module.exports = app => {
  const Tasks = app.models.tasks;

  const findAll = (params, callback) => {
    // Implementation of the findAll method
    // ...
    const tasks = [
      { id: 1, title: "Morning Devotion", completed: true },
      { id: 2, title: "Build some API's", completed: true },
      { id: 3, title: "Bake some pies", completed: false }
    ];
  const result = [
    { id: 1, title: "Morning Devotion", completed: true },
    { id: 2, title: "Build some API's", completed: true },
    { id: 3, title: "Bake some pies", completed: false }
  ]
    // Call the callback function with the desired result
    callback(result);
  };

  app.get("/tasks", (req, res) => {
    findAll({}, (tasks) => {
      res.json({ tasks: tasks });
    });
  });
};