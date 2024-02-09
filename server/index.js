const express = require ('express')
const RunServer = require('./database/connection')
const todoRoute = require('./routes/route')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

RunServer()
app.use(cors()) //backend port = 3000 and front is n5173
app.use(morgan('dev'))

app.use(express.json())
app.use('/todo',todoRoute)

app.listen(3000,()=>{
    console.log('serverr is up')
})
