const todo = require("../models/todo")

const getAlltodo = async(req,res)=>{
    try {
        const Alltodo = await todo.find({})
        res.status(200).json({success:true, data: Alltodo})
    } catch (error) {
        console.log(error.message)
        
    }
}

const createTodo = async(req,res)=>{
    if(req.body.message === ''){
        return res.status(401).json({success:false})
    }
    try {
        const anything = await todo.create({message:req.body.message})
        res.status(201).json({success:true, data:anything})

    } catch (error) {
        console.log(error.message)
        
    }

}

const deletTodo = async(req,res)=>{
    try {
        const deletetodo = await todo.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({success:true})
    } catch (error) {
        console.log(error.message)
        
    }

}

const updateTodo = async(req,res)=>{
    try {
        const update = await todo.updateOne({message:req.body.message})
        res.status(200).json({success:true, data:update})
    } catch (error) {
        console.log(error)
    }


}

module.exports = {
    getAlltodo,
    createTodo,
    deletTodo,
    updateTodo
}