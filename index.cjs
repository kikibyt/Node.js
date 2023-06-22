const express = require('express');
const consign = require('consign');

const app = express();


app.set("json spaces", 4);



 consign()
 .include("models")
 .then("libs/middlewares.cjs")
.then("routes")
.then("libs/boot.cjs")
.into(app);


app.get("/", (req, res) => res.json({ status: "ntask-API" }));

app.get("/tasks", (req, res) => {
  res.json({
    tasks: [
      { title: "Buy some clothes" },
      { title: "Fix notebook" }
    ]
  });

});

const PORT = 3001; // Replace 3000 with your desired port number

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));
