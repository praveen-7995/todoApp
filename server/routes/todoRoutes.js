const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Create Todo
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get Todos with Pagination
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const todos = await Todo.find().skip((page - 1) * limit).limit(limit);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Get Single Todo
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

// Update Todo
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
