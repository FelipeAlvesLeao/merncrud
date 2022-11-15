const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    hour: {
        type: String
    },

    diaLmt: {
        type: Date
    },

    status: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Tasks', tasksSchema)