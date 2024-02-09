const express = require ('express')
const { getAlltodo, createTodo, updateTodo, deletTodo } = require('../controller/todoctrl')

const router = express.Router()

// CRUD

// CREATE = POST
// READ = GET
// UPDATE = PUT
// DELETE = DELETE


router.get('/getallTodo', getAlltodo)
router.post('/', createTodo)
router.put('/todoupdate', updateTodo)
router.delete('/tododelete/:id', deletTodo)

module.exports = router


// http://localhost:3000/getallTodo



