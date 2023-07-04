const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db/mongoose");
const Todo = require("./db/models/todos");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: "GET,POST,DELETE", // Allow specific HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allow specific headers
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  if (todos) {
    let arr = [];
    todos.forEach((todo) => arr.push({ item: todo.item, color: todo.color }));
    res.send(arr);
  } else res.send("no more todos");
});

app.post("/todos", async (req, res) => {
  //console.log(req.body);
  const { item, color } = req.body;
  const todo = new Todo({ item, color });
  await todo.save();
  const todos = await Todo.find({});
  if (todos) {
    let arr = [];
    todos.forEach((todo) => arr.push({ item: todo.item, color: todo.color }));
    res.send(arr);
  } else res.send("no more todos");
});

app.delete("/todos/:item", async (req, res) => {
  await Todo.deleteOne({ item: req.params.item });

  res.send("deleted successfully");
});

app.listen(5000, () => console.log("server is running on port 5000"));
