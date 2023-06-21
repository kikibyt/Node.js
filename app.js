const express = require('express');
const { json } = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();

// Set up middleware to parse JSON request bodies
app.use(json());
app.set("json spaces", 4);


// Mount the tasks router
app.use('/tasks', tasksRouter);

// Start the server
app.listen(3000, () => {
  console.log('Task API server started on port 3000');
});
