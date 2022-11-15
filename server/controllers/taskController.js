const Tasks = require("../models/tasksModel");
const mongoose = require('mongoose')
//GET all
const getAllTask = async(req,res) =>{
    const task = await Tasks.find({}).sort({createdAt: 'asc'});
    res.status(200).json(task);
}

//GET one
const getTask = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "Invalid ID"})
    }

    const task = await Tasks.findById(id)

    if(!task) {return res.status(404).json({err: "No such task"})}

    res.status(200).json(task)
}

// POST new
const createTask = async(req, res) => {
    const { title, hour, diaLmt, status } = req.body;

    try {
      const task = await Tasks.create({ title, hour, diaLmt, status });
      res.status(200);
      res.json(task);
    } catch (error) {res.status(400).json(error.message)}
}

// DELETE one
const deleteTask = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "Invalid ID"})
    }

    const task = await Tasks.findOneAndDelete({_id: id})

    if(!task) {return res.status(404).json({err: "No such task"})}
    res.status(200).json(task)
}

//Update paramethers

const updateTask = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err: "Invalid ID"})
    }
    
    const task = await Tasks.findByIdAndUpdate(id, {
        ...req.body,
    })

    if(!task) {return res.status(404).json({err: "No such task"})}
    res.status(200).json(task)
}

module.exports = {
    createTask, getAllTask, getTask, deleteTask, updateTask
}