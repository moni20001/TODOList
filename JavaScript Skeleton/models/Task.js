const mongoose = require('mongoose');
let taskSchema = mongoose.Schema(
    {
        title:{type:String,require:true,unique:true},
        comments:{type:String,require:true,unique:true}

    }
)
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
