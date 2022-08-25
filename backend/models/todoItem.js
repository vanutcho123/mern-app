//import mongoose to create new Schema

const mongoose = require("mongoose");

//Create Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    require: true,
  },
});

//export this Schema

module.exports = mongoose.model("todo", TodoItemSchema);
