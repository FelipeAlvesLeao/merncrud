const express = require("express");
const router = express.Router();
const {createTask, getAllTask, getTask, deleteTask, updateTask} = require('../controllers/taskController')

//Queries
router.get("/", getAllTask)

router.get("/:id", getTask)

router.post("/", createTask)

router.delete("/:id", deleteTask) 

router.patch("/:id", updateTask)

module.exports = router;
