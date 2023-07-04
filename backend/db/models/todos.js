const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  item: {
    type: "String",
    required: true,
  },
  color: {
    type: "String",
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
