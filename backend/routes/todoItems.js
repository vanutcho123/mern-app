const router = require("express").Router();
//import todo model
const todoItemsModel = require("../models/todoItem");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json("Item added successfully");
  } catch (err) {
    res.json(err);
  }
});

// Lets create second route -- get data from database

router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//Lets update item

router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item updated");
  } catch (err) {
    res.json(err);
  }
});

//Lets delete item

router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Delete updated");
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
