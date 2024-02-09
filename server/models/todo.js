const mongoose = require ('mongoose')

const todoSchema = new mongoose.Schema({
    message:{
        type:String,
        required:'true',
        min:4,
        max:20
    }

})

const todo = mongoose.model('Todo',todoSchema)
module.exports= todo
